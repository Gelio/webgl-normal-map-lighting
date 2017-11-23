import { EventEmitter } from 'eventemitter3';
import { injectable } from 'inversify';

import { Vector3 } from 'common/Vector3';
import { configuration } from 'configuration';

@injectable()
export class LightSimulator extends EventEmitter {
  private readonly horizontalRadiansModuloValue = 2 * Math.PI; // [0; 360] degrees
  private horizontalStepInRadians: number;

  private minVerticalAngle: number;
  private verticalAngleDelta: number;
  private verticalStepInRadians: number;

  private movingLightIntervalId: number;
  private lightHorizontalAngle = 0;
  private lightVerticalAngleOffset = configuration.movingLight.minVerticalAngle;
  private lightVerticalRising = true;
  private lightPositionRadius = configuration.movingLight.radius;

  private readonly centerX = configuration.movingLight.center.x;
  private readonly centerY = configuration.movingLight.center.y;

  constructor() {
    super();

    this.performInitialCalculations();
    this.movingLightTick = this.movingLightTick.bind(this);
  }

  public init() {
    this.startMovingLight();
  }

  public destroy() {
    this.stopMovingLight();
  }

  private performInitialCalculations() {
    this.horizontalStepInRadians = configuration.movingLight.tickInterval /
      configuration.movingLight.horizontalLapTime *
      2 *
      Math.PI;

    this.minVerticalAngle = configuration.movingLight.minVerticalAngle;
    this.verticalAngleDelta = configuration.movingLight.maxVerticalAngle -
      this.minVerticalAngle;

    this.verticalStepInRadians = configuration.movingLight.tickInterval /
      configuration.movingLight.verticalLapTime *
      this.verticalAngleDelta;
  }

  private dispatchLightPosition(position: Vector3) {
    this.emit('light-position-change', position);
  }

  private startMovingLight() {
    this.movingLightIntervalId = setInterval(
      this.movingLightTick,
      configuration.movingLight.tickInterval
    );
  }

  private movingLightTick() {
    const { centerX, centerY } = this;
    const verticalAngle =
      configuration.movingLight.minVerticalAngle + this.lightVerticalAngleOffset;

    const horizontalRadius = this.lightPositionRadius * Math.cos(verticalAngle);

    const x = centerX + horizontalRadius * Math.cos(this.lightHorizontalAngle);
    const y = centerY + horizontalRadius * Math.sin(this.lightHorizontalAngle);
    const z = this.lightPositionRadius * Math.sin(verticalAngle);

    const lightPosition = new Vector3(x, y, z);
    this.dispatchLightPosition(lightPosition);

    this.horizontalTick();
    this.verticalTick();
  }

  private horizontalTick() {
    this.lightHorizontalAngle += this.horizontalStepInRadians;
    if (this.lightHorizontalAngle >= this.horizontalRadiansModuloValue) {
      this.lightHorizontalAngle -= this.horizontalRadiansModuloValue;
    }
  }

  private verticalTick() {
    if (this.lightVerticalRising) {
      this.lightVerticalAngleOffset += this.verticalStepInRadians;
      if (this.lightVerticalAngleOffset >= this.verticalAngleDelta) {
        this.lightVerticalRising = false;
      }
    } else {
      this.lightVerticalAngleOffset -= this.verticalStepInRadians;
      if (this.lightVerticalAngleOffset <= 0) {
        this.lightVerticalRising = true;
      }
    }
  }

  private stopMovingLight() {
    clearInterval(this.movingLightIntervalId);
    this.lightHorizontalAngle = 0;
    this.lightVerticalAngleOffset = configuration.movingLight.minVerticalAngle;
    this.lightVerticalRising = true;
  }
}
