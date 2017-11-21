import { Container } from 'inversify';

import { Application } from 'Application';
import { ImageLoader } from 'services/ImageLoader';
import { ShaderLoader } from 'services/ShaderLoader';
import { ShaderProgramInitializer } from 'services/ShaderProgramInitializer';

const container = new Container();

container.bind<Application>(Application).toSelf().inSingletonScope();
container.bind<ShaderLoader>(ShaderLoader).toSelf();
container.bind<ImageLoader>(ImageLoader).toSelf();
container.bind<ShaderProgramInitializer>(ShaderProgramInitializer).toSelf();

export { container };
