
/**@type {import("../types/phaser")} */

import {LoadingScene} from "./Scene/LoadingScene"
import { MenuScene } from "./Scene/MenuScene"
import { SplashScene } from "./Scene/SplashScene";
import { LevelScene } from "./Scene/LevelScene";
import { ControlScene } from "./Scene/ControlScene";
import { HelpScene } from "./Scene/HelpScene";
import {Level1} from "./Level/Level1";
import {Level_crj} from "./Level/Level_crj"
<<<<<<< HEAD
import {Level_al1} from "./Level/Level_al1"
=======
import{Level_crj2} from "./Level/Level_crj2"
>>>>>>> c400c90bab8c604d388739bb333f74ba83de6b24
var config = {
    type:Phaser.AUTO,
    scale:{
        //1280×720
        //860x700
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:1280,
        height:768,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 }
        }
    },
    
<<<<<<< HEAD
    scene :[LoadingScene,MenuScene,SplashScene,LevelScene,ControlScene,HelpScene,Level1,Level_crj,Level_al1],
=======
    scene :[LoadingScene,MenuScene,SplashScene,LevelScene,ControlScene,HelpScene,Level1,Level_crj,Level_crj2],
>>>>>>> c400c90bab8c604d388739bb333f74ba83de6b24
    render:{
        pixelArt:true
    }

}


var game = new Phaser.Game(config);