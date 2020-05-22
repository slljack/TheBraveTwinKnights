import {Control} from "../Control"
export class Level_al1 extends Phaser.Scene{
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

    redkey: Phaser.GameObjects.Image;
    getRedKey: boolean = false;
    bluekey: Phaser.GameObjects.Image;
    getBlueKey: boolean = false;

    jumpSound: Phaser.Sound.BaseSound;
    keySound: Phaser.Sound.BaseSound;
    vicSound: Phaser.Sound.BaseSound;
    bgm: Phaser.Sound.BaseSound;
    
    reddemon1: Phaser.Physics.Arcade.Sprite;
    bluedemon1: Phaser.Physics.Arcade.Sprite;
    reddemon2: Phaser.Physics.Arcade.Sprite;
    bluedemon2: Phaser.Physics.Arcade.Sprite;

    isVictory: boolean = false;
    redLife : boolean = true;
    blueLife: boolean = true;
    rd1_life: boolean = true;
    rd2_life: boolean = true;
    bd1_life: boolean = true;
    bd2_life: boolean = true;

    key_space: Phaser.Input.Keyboard.Key;
    constructor(){
        super({
            key : Control.Scene.Level4
        })
    }
    init(){
        this.getBlueKey = false;
        this.getRedKey = false;
        this.isVictory = false;
        this.redLife = true;
        this.blueLife = true;
        this.rd1_life = true;
        this.rd2_life = true;
        this.bd1_life = true;
        this.bd2_life = true;
    }
    preload(){
        this.load.image("redkey","asset/RedKey.png");
        this.load.image("bluekey","asset/BlueKey.png");
        this.load.image('CastleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('CastleBackground','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('mapal1','asset/tilemaps/maps/LevelMap_al1.json');
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');
        this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
        this.load.audio('key_sound','asset/sounds/key.mp3');
        this.load.audio('vic_sound','asset/sounds/victory.mp3');


        //Red animation/////////////////////////////////////////
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
            key:"red_death_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[18,19,20,21,22,23]
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

        //Blue Animation/////////////////////////////////////////
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
            key:"blue_death_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[12,13,14,15,16,17]
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

        //Red Demon Animation///////////////////////////////////
        this.anims.create({
            key:"reddemon_idle",
            frameRate:3,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"reddemon_death",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[7,8,9]
            })
        })

        this.anims.create({
            key:"reddemon_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[10,11,12]
            })
        })

        this.anims.create({
            key:"reddemon_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[15,16,17]
            })
        })

        //Blue Demon Animation//////////////////////////////////
        this.anims.create({
            key:"bluedemon_idle",
            frameRate:3,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"bluedemon_death",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[7,8,9]
            })
        })

        this.anims.create({
            key:"bluedemon_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[10,11,12]
            })
        })

        this.anims.create({
            key:"bluedemon_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[15,16,17]
            })
        })
    }

    create(){
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

        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                // Stop music when esc
                this.bgm.stop();
                this.scene.start(Control.Scene.Menu)
            }
        },this)

        
        let map1 = this.add.tilemap("mapal1");
        let block =  map1.addTilesetImage("CastleBlock","CastleBlock");
        let CastleBackground = map1.addTilesetImage("CastleBackground","CastleBackground");
        this.top = map1.createStaticLayer("Collision",[block,CastleBackground],0,0);
        this.top.setDepth(1);
        this.top.setCollisionBetween(0,10);
        let bot = map1.createStaticLayer("Background",[block,CastleBackground],0,0);
        bot.setDepth(0);

        // Define Keys
        this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.key_space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Add knights in to the scene
        this.red = this.physics.add.sprite(1200,600,"redknight1");
        this.blue = this.physics.add.sprite(90,600,"blueknight");

        // Add demons into the scene
        //this.reddemon1 = this.physics.add.sprite(860,580,"reddemon");
        //this.bluedemon1 = this.physics.add.sprite(415,580,"bluedemon");



        // Enable collision
        this.red.setCollideWorldBounds(true);
        this.blue.setCollideWorldBounds(true);
        //this.reddemon1.setCollideWorldBounds(true);
        //this.bluedemon1.setCollideWorldBounds(true);



        // Place the keys
        this.redkey = this.add.image(1245,230,"redkey");
        this.redkey.setScale(2)

        this.bluekey = this.add.image(35,230,"bluekey")
        this.bluekey.setScale(2);
    }

    update(delta:number){
        console.log(this.redcanjump);

        // Collision Relation
        this.physics.collide(this.red,this.top)
        this.physics.collide(this.blue,this.top)
        //this.physics.collide(this.reddemon1,this.top)
        //this.physics.collide(this.bluedemon1,this.top)

        // Red Demon
        //this.reddemon1.play("reddemon_idle",true);

        // Blue Demon
        //this.bluedemon1.play("bluedemon_idle",true);
        
        /*
        if(this.red.getBounds().centerX>1210 && this.red.getBounds().centerX<1270){
            if(this.red.getBounds().centerY>200 && this.red.getBounds().centerY<260){
                this.redkey.destroy()
                if(this.getRedKey === false){
                    this.keySound.play();
                    this.getRedKey = true;
                }
                    
            }
        }

        if(this.blue.getBounds().centerX>0 && this.blue.getBounds().centerX<60){
            if(this.blue.getBounds().centerY>200 && this.blue.getBounds().centerY<260){
                this.bluekey.destroy()
                if(this.getBlueKey === false){
                    this.keySound.play();
                    this.getBlueKey = true;
                }
            }
        }
        */

        if(this.getBlueKey && this.getRedKey && this.isVictory === false){
            this.vicSound.play();
            this.bgm.stop();
            this.isVictory = true;
            this.scene.start(Control.Scene.Level);
        }

        // Check coord
        if(this.key_space.isDown){
            console.log("Red:  " + this.red.getBounds().centerX + "," + this.red.getBounds().centerY)
            console.log("Blue: " + this.blue.getBounds().centerX + "," + this.blue.getBounds().centerY)
        }


        // Red Control
        // Jump detection
        if(this.redcanjump===false){
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
        if(this.key_ArrowRight.isDown){
            this.red.setVelocityX(200);
            this.red.play("red_move_right",true);
            if(this.key_ArrowUp.isDown){
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
            this.red.play("red_idle_left",true);
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
    }

    redDeath(){

    }

    blueDeath(){

    }

    reddemonDeath(){

    }

    bluedemonDeath(){

    }

    obtainRed(){
        this.redkey.destroy()
        if(this.getRedKey === false){
            this.keySound.play();
            this.getRedKey = true;
        }
    }
    obtainBlue(){
        this.bluekey.destroy()
        if(this.getBlueKey === false){
            this.keySound.play();
            this.getBlueKey = true;
        }

    }


}