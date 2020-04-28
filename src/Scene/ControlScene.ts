import {Control} from "../Control"
export class ControlScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Control
        })
    }
    init(){

    }
    create(){
        this.add.text(360,400,"<Control>",{font:"40px Impact"});
    }

}