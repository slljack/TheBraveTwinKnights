
/**@type {import("../types/phaser")} */

import {LoadingScene} from "./Scene/LoadingScene"
import { MenuScene } from "./Scene/MenuScene"
import { SplashScene } from "./Scene/SplashScene";
import { LevelScene } from "./Scene/LevelScene";
import { ControlScene } from "./Scene/ControlScene";
import { HelpScene } from "./Scene/HelpScene";
import {Level1} from "./Level/Level1"

var config = {
    type:Phaser.AUTO,
    scale:{
        //1280×720
        //860x700
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:1280,
        height:720,
    },
    
    scene :[LoadingScene,MenuScene,SplashScene,LevelScene,ControlScene,HelpScene,Level1],
    render:{
        pixelArt:true
    }

}


var game = new Phaser.Game(config);