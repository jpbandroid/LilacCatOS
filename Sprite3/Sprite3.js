/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 44.82330322265625,
        y: 9.62005615234375
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 44.82330322265625,
        y: 9.62005615234375
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message2" },
        this.whenIReceiveMessage2
      )
    ];
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    this.broadcast("message1");
    this.stage.vars.startmenuon = 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.stage.vars.startmenuon = 0;
    while (true) {
      if (this.stage.vars.startmenuon == 0) {
        this.costume = "costume1";
      }
      yield;
    }
  }

  *whenIReceiveMessage2() {
    this.stage.vars.startmenuon = 0;
    if (this.stage.vars.startmenuon == 0) {
      this.costume = "costume1";
    }
  }
}
