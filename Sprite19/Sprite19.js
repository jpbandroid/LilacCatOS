/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite19 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite19/costumes/costume1.svg", {
        x: 86.72669528820936,
        y: 18.975858030918175
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite19/sounds/pop.wav")];

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
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveMessage7() {
    this.visible = true;
  }

  *whenIReceiveMessage10() {
    this.visible = false;
  }
}
