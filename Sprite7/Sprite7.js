/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 154.1685459136961,
        y: 89.68231811523444
      }),
      new Costume("costume2", "./Sprite7/costumes/costume2.svg", {
        x: 154.168545,
        y: 89.68231999999998
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage3
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message5" },
        this.whenIReceiveMessage5
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

  *whenthisspriteclicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "costume1";
    this.broadcast("message4");
  }

  *whenIReceiveMessage5() {
    this.costume = "costume2";
  }

  *whenIReceiveMessage6() {
    this.visible = false;
  }
}
