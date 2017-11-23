import { Vector3 } from 'common/Vector3';

export const configuration = {
  backgroundTextureUrl: 'images/backgrounds/Funny-Cat-Face.jpg',
  // backgroundTextureUrl: 'images/backgrounds/hqdefault.jpg',
  normalMapUrl: 'images/normal-maps/normal_map.jpg',

  movingLight: {
    horizontalLapTime: 10 * 1000,
    verticalLapTime: 8 * 1000,
    minVerticalAngle: 20 / 180 * Math.PI,
    maxVerticalAngle: 70 / 180 * Math.PI,
    tickInterval: 50,
    center: {
      x: 0.5,
      y: 0.5
    },
    radius: 0.4
  },

  kD: 1,
  kS: 1,
  m: 100,
  viewerVector: new Vector3(0, 0, 1)
};
