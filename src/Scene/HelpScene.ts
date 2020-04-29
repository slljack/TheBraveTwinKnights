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
        let logo = this.add.image(0,0,"logo").setOrigin(0);
        this.add.text(logo.x+150,logo.y+50,"HELP",{font:"40px Impact"});
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


        this.add.text(100,200,"                 The demon king had kidnapped the princess of the Magic Kingdom and \n"+"prisoned her inside his evil castle. The king of the Magic Kingdom orders the bravest\n"+
        "knights, the twin knights, to travel to the demon king’s castle to save the princess. Thus,\n"+"the brave twin knights start their journey of saving the princess. ",
        {font:"20px Impact"})
    }

}