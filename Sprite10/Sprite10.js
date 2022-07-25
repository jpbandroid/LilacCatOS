/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("emoji_u1f3b5", "./Sprite10/costumes/emoji_u1f3b5.svg", {
        x: 52.74872229625143,
        y: 54.1870285514474
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message4" },
        this.whenIReceiveMessage4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message6" },
        this.whenIReceiveMessage6
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage3() {
    this.visible = true;
  }

  *whenIReceiveMessage4() {
    this.moveAhead();
  }

  *whenIReceiveMessage6() {
    this.visible = false;
  }
}
