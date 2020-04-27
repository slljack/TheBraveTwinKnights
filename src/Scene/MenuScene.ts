import {Control} from "../Control"
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Menu
        })
    }
    init(){


    }
    create(){
        this.add.image(420,200,"logo");
        this.add.text(360,300,"<Play>",{font:"40px Impact"});
        this.add.text(360,350,"<Levels>",{font:"40px Impact"});
        this.add.text(360,400,"<Control>",{font:"40px Impact"});
        this.add.text(360,450,"<Help>",{font:"40px Impact"});
        let hoversprite = this.add.sprite(100,100,"redknight0");
    }

}