/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite25 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite25/costumes/costume1.svg", {
        x: 143.2682839743372,
        y: 10.745293145252788
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite25/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message11" },
        this.whenIReceiveMessage11
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message12" },
        this.whenIReceiveMessage12
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message13" },
        this.whenIReceiveMessage13
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage11() {
    this.visible = true;
  }

  *whenIReceiveMessage12() {
    this.moveAhead();
  }

  *whenIReceiveMessage13() {
    this.visible = false;
  }
}
