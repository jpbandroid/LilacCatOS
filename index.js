import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import EmojiU1f4bf from "./EmojiU1f4bf/EmojiU1f4bf.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import EmojiU1f4bf2 from "./EmojiU1f4bf2/EmojiU1f4bf2.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Sprite19 from "./Sprite19/Sprite19.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import Sprite21 from "./Sprite21/Sprite21.js";
import Sprite22 from "./Sprite22/Sprite22.js";
import Sprite23 from "./Sprite23/Sprite23.js";
import Sprite24 from "./Sprite24/Sprite24.js";
import Sprite25 from "./Sprite25/Sprite25.js";
import Sprite26 from "./Sprite26/Sprite26.js";

import {
  fluentButton,
  provideFluentDesignSystem
} from "https://unpkg.com/@fluentui/web-components@2.0.0";

provideFluentDesignSystem().register(fluentButton());
const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 16.9853515625,
    y: 21.970794677734375,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: -25.94671630859375,
    y: -177.72702026367188,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: -220.99151552764232,
    y: -162.5654385531946,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: -195.801025390625,
    y: -155.75619506835938,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Sprite5: new Sprite5({
    x: -169.32421875,
    y: -27.925765991210938,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite6: new Sprite6({
    x: -114.87060546875,
    y: 73.93904113769531,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite7: new Sprite7({
    x: 5.02655029296875,
    y: 8.026580810546875,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false
  }),
  Sprite8: new Sprite8({
    x: -181.8131103515625,
    y: -2.9589385986328125,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite9: new Sprite9({
    x: 135.91448974609375,
    y: 87.92050170898438,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite10: new Sprite10({
    x: 9.574560105542645,
    y: 69.53888490960475,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false
  }),
  Sprite11: new Sprite11({
    x: -1.96759033203125,
    y: -0.960235595703125,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  EmojiU1f4bf: new EmojiU1f4bf({
    x: -111.986328125,
    y: 28.007797241210938,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite12: new Sprite12({
    x: -13.9569091796875,
    y: -36.91387939453125,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  EmojiU1f4bf2: new EmojiU1f4bf2({
    x: -112.31359025767205,
    y: -38.237308877944415,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite13: new Sprite13({
    x: -15.04419400064269,
    y: 22.064349556465427,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite14: new Sprite14({
    x: -180.25633249523236,
    y: -16.179052215436773,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite15: new Sprite15({
    x: 45.95152909807151,
    y: 24.394879333692913,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite16: new Sprite16({
    x: 121.56891577790816,
    y: 122.17635800127148,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite17: new Sprite17({
    x: 46,
    y: 16,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite18: new Sprite18({
    x: 44,
    y: 76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite19: new Sprite19({
    x: 44,
    y: 25,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite20: new Sprite20({
    x: -194.05946702223991,
    y: -98.06961613877758,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite21: new Sprite21({
    x: 76.17944630259021,
    y: 26.663335990972058,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite22: new Sprite22({
    x: 209.90613153164512,
    y: 107.45710167061272,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite23: new Sprite23({
    x: 83.77444836479782,
    y: 89.81139405721228,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true
  }),
  Sprite24: new Sprite24({
    x: 69.66616803604805,
    y: 18.532542244503,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite25: new Sprite25({
    x: 49,
    y: 46,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 26
  }),
  Sprite26: new Sprite26({
    x: 50,
    y: -39,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  })
};

const project = new Project(stage, sprites);
export default project;
