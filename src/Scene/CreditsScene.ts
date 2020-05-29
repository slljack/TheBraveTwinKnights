import {Control} from "../Control"
export class CreditsScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Credits
        })
    }
    init(){

    }
    create(){
        let logo = this.add.image(0,0,"logo").setOrigin(0);
        this.add.text(logo.x+150,logo.y+50,"Credits",{font:"40px Impact"});
        let back = this.add.text(this.game.renderer.width-100,0,"Back",{font:"40px Impact"});
        back.setInteractive();
        back.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Menu)
        })
        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                this.scene.start(Control.Scene.Menu)
            }
        },this)


        this.add.text(500,200,"Developers:",{font:"40px Impact"})
        this.add.text(550,250,"Andrew Liu",{font:"40px Impact"})
        this.add.text(550,300,"Runjie Chen",{font:"40px Impact"})
        this.add.text(550,350,"Shilong Li",{font:"40px Impact"})
        this.add.text(500,450,"Music:",{font:"40px Impact"})
        this.add.text(550,500,"maoudamashii",{font:"40px Impact"})
    }

}