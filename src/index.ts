import 'index.scss';
import 'normalize.css';

import '@webcomponents/webcomponentsjs/webcomponents-hi-sd-ce';
import 'reflect-metadata';

import { Application } from 'Application';
import { container } from 'inversify.config';

window.onload = bootstrap;

function bootstrap() {
  const canvasElement = document.getElementById('application-canvas');
  if (!canvasElement) {
    throw new Error("Canvas with id 'application-canvas' not found");
  }

  const canvas = <HTMLCanvasElement>canvasElement;
  container.bind<HTMLCanvasElement>(HTMLCanvasElement).toConstantValue(canvas);

  const gl = canvas.getContext('webgl');
  if (!gl) {
    throw new Error('WebGL is not supported');
  }

  container.bind<WebGLRenderingContext>(WebGLRenderingContext).toConstantValue(gl);

  container.get(Application).init();
}
