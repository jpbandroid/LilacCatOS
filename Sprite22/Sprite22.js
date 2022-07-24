/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite22 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite22/costumes/costume1.svg", {
        x: 15.153652496744797,
        y: 8.583305267723603
      }),
      new Costume("costume2", "./Sprite22/costumes/costume2.svg", {
        x: 15.153649999999999,
        y: 8.583085736473578
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite22/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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
    this.costume = "costume1";
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    yield* this.wait(1);
  }

  *whenIReceiveMessage11() {
    this.visible = true;
  }

  *whenIReceiveMessage12() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveMessage13() {
    this.visible = false;
  }
}
