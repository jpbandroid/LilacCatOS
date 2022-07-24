/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite26 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite26/costumes/costume1.svg", {
        x: 132.90253431396485,
        y: 17.87122662500002
      }),
      new Costume("costume2", "./Sprite26/costumes/costume2.svg", {
        x: 50.043872557067715,
        y: 47.841959625000015
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite26/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message12" },
        this.whenIReceiveMessage12
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message13" },
        this.whenIReceiveMessage13
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message14" },
        this.whenIReceiveMessage14
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message15" },
        this.whenIReceiveMessage15
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage12() {
    this.moveAhead();
  }

  *whenIReceiveMessage13() {
    this.visible = false;
  }

  *whenIReceiveMessage14() {
    this.costume = "costume1";
    this.visible = true;
  }

  *whenIReceiveMessage15() {
    this.costume = "costume2";
    this.visible = true;
  }
}
