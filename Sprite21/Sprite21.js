/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite21 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite21/costumes/costume1.svg", {
        x: 154.1685459136961,
        y: 89.68231811523444
      }),
      new Costume("costume2", "./Sprite21/costumes/costume2.svg", {
        x: 154.168545,
        y: 89.68231999999998
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite21/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message11" },
        this.whenIReceiveMessage11
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message5" },
        this.whenIReceiveMessage5
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

  *whenthisspriteclicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "costume1";
    this.broadcast("message12");
  }

  *whenIReceiveMessage5() {
    this.costume = "costume2";
  }

  *whenIReceiveMessage13() {
    this.visible = false;
  }
}
