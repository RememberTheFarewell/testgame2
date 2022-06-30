/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 45.679954528808594,
        y: 15.981249999999989
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(0, 0);
  }

  *whenIReceiveMessage1() {
    this.visible = true;
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.direction = 0;
        this.move(10);
      }
      if (this.keyPressed("down arrow")) {
        this.direction = 180;
        this.move(10);
      }
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.move(10);
      }
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.move(10);
      }
      yield;
    }
  }
}
