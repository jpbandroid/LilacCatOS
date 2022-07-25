/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite15 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite15/costumes/costume1.svg", {
        x: 97.4060842058822,
        y: 107.56354475565622
      }),
      new Costume("costume2", "./Sprite15/costumes/costume2.svg", {
        x: 97.4060842058822,
        y: 107.56354475565622
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite15/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message7" },
        this.whenIReceiveMessage7
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message5" },
        this.whenIReceiveMessage5
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

  *whenIReceiveMessage7() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.moveAhead();
    this.costume = "costume1";
    this.broadcast("message8");
  }

  *whenIReceiveMessage5() {
    this.costume = "costume2";
  }

  *whenIReceiveMessage10() {
    this.visible = false;
  }
}
