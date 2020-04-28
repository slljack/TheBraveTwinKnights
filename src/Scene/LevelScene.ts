import {Control} from "../Control"
export class LevelScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Level
        })
    }
    init(){

    }
    create(){
        this.add.text(360,400,"<Level>",{font:"40px Impact"});
    }

}