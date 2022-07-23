/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 12.656635000000051,
        y: 15.981252499999982
      }),
      new Costume("costume2", "./Sprite6/costumes/costume2.svg", {
        x: 12.65663500000008,
        y: 15.895317499999976
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message2" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message5" },
        this.whenIReceiveMessage5
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
    this.broadcast("message2");
  }

  *whenIReceiveMessage1() {
    this.costume = "costume1";
    this.visible = true;
  }

  *whenIReceiveMessage2() {
    this.visible = false;
  }

  *whenIReceiveMessage5() {
    this.moveAhead();
  }
}
