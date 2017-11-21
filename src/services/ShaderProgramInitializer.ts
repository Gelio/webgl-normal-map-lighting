import { injectable } from 'inversify';
import { ShaderLoader } from 'services/ShaderLoader';

@injectable()
export class ShaderProgramInitializer {
  private readonly gl: WebGLRenderingContext;
  private readonly shaderLoader: ShaderLoader;

  constructor(gl: WebGLRenderingContext, shaderLoader: ShaderLoader) {
    this.gl = gl;
    this.shaderLoader = shaderLoader;
  }

  public initShaderProgram(
    vertexShaderSource: string,
    fragmentShaderSource: string
  ): WebGLProgram {
    const gl = this.gl;
    const shaderProgram = gl.createProgram();

    if (!shaderProgram) {
      throw new Error('Cannot create WebGL program');
    }

    const { fragmentShader, vertexShader } = this.createShaders(
      vertexShaderSource,
      fragmentShaderSource
    );

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      const programInfoLog = gl.getProgramInfoLog(shaderProgram);
      gl.deleteProgram(shaderProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      throw new Error(`Cannot link program: ${programInfoLog}`);
    }

    return shaderProgram;
  }

  private createShaders(
    vertexShaderSource: string,
    fragmentShaderSource: string
  ) {
    const gl = this.gl;

    const vertexShader = this.shaderLoader.loadShader(
      gl.VERTEX_SHADER,
      vertexShaderSource
    );
    const fragmentShader = this.shaderLoader.loadShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    return { vertexShader, fragmentShader };
  }
}
