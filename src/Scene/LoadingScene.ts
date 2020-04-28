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
        let loadingbar = this.add.graphics({
            fillStyle:{
                color:0xffffff
            }
        })
        for(let i=0;i<100;i++){
            this.load.spritesheet("redknight"+i,"asset/RedKnight.png",{
                frameHeight: 64,
                frameWidth:64
            });
        }
        this.load.on("progress",(percent: number)=>{
            loadingbar.fillRect(330,this.game.renderer.height/2,200*percent,10);
        })
    }
    create(){

        this.scene.start(Control.Scene.Splash);
    }

}