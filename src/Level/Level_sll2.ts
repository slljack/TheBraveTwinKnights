import {Control} from "../Control"
export class Level_sll2 extends Phaser.Scene{
    red: Phaser.Physics.Arcade.Sprite;
    key_ArrowRight: Phaser.Input.Keyboard.Key;
    key_ArrowUp: Phaser.Input.Keyboard.Key;
    key_ArrowLeft: Phaser.Input.Keyboard.Key;
    up: Phaser.Physics.Arcade.Image;
    top: Phaser.Tilemaps.StaticTilemapLayer;
    redcanjump:boolean = true;
    redjumpcount: number=0;
    blue: Phaser.Physics.Arcade.Sprite;
    bluecanjump:boolean = true;
    bluejumpcount: number=0;
    key_W: Phaser.Input.Keyboard.Key;
    key_A: Phaser.Input.Keyboard.Key;
    key_D: Phaser.Input.Keyboard.Key;
    redkey: Phaser.Physics.Arcade.Sprite;
    getRedKey: boolean = false;
    bluekey: Phaser.Physics.Arcade.Sprite;
    getBlueKey: boolean = false;
    jumpSound: Phaser.Sound.BaseSound;
    keySound: Phaser.Sound.BaseSound;
    vicSound: Phaser.Sound.BaseSound;
    ppSound: Phaser.Sound.BaseSound;
    keyDropSound: Phaser.Sound.BaseSound;
    wCodeSound: Phaser.Sound.BaseSound;
    bgm: Phaser.Sound.BaseSound;
    isVictory: boolean = false;
    ppRed1: Phaser.Physics.Arcade.Sprite;
    ppRed2: Phaser.Physics.Arcade.Sprite;
    ppRed3: Phaser.Physics.Arcade.Sprite;
    ppBlue1: Phaser.Physics.Arcade.Sprite;
    ppBlue2: Phaser.Physics.Arcade.Sprite;
    ppBlue3: Phaser.Physics.Arcade.Sprite;
    ppRed1Press: boolean = false;
    ppRed2Press: boolean = false;
    ppRed3Press: boolean = false;
    ppBlue1Press: boolean = false;
    ppBlue2Press: boolean = false;
    ppBlue3Press: boolean = false;
    showRedKey: boolean = false;
    showBlueKey: boolean = false;
    wrongComboRed: boolean = false;
    wrongComboBlue: boolean = false;
    ppR1Played: boolean;
    ppR2Played: boolean;
    ppR3Played: boolean;
    ppB1Played: boolean;
    ppB2Played: boolean;
    ppB3Played: boolean;
    wcodeR1Played: boolean;
    wcodeR2Played: boolean;
    wcodeR3Played: boolean;
    wcodeB1Played: boolean;
    wcodeB2Played: boolean;
    wcodeB3Played: boolean;

    constructor(){
        super({
            key : Control.Scene.Level3
        })
    }
    init(){
        this.sound.stopAll();
        this.getBlueKey = false;
        this.getRedKey = false;
        this.isVictory = false;
        this.ppRed1Press = false;
        this.ppRed2Press = false;
        this.ppRed3Press = false;
        this.ppBlue1Press = false;
        this.ppBlue2Press = false;
        this.ppBlue3Press = false;
        this.showRedKey = false;
        this.showBlueKey = false;
        this.wrongComboRed = false;
        this.wrongComboBlue = false;
        this.ppR1Played = false ;
        this.ppR2Played = false ;
        this.ppR3Played = false ;
        this.ppB1Played = false ;
        this.ppB2Played = false ;
        this.ppB3Played = false ;
        this.wcodeR1Played = false ;
        this.wcodeR2Played = false ;
        this.wcodeR3Played = false ;
        this.wcodeB1Played = false;
        this.wcodeB2Played = false ;
        this. wcodeB3Played = false ;
    }
    preload(){
        this.load.image("redkey","asset/RedKey.png");
        this.load.image("bluekey","asset/BlueKey.png");
        this.load.image('CastleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('CastleBackground','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('map7','asset/tilemaps/maps/Level7.json');
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');
        this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
        this.load.audio('key_sound','asset/sounds/key.mp3');
        this.load.audio('vic_sound','asset/sounds/victory.mp3');
        this.load.audio('pp_sound', 'asset/sounds/PressurePlate.mp3');
        this.load.audio('keyd_sound', 'asset/sounds/KeyDrop.mp3');
        this.load.audio('wcode_sound', 'asset/sounds/WrongCode.mp3');
        this.load.spritesheet("PressurePlateIdle", "asset/level_sll/ppIdle.png",{
            frameWidth:64,
            frameHeight:10,
        });
        this.load.spritesheet("PressurePlatePress", "asset/level_sll/ppPress.png",{
            frameWidth:64,
            frameHeight:10,
        });

        this.anims.create({
            key:"red_idle_right",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"red_idle_left",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[3,4,5]
            })
        })

        this.anims.create({
            key:"red_move_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[24,25,26]
            })
        })

        this.anims.create({
            key:"red_move_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[27,28,29]
            })
        })

        this.anims.create({
            key:"red_jump_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[33,34,35]
            })
        })

        this.anims.create({
            key:"red_jump_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[30,31,32]
            })
        })




        //blue anim


        this.anims.create({
            key:"blue_idle_right",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"blue_idle_left",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[3,4,5]
            })
        })

        this.anims.create({
            key:"blue_move_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[24,25,26]
            })
        })

        this.anims.create({
            key:"blue_move_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[27,28,29]
            })
        })

        this.anims.create({
            key:"blue_jump_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[33,34,35]
            })
        })

        this.anims.create({
            key:"blue_jump_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[30,31,32]
            })
        })

       

    }

    create(){
        // Level Label
        let label = this.add.text(0,0,"<Level 3>",{font:"25px Impact"});
        label.setDepth(1);

         //Pressure Plate
         this.anims.create({
            key:"pressure_plate_activate",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("PressurePlatePress",{
                frames:[0]
            })
        })

        this.anims.create({
            key:"pressure_plate_idle",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("PressurePlateIdle",{
                frames:[0]
            })
        })
        
        // Play music
        this.bgm = this.sound.add('bgm');

        var musicConfig = {
            mute : false,
            volume: 0.4,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay:0
        }

        this.bgm.play(musicConfig);

        // Add sound effect
        this.jumpSound = this.sound.add('jump_sound');
        this.keySound = this.sound.add('key_sound');
        this.vicSound = this.sound.add('vic_sound');
        this.ppSound = this.sound.add('pp_sound');
        this.keyDropSound = this.sound.add('keyd_sound');
        this.wCodeSound = this.sound.add('wcode_sound');

        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                // Stop music when esc
                this.bgm.stop();
                this.scene.start(Control.Scene.Level)
            }
        },this)

        

        let map1 = this.add.tilemap("map7");
        let block =  map1.addTilesetImage("CastleBlock","CastleBlock");
        let CastleBackground = map1.addTilesetImage("CastleBackground","CastleBackground");
        this.top = map1.createStaticLayer("Collision",[block,CastleBackground],0,0);
        this.top.setDepth(1);
        this.top.setCollisionBetween(0,5);
        let bot = map1.createStaticLayer("Background",[block,CastleBackground],0,0);
        bot.setDepth(0);

        


        // Define Keys
        this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Add knights in to the scene
        this.red = this.physics.add.sprite(960,340,"redknight1");
        this.blue = this.physics.add.sprite(90,600,"blueknight");

        // Add Pressure Plate
        this.ppRed1 = this.physics.add.sprite(192,280, "PressurePlateIdle");
        //this.ppRed2 = this.physics.add.sprite(640,300, "PressurePlateIdle");
        //this.ppRed3 = this.physics.add.sprite(1088,300, "PressurePlateIdle");
        this.ppBlue1 = this.physics.add.sprite(960,200, "PressurePlateIdle");
        //this.ppBlue2 = this.physics.add.sprite(640,630, "PressurePlateIdle");
        //this.ppBlue3 = this.physics.add.sprite(1088,630, "PressurePlateIdle");

        //this.ppRed1.play('pressure_plate_idle', true);

        this.ppRed1.setImmovable(true);
        //this.ppRed2.setImmovable(true);
        //this.ppRed3.setImmovable(true);
        this.ppBlue1.setImmovable(true);
        //this.ppBlue2.setImmovable(true);
        //this.ppBlue3.setImmovable(true);
        
        
        // Enable collision
        this.red.setCollideWorldBounds(true);
        this.blue.setCollideWorldBounds(true);
        this.ppRed1.setCollideWorldBounds(true);
        //this.ppRed2.setCollideWorldBounds(true);
       // this.ppRed3.setCollideWorldBounds(true);
        this.ppBlue1.setCollideWorldBounds(true);
       // this.ppBlue2.setCollideWorldBounds(true);
        //this.ppBlue3.setCollideWorldBounds(true);
        

        // Place the keys
        //this.redkey = this.add.image(610,170,"redkey");
        //this.redkey.setScale(2)

        //this.bluekey = this.add.image(935,550,"bluekey")
        //this.bluekey.setScale(2);
    }

    update(delta:number){

        //Collision Relation 
        this.physics.collide(this.ppRed1,this.top);
        //this.physics.collide(this.ppRed2,this.top);
        //this.physics.collide(this.ppRed3,this.top);
        this.physics.collide(this.ppBlue1,this.top);
        
       // this.physics.collide(this.ppBlue2,this.top);
       // this.physics.collide(this.ppBlue3,this.top);
        this.physics.collide(this.red,this.ppRed1);
        this.physics.collide(this.red,this.ppBlue1);
        //this.physics.collide(this.red,this.ppRed2);
       // this.physics.collide(this.red,this.ppRed3);
        this.physics.collide(this.blue,this.ppBlue1);
        this.physics.collide(this.blue,this.ppRed1);
       // this.physics.collide(this.blue,this.ppBlue2);
       // this.physics.collide(this.blue,this.ppBlue3);
        this.physics.collide(this.top,this.redkey);
        this.physics.collide(this.top,this.bluekey);


        //Get the keys
        this.physics.overlap(this.red,this.redkey,this.getredkey,null,this);
        this.physics.overlap(this.blue,this.bluekey,this.getbluekey,null,this);

        this.physics.overlap(this.red,this.ppRed1,this.activateR1PlateR,null,this);
        //this.physics.overlap(this.red,this.ppRed2,this.activateR2Plate,null,this);
        //this.physics.overlap(this.red,this.ppRed3,this.activateR3Plate,null,this);
        this.physics.overlap(this.blue,this.ppBlue1,this.activateB1PlateB,null,this);
        //this.physics.overlap(this.blue,this.ppBlue2,this.activateB2Plate,null,this);
        //this.physics.overlap(this.blue,this.ppBlue3,this.activateB3Plate,null,this);

        //console.log(this.redcanjump)
        /*if(this.red.getBounds().centerX>570 && this.red.getBounds().centerX<640){
            if(this.red.getBounds().centerY>130 && this.red.getBounds().centerY<200){
                this.redkey.destroy()
                if(this.getRedKey === false){
                    this.keySound.play();
                    this.getRedKey = true;
                }
                    
            }
        }


        if(this.blue.getBounds().centerX>895 && this.blue.getBounds().centerX<965){
            if(this.blue.getBounds().centerY>500 && this.blue.getBounds().centerY<600){
                this.bluekey.destroy()
                if(this.getBlueKey === false){
                    this.keySound.play();
                    this.getBlueKey = true;
                }
            }
        }*/

        if(this.getBlueKey && this.getRedKey && this.isVictory === false){
            this.vicSound.play();
            this.bgm.stop();
            this.isVictory = true;
            this.scene.start(Control.Scene.Level);
        }

        // Red Control
        // Jump detection
        if(this.redcanjump==false){
            if(this.redjumpcount==1 && this.red.body.velocity.y==10){
                this.redcanjump=true;
                this.redjumpcount = 0;
            }
            else if(this.red.body.velocity.y==10){
                this.redjumpcount++
            }
            
        }

        // Right Left Jump action
        this.physics.collide(this.red,this.top)
        if(this.key_ArrowRight.isDown ===true){
            this.red.setVelocityX(200);
            this.red.play("red_move_right",true);
            if(this.key_ArrowUp.isDown === true){
                if(this.redcanjump){
                    this.red.play("red_jump_right");
                    this.red.setVelocityY(-400);
                    this.redcanjump = false;
                    this.jumpSound.play();
                }
            }
        }
        else if(this.key_ArrowLeft.isDown){
            this.red.setVelocityX(-200)
            this.red.play("red_move_left",true);
            if(this.key_ArrowUp.isDown === true){
                if(this.redcanjump){
                    this.red.play("red_jump_left");
                    this.red.setVelocityY(-400);
                    this.redcanjump = false;
                    this.jumpSound.play();
                }
            }
        }
        else if(this.key_ArrowUp.isDown){
            if(this.redcanjump){
                this.red.play("red_jump_right");
                this.red.setVelocityY(-400);
                this.redcanjump = false;
                this.jumpSound.play();
            }
        }
        else{
            this.red.setVelocityX(0);
            this.red.play("red_idle_right",true);
        }




        // Blue Control
        // Jump detection
        if(this.bluecanjump==false){
            if(this.bluejumpcount==1 && this.blue.body.velocity.y==10){
                this.bluecanjump=true;
                this.bluejumpcount = 0;
            }
            else if(this.blue.body.velocity.y==10){
                this.bluejumpcount++
            }
        }

        // Right Left Jump action
        this.physics.collide(this.blue,this.top)
        if(this.key_D.isDown ===true){
            this.blue.setVelocityX(200);
            this.blue.play("blue_move_right",true);
            if(this.key_W.isDown === true){
                if(this.bluecanjump){
                    this.blue.play("blue_jump_right");
                    this.blue.setVelocityY(-400);
                    this.bluecanjump = false;
                    this.jumpSound.play();
                }
            }
        }
        else if(this.key_A.isDown){
            this.blue.setVelocityX(-200)
            this.blue.play("blue_move_left",true);
            if(this.key_W.isDown === true){
                if(this.bluecanjump){
                    this.blue.play("blue_jump_left");
                    this.blue.setVelocityY(-400);
                    this.bluecanjump = false;
                    this.jumpSound.play();
                }
            }
        }
        else if(this.key_W.isDown){
            if(this.bluecanjump){
                this.blue.play("blue_jump_right");
                this.blue.setVelocityY(-400);
                this.bluecanjump = false;
                this.jumpSound.play();
            }
        }
        else{
            this.blue.setVelocityX(0);
            this.blue.play("blue_idle_right",true);
        }

        //check if already show keys
        if(this.ppRed1Press){
            this.blueKeyShow();
        }

        if(this.ppBlue1Press){
            this.redKeyShow();
        }

    }

    getredkey(){
        this.redkey.destroy()
        if(this.getRedKey === false){
            this.keySound.play();
            this.getRedKey = true;
        }
    }

    getbluekey(){
        this.bluekey.destroy()
        if(this.getBlueKey === false){
            this.keySound.play();
            this.getBlueKey = true;
        }

    }


    activateR1PlateR(){
        this.physics.overlap(this.blue,this.ppRed1,this.activateR1PlateB,null,this);
        //this.ppRed1.play("pressure_plate_activate");
        
        //if(this.ppRed2Press && !this.wrongComboRed){
           // this.ppRed1Press = true;
           // this.playPPR1();
       // }
       // else{
            
           // this.wrongComboRed = true;
            //this.playWcodeR1();
       // }
    }

    activateR1PlateB(){
        this.ppRed1.play("pressure_plate_activate");
        this.ppRed1Press = true;
            this.playPPR1();
    }

    activateR2Plate(){//2
        this.ppRed2.play("pressure_plate_activate");
        

        if(this.ppRed3Press && !this.wrongComboRed){
            this.ppRed2Press = true;
            this.playPPR2();
        }
        else{
            
            this.wrongComboRed = true;
            this.playWcodeR2();
        }

    }
    activateR3Plate(){//1
        this.ppRed3.play("pressure_plate_activate");

        if(!this.wrongComboRed){
            
            this.ppRed3Press = true;
            this.playPPR3();
        }
        else{
            
            this.playWcodeR3();
        }
    }
    activateB1PlateB(){
        this.physics.overlap(this.red,this.ppBlue1,this.activateB1PlateR,null,this);
        /*this.ppBlue1.play("pressure_plate_activate");
        
        //console.log(this.ppBlue2Press);
        if(this.ppBlue2Press && !this.wrongComboBlue){
            this.ppBlue1Press = true;
            this.playPPB1();
        }
        else{
            this.wrongComboBlue = true;
            this.playWcodeB1();
        }*/
    }

    activateB1PlateR(){
        this.ppBlue1.play("pressure_plate_activate");
        this.ppBlue1Press = true;
            this.playPPB1();
    }

    activateB2Plate(){//1
        this.ppBlue2.play("pressure_plate_activate");
        //console.log(!this.wrongComboBlue);
        if(!this.wrongComboBlue){
            
            this.ppBlue2Press = true;
            this.playPPB2();
        }
        else{
            this.playWcodeB2();
        }
    }
    activateB3Plate(){//3
        this.ppBlue3.play("pressure_plate_activate");
        

        if(this.ppBlue1Press && !this.wrongComboBlue){
            this.ppBlue3Press = true;
            this.playPPB3();
        }
        else{
            
            this.wrongComboBlue = true;
            this.playWcodeB3();
        }
    }

    blueKeyShow(){
        if(this.showBlueKey)
            return;
        else{
            this.bluekey = this.physics.add.sprite(384,600,"bluekey")
            this.keyDropSound.play();
            this.bluekey.setScale(2)
            this.bluekey.setCollideWorldBounds(true);
            this.showBlueKey = true;
        }
    }

    redKeyShow(){
        if(this.showRedKey)
            return;
        else{
            this.redkey = this.physics.add.sprite(384,280,"redkey")
            this.keyDropSound.play();
            this.redkey.setScale(2)
            this.redkey.setCollideWorldBounds(true);
            this.showRedKey = true;
        }
    }

    playPPR1(){
        if(this.ppR1Played){
            return;
        }
        else{
            this.ppSound.play();
            this.ppR1Played = true;
            this.wcodeR1Played = true;
        }

    }
    playPPR2(){
        if(this.ppR2Played){
            return;
        }
        else{
            this.ppSound.play();
            this.ppR2Played = true;
            this.wcodeR2Played = true;
        }

    }
    playPPR3(){
        if(this.ppR3Played){
            return;
        }
        else{
            this.ppSound.play();
            this.ppR3Played = true;
            this.wcodeR3Played = true;
        }

    }
    playPPB1(){
        if(this.ppB1Played){
            return;
        }
        else{
            this.ppSound.play();
            this.ppB1Played = true;
            this.wcodeB1Played = true;
        }

    }
    playPPB2(){
        if(this.ppB2Played){
            return;
        }
        else{
            this.ppSound.play();
            this.ppB2Played = true;
            this.wcodeB2Played = true;
        }

    }
    playPPB3(){
        if(this.ppB3Played){
            return;
        }
        else{
            this.ppSound.play();
            this.ppB3Played = true;
            this.wcodeB3Played = true;
        }

    }

    playWcodeR1(){
        if(this.wcodeR1Played)
            return;
        else{
            this.wCodeSound.play();
            this.wcodeR1Played = true;
        }

    }
    playWcodeR2(){
        if(this.wcodeR2Played)
            return;
        else{
            this.wCodeSound.play();
            this.wcodeR2Played = true;
        }

    }
    playWcodeR3(){
        if(this.wcodeR3Played)
            return;
        else{
            this.wCodeSound.play();
            this.wcodeR3Played = true;
        }

    }
    playWcodeB1(){
        if(this.wcodeB1Played)
            return;
        else{
            this.wCodeSound.play();
            this.wcodeB1Played = true;
        }

    }
    playWcodeB2(){
        if(this.wcodeB2Played)
            return;
        else{
            this.wCodeSound.play();
            this.wcodeB2Played = true;
        }

    }
    playWcodeB3(){
        if(this.wcodeB3Played)
            return;
        else{
            this.wCodeSound.play();
            this.wcodeB3Played = true;
        }

    }


}