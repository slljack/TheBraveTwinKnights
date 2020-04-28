
/**@type {import("../types/phaser")} */

import {LoadingScene} from "./Scene/LoadingScene"
import { MenuScene } from "./Scene/MenuScene"
import { SplashScene } from "./Scene/SplashScene";
import { LevelScene } from "./Scene/LevelScene";
import { ControlScene } from "./Scene/ControlScene";
import { HelpScene } from "./Scene/HelpScene";


var config = {
    type:Phaser.AUTO,
    width:860,
    height:700,
    scene :[LoadingScene,MenuScene,SplashScene,LevelScene,ControlScene,HelpScene]

}


var game = new Phaser.Game(config);