import {Control} from "../Control"
export class HelpScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Help
        })
    }
    init(){

    }
    create(){
        this.add.text(360,400,"<HELP>",{font:"40px Impact"});
    }

}