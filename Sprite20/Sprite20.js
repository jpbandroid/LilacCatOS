/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("emoji_u1f3b5", "./Sprite20/costumes/emoji_u1f3b5.svg", {
        x: 56.325950000000006,
        y: 58.246714999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite20/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message5" },
        this.whenIReceiveMessage5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message2" },
        this.whenIReceiveMessage2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage1() {
    this.visible = true;
  }

  *whenIReceiveMessage5() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveMessage2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("message11");
  }
}
