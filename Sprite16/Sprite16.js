/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.svg", {
        x: 15.153652496744797,
        y: 8.583305267723603
      }),
      new Costume("costume2", "./Sprite16/costumes/costume2.svg", {
        x: 15.153649999999999,
        y: 8.583085736473578
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message7" },
        this.whenIReceiveMessage7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message8" },
        this.whenIReceiveMessage8
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
    this.costume = "costume1";
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    yield* this.wait(1);
    this.broadcast("message10");
  }

  *whenIReceiveMessage7() {
    this.visible = true;
  }

  *whenIReceiveMessage8() {
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenIReceiveMessage10() {
    this.visible = false;
  }
}
