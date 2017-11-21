import { injectable } from 'inversify';

@injectable()
export class ShaderLoader {
  private readonly gl: WebGLRenderingContext;

  constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
  }

  public loadShader(shaderType: number, source: string): WebGLShader {
    const gl = this.gl;
    const shader = gl.createShader(shaderType);

    if (!shader) {
      throw new Error('Cannot create shader');
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const shaderInfoLog = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Cannot compile shader: ${shaderInfoLog}`);
    }

    return shader;
  }
}
