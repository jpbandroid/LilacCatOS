/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EmojiU1f4bf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("emoji_u1f4bf", "./EmojiU1f4bf/costumes/emoji_u1f4bf.svg", {
        x: 27.23382568359375,
        y: 27.231435775756836
      })
    ];

    this.sounds = [
      new Sound("Dance Magic", "./EmojiU1f4bf/sounds/Dance Magic.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message4" },
        this.whenIReceiveMessage4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message3" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message6" },
        this.whenIReceiveMessage6
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveMessage4() {
    this.moveAhead();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveMessage3() {
    this.visible = true;
  }

  *whenIReceiveMessage6() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("Dance Magic");
  }
}
