
/**@type {import("../types/phaser")} */

import {LoadingScene} from "./Scene/LoadingScene"
import { MenuScene } from "./Scene/MenuScene"
import { SplashScene } from "./Scene/SplashScene";


var config = {
    type:Phaser.AUTO,
    width:860,
    height:700,
    scene :[LoadingScene,MenuScene,SplashScene]

}


var game = new Phaser.Game(config);