/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite23 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("emoji_u1f3b5", "./Sprite23/costumes/emoji_u1f3b5.svg", {
        x: 57.65119832038897,
        y: 55.39580036714136
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite23/sounds/pop.wav")];

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
