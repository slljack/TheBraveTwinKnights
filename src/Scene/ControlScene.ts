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
        let logo = this.add.image(0,0,"logo").setOrigin(0);
        this.add.text(logo.x+150,logo.y+50,"Control",{font:"40px Impact"});

        let back = this.add.text(this.game.renderer.width-100,0,"Back",{font:"40px Impact"});
        back.setInteractive();
        back.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Menu)
        })
        this.input.keyboard.on("keyup",function(event: any){
            if(event.key=="Escape"){
                this.scene.start(Control.Scene.Menu)
            }
        },this)

        this.add.sprite(200,200,"redknight1");
        this.add.sprite(600,200,"blueknight");

        //controls



        let up = this.add.image(200,400,"up");
        up.setScale(4);

        let right = this.add.image(270,455,"right");
        right.setScale(4);


        let left = this.add.image(130,455,"left");
        left.setScale(4);


        let down = this.add.image(200,455,"down");
        down.setScale(4);



        let w = this.add.image(600,400,"w");
        w.setScale(4);


        let a = this.add.image(530,455,"a");
        a.setScale(4);


        let s = this.add.image(600,455,"s");
        s.setScale(4);


        let d = this.add.image(670,455,"d");
        d.setScale(4);
    }

}