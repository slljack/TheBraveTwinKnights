import {Control} from "../Control"
export class LoadingScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.LOAD
        })
    }
    preload(){
        this.load.image("logo","asset/LOGO.png");
        this.load.image("pointer", "asset/pointer.png");
        this.load.image("splash","asset/splash_screen.png");
        this.load.image("up","asset/up.png");
        this.load.image("down","asset/down.png");
        this.load.image("right","asset/right.png");
        this.load.image("left","asset/left.png");

        this.load.image("w","asset/W.png");
        this.load.image("a","asset/A.png");
        this.load.image("s","asset/S.png");
        this.load.image("d","asset/D.png");

        let loadingbar = this.add.graphics({
            fillStyle:{
                color:0xffffff
            }
        })
        this.load.spritesheet("blueknight","asset/BlueKnight.png",{
            frameHeight: 64,
            frameWidth:64
        });
        for(let i=0;i<100;i++){
            this.load.spritesheet("redknight"+i,"asset/RedKnight.png",{
                frameHeight: 64,
                frameWidth:64
            });
        }
        this.load.on("progress",(percent: number)=>{
            loadingbar.fillRect(350,this.game.renderer.height/2,580*percent,10);
        })

        this.load.image("fireball","asset/level_crj/fireball2.png");
        this.load.image("bubble","asset/level_crj/bubble.png");
        this.load.image("fireballr","asset/level_crj/fireballr.png");

        this.load.spritesheet("blueknight2","asset/level_crj/BlueKnight.png",{
            frameWidth:64,
            frameHeight:64
        });

        //Load Red Demon
        this.load.spritesheet("reddemon","asset/level_al/RedDemon.png",{
            frameWidth:64,
            frameHeight:64
        });

        //Load Blue Demon
        this.load.spritesheet("bluedemon","asset/level_al/BlueDemon.png",{
            frameWidth:64,
            frameHeight:64
        });

        //Load Dark Demon
        this.load.spritesheet("darkdemon","asset/level_al/DarkDemon.png",{
            frameWidth:64,
            frameHeight:64
        });
    }
    create(){

        this.scene.start(Control.Scene.Splash);
    }

}