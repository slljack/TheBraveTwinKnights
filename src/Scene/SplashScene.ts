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
        let logo = this.add.image(this.game.renderer.width/2,this.game.renderer.height/2-64,"logo");
        logo.setScale(2);
        this.add.text(this.game.renderer.width/2-250,this.game.renderer.height/2+100,"<Press any key to continue>",{font: "40px Impact"});
        this.input.keyboard.on("keyup",function(){
            this.scene.start(Control.Scene.Menu);
        },this)
    }

}