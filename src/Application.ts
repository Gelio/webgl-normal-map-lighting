import { injectable } from 'inversify';
import { ImageLoader } from 'services/ImageLoader';
import { ShaderProgramInitializer } from 'services/ShaderProgramInitializer';
import { TextureLoader } from 'services/TextureLoader';

import { configuration } from 'configuration';

// tslint:disable no-require-imports no-var-requires
const vertexShaderSource: string = require('./shaders/vertex-shader.glsl');
const fragmentShaderSource: string = require('./shaders/fragment-shader.glsl');
// tslint:enable no-require-imports no-var-requires

@injectable()
export class Application {
  private readonly gl: WebGLRenderingContext;
  private readonly shaderProgramInitializer: ShaderProgramInitializer;
  private readonly textureLoader: TextureLoader;
  private readonly imageLoader: ImageLoader;

  private shaderProgram: WebGLProgram;

  private attribLocations: { [locationName: string]: number };
  private uniformLocations: {
    [locationName: string]: WebGLUniformLocation | null;
  };

  private backgroundImage: HTMLImageElement;
  private normalMapImage: HTMLImageElement;

  private backgroundTexture: WebGLTexture;
  private normalMapTexture: WebGLTexture;

  constructor(
    gl: WebGLRenderingContext,
    shaderProgramInitializer: ShaderProgramInitializer,
    textureLoader: TextureLoader,
    imageLoader: ImageLoader
  ) {
    this.gl = gl;
    this.shaderProgramInitializer = shaderProgramInitializer;
    this.textureLoader = textureLoader;
    this.imageLoader = imageLoader;
  }

  public async init() {
    const gl = this.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const loadImagesPromise = this.loadImages();

    this.shaderProgram = this.shaderProgramInitializer.initShaderProgram(
      vertexShaderSource,
      fragmentShaderSource
    );
    gl.useProgram(this.shaderProgram);

    this.getAttributeLocations();
    this.getUniformLocations();

    this.initializeTextureCoordsBuffer();
    this.initializePlaneBuffer();

    await loadImagesPromise;

    this.initializeBackgroundTexture();
    this.initializeNormalMapTexture();

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.normalMapTexture);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  private prepareRenderingPlaneBuffer() {
    const gl = this.gl;
    // prettier-ignore
    const planeVertices = new Float32Array([
      -1.0, 1.0,
      1.0, 1.0,
      1.0, -1.0,

      -1.0, 1.0,
      1.0, -1.0,
      -1.0, -1.0
    ]);

    const planeBuffer = gl.createBuffer();

    if (!planeBuffer) {
      throw new Error('Cannot create buffer');
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, planeVertices, gl.STATIC_DRAW);

    return planeBuffer;
  }

  private prepareTextureCoordsBuffer() {
    const gl = this.gl;
    // prettier-ignore
    const textureCoordsVertices = new Float32Array([
      0.0, 0.0,
      1.0, 0.0,
      1.0, 1.0,

      0.0, 0.0,
      1.0, 1.0,
      0.0, 1.0
    ]);

    const textureCoordsBuffer = gl.createBuffer();

    if (!textureCoordsBuffer) {
      throw new Error('Cannot create buffer');
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, textureCoordsVertices, gl.STATIC_DRAW);

    return textureCoordsBuffer;
  }

  private async loadImages() {
    const [backgroundImage, normalMapImage] = await Promise.all([
      this.imageLoader.loadImage(configuration.backgroundTextureUrl),
      this.imageLoader.loadImage(configuration.normalMapUrl)
    ]);

    this.backgroundImage = backgroundImage;
    this.normalMapImage = normalMapImage;
  }

  private initializeTextureCoordsBuffer() {
    const gl = this.gl;

    const textureCoordsBuffer = this.prepareTextureCoordsBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordsBuffer);

    gl.vertexAttribPointer(
      this.attribLocations.textureCoord,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    gl.enableVertexAttribArray(this.attribLocations.textureCoord);
  }

  private initializePlaneBuffer() {
    const gl = this.gl;

    const planeBuffer = this.prepareRenderingPlaneBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);

    gl.vertexAttribPointer(
      this.attribLocations.vertexPosition,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    gl.enableVertexAttribArray(this.attribLocations.vertexPosition);
  }

  private initializeBackgroundTexture() {
    const gl = this.gl;

    this.backgroundTexture = this.textureLoader.loadTexture(
      this.backgroundImage
    );

    gl.uniform1i(this.uniformLocations.backgroundSampler, 0);
  }

  private initializeNormalMapTexture() {
    const gl = this.gl;

    this.normalMapTexture = this.textureLoader.loadTexture(
      this.normalMapImage
    );

    gl.uniform1i(this.uniformLocations.normalMapSampler, 1);
  }

  private getAttributeLocations() {
    const gl = this.gl;

    this.attribLocations = {
      vertexPosition: gl.getAttribLocation(
        this.shaderProgram,
        'aVertexPosition'
      ),
      textureCoord: gl.getAttribLocation(this.shaderProgram, 'aTextureCoord')
    };
  }

  private getUniformLocations() {
    const gl = this.gl;

    this.uniformLocations = {
      backgroundSampler: gl.getUniformLocation(
        this.shaderProgram,
        'uBackgroundSampler'
      ),
      normalMapSampler: gl.getUniformLocation(
        this.shaderProgram,
        'uNormalMapSampler'
      )
    };
  }
}
