import { injectable } from 'inversify';
import { ShaderProgramInitializer } from 'services/ShaderProgramInitializer';

// tslint:disable no-require-imports no-var-requires
const vertexShaderSource: string = require('./shaders/vertex-shader.glsl');
const fragmentShaderSource: string = require('./shaders/fragment-shader.glsl');
// tslint:enable no-require-imports no-var-requires

@injectable()
export class Application {
  private readonly gl: WebGLRenderingContext;
  private readonly shaderProgramInitializer: ShaderProgramInitializer;

  constructor(
    gl: WebGLRenderingContext,
    shaderProgramInitializer: ShaderProgramInitializer
  ) {
    this.gl = gl;
    this.shaderProgramInitializer = shaderProgramInitializer;
  }

  public init() {
    const gl = this.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const shaderProgram = this.shaderProgramInitializer.initShaderProgram(
      vertexShaderSource,
      fragmentShaderSource
    );

    const attribLocations = {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'vertexPosition')
    };
    const uniformLocations = {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix')
    };
  }
}
