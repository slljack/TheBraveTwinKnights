import {Control} from "../Control"
export class SplashScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Splash
        })
    }
    init(){

    }
    create(){
        this.add.image(420,300,"logo");
        this.add.text(300,500,"<Press any key to continue>",{font: "20px Impact"});
        this.input.keyboard.on("keyup",function(e){
            this.scene.start(Control.Scene.Menu);
        },this)
    }

}