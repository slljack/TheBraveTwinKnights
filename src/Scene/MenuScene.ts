import {Control} from "../Control"
export class MenuScene extends Phaser.Scene{
    menubgm: Phaser.Sound.BaseSound;
    constructor(){
        super({
            key : Control.Scene.Menu
        })
    }
    init(){
        this.sound.stopAll()

    }
    preload(){
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');
    }
    create(){
        // Play music
        let bgm = this.sound.add('bgm');


        this.menubgm = this.sound.add('menubgm');

        var musicConfig = {
            mute : false,
            volume: 0.4,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay:0
        }

        this.menubgm.play(musicConfig);
        let logo = this.add.image(this.game.renderer.width/2,this.game.renderer.height/2-164,"logo");
        logo.setScale(2);
        let playbutton = this.add.text(570,400,"<Play>",{font:"40px Impact"});
        let levelbutton = this.add.text(570,450,"<Levels>",{font:"40px Impact"});
        let controlbutton = this.add.text(570,500,"<Control>",{font:"40px Impact"});
        let helpbutton = this.add.text(570,550,"<Help>",{font:"40px Impact"});
        let hoversprite = this.add.sprite(100,100,"pointer");
        hoversprite.setScale(2);
        hoversprite.setVisible(false);

        

        playbutton.setInteractive();

        playbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = playbutton.x-50,
            hoversprite.y = playbutton.y+23
        })

        playbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        playbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level1);
        })

        levelbutton.setInteractive();

        levelbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = levelbutton.x-50,
            hoversprite.y = levelbutton.y+23
        })

        levelbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        levelbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level);
        })



        controlbutton.setInteractive();

        controlbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = controlbutton.x-50,
            hoversprite.y = controlbutton.y+23
        })

        controlbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        controlbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Control)
        })

        helpbutton.setInteractive();

        helpbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = helpbutton.x-50,
            hoversprite.y = helpbutton.y+23
        })

        helpbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        helpbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Help)
        })
    }

}