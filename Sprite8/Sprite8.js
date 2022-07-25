/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("emoji_u1f3b5", "./Sprite8/costumes/emoji_u1f3b5.svg", {
        x: 56.32594937555061,
        y: 58.24672357062636
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

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
    this.moveAhead();
  }

  *whenIReceiveMessage2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("message3");
  }
}
