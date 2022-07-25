/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite11/costumes/costume1.svg", {
        x: 140.3795318603515,
        y: 69.40788269042969
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite11/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message4" },
        this.whenIReceiveMessage4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage5
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message6" },
        this.whenIReceiveMessage6
      )
    ];
  }

  *whenIReceiveMessage3() {
    this.visible = true;
  }

  *whenIReceiveMessage4() {
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage5() {
    this.visible = true;
  }

  *whenIReceiveMessage6() {
    this.visible = false;
  }
}
