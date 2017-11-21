import { injectable } from 'inversify';

@injectable()
export class ImageLoader {
  public loadImage(url: string) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => resolve(image);
      image.onerror = reject;

      image.src = url;
    });
  }
}
