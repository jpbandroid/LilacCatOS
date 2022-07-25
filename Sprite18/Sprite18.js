/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.svg", {
        x: 85.43442526524441,
        y: 30.359468762314776
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite18/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message8" },
        this.whenIReceiveMessage8
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message7" },
        this.whenIReceiveMessage7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message10" },
        this.whenIReceiveMessage10
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage8() {
    this.moveAhead();
  }

  *whenIReceiveMessage7() {
    this.visible = true;
  }

  *whenIReceiveMessage10() {
    this.visible = false;
  }
}
