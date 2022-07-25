/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite17/costumes/costume1.svg", {
        x: 89.54060999999999,
        y: 94.57455166666662
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite17/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message10" },
        this.whenIReceiveMessage10
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message7" },
        this.whenIReceiveMessage7
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message8" },
        this.whenIReceiveMessage8
      )
    ];
  }

  *whenIReceiveMessage10() {
    this.visible = false;
  }

  *whenIReceiveMessage7() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage8() {
    this.moveAhead();
  }
}
