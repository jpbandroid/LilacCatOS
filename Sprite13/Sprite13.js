/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 61.579940795898466,
        y: 15.895312500000017
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message4" },
        this.whenIReceiveMessage4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message6" },
        this.whenIReceiveMessage6
      )
    ];
  }

  *whenIReceiveMessage4() {
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage3() {
    this.visible = true;
  }

  *whenIReceiveMessage6() {
    this.visible = false;
  }
}
