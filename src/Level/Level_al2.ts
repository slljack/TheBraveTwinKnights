import {Control} from "../Control"
export class Level_al2 extends Phaser.Scene{
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
    ggSound: Phaser.Sound.BaseSound;
    atkSound: Phaser.Sound.BaseSound;

    bgm: Phaser.Sound.BaseSound;
    
    darkdemon: Phaser.Physics.Arcade.Sprite;
    reddemon1: Phaser.Physics.Arcade.Sprite;
    bluedemon1: Phaser.Physics.Arcade.Sprite;
    reddemon2: Phaser.Physics.Arcade.Sprite;
    bluedemon2: Phaser.Physics.Arcade.Sprite;

    isVictory: boolean = false;
    redAlive : boolean = true;
    blueAlive: boolean = true;
    rd1_alive: boolean = true;
    rd2_alive: boolean = true;
    bd1_alive: boolean = true;
    bd2_alive: boolean = true;

    key_space: Phaser.Input.Keyboard.Key;
    constructor(){
        super({
            key : Control.Scene.Level5
        })
    }
    init(){
        this.sound.stopAll();
        this.getBlueKey = false;
        this.getRedKey = false;
        this.isVictory = false;
        this.redAlive = true;
        this.blueAlive = true;
        this.rd1_alive = true;
        this.rd2_alive = true;
        this.bd1_alive = true;
        this.bd2_alive = true;
    }
    preload(){
        this.load.image("redkey","asset/RedKey.png");
        this.load.image("bluekey","asset/BlueKey.png");
        this.load.image('CastleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('CastleBackground','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('mapal2','asset/tilemaps/maps/LevelMap_al2.json');
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');
        this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
        this.load.audio('key_sound','asset/sounds/key.mp3');
        this.load.audio('vic_sound','asset/sounds/victory.mp3');
        this.load.audio('gg_sound','asset/sounds/gameover.mp3');
        this.load.audio('atk_sound','asset/sounds/attack.mp3');


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
                frames:[0,1,2,3,4]
            })
        })

        this.anims.create({
            key:"reddemon_death",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[5,6,7,8,9]
            })
        })

        this.anims.create({
            key:"reddemon_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[10,11,12,13,14]
            })
        })

        this.anims.create({
            key:"reddemon_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("reddemon",{
                frames:[15,16,17,18,19]
            })
        })

        //Blue Demon Animation//////////////////////////////////
        this.anims.create({
            key:"bluedemon_idle",
            frameRate:3,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[0,1,2,3,4]
            })
        })

        this.anims.create({
            key:"bluedemon_death",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[5,6,7,8,9]
            })
        })

        this.anims.create({
            key:"bluedemon_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[10,11,12,13,14]
            })
        })

        this.anims.create({
            key:"bluedemon_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("bluedemon",{
                frames:[15,16,17,18,19]
            })
        })

        //Dark Demon Animation///////////////////////////////////
        this.anims.create({
            key:"darkdemon_idle",
            frameRate:3,
            frames:this.anims.generateFrameNumbers("darkdemon",{
                frames:[0,1,2,3,4]
            })
        })

        this.anims.create({
            key:"darkdemon_death",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("darkdemon",{
                frames:[5,6,7,8,9]
            })
        })

        this.anims.create({
            key:"darkdemon_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("darkdemon",{
                frames:[10,11,12,13,14]
            })
        })

        this.anims.create({
            key:"darkdemon_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("darkdemon",{
                frames:[15,16,17,18,19]
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
        this.ggSound = this.sound.add('gg_sound');
        this.atkSound = this.sound.add('atk_sound');

        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                // Stop music when esc
                this.bgm.stop();
                this.scene.start(Control.Scene.Level)
            }
        },this)

        
        let map1 = this.add.tilemap("mapal2");
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
        this.red = this.physics.add.sprite(1248,400,"redknight1");
        this.blue = this.physics.add.sprite(32,400,"blueknight");

        // Add demons into the scene
        this.darkdemon = this.physics.add.sprite(640,600,"darkdemon")
        this.darkdemon.setVelocityX(-1000);
        this.reddemon1 = this.physics.add.sprite(1050,600,"reddemon");
        this.reddemon1.setVelocityX(-800);
        this.bluedemon1 = this.physics.add.sprite(230,600,"bluedemon");
        this.bluedemon1.setVelocityX(700);

        this.reddemon2 = this.physics.add.sprite(1180,160,"reddemon");
        this.reddemon2.setVelocityX(-200);
        this.bluedemon2 = this.physics.add.sprite(160,160,"bluedemon");
        this.bluedemon2.setVelocityX(250);


        // Enable collision
        this.red.setCollideWorldBounds(true);
        this.blue.setCollideWorldBounds(true);
        this.darkdemon.setCollideWorldBounds(true);
        this.reddemon1.setCollideWorldBounds(true);
        this.reddemon2.setCollideWorldBounds(true);
        this.bluedemon1.setCollideWorldBounds(true);
        this.bluedemon2.setCollideWorldBounds(true);



        // Place the keys
        this.redkey = this.physics.add.image(160,160,"redkey");
        this.redkey.setScale(2)

        this.bluekey = this.physics.add.image(1180,160,"bluekey")
        this.bluekey.setScale(2);
    }

    update(delta:number){
        // Collision Relation
        this.physics.collide(this.red,this.top)
        this.physics.collide(this.blue,this.top)
        this.physics.collide(this.darkdemon,this.top)
        this.physics.collide(this.reddemon1,this.top)
        this.physics.collide(this.reddemon2,this.top)
        this.physics.collide(this.bluedemon1,this.top)
        this.physics.collide(this.bluedemon2,this.top)
        this.physics.collide(this.top,this.redkey);
        this.physics.collide(this.top,this.bluekey);

        // Demon Movement
        // Red Demon
        if(this.rd1_alive){
            if(this.reddemon1.getBounds().centerX < 120){
                this.reddemon1.play("reddemon_left",true);
                this.reddemon1.setVelocityX(800);
            }
            else if(this.reddemon1.getBounds().centerX > 1180){
                this.reddemon1.play("reddemon_right",true);
                this.reddemon1.setVelocityX(-800);
            }
        }

        if(this.rd2_alive){
            if(this.reddemon2.getBounds().centerX < 1150){
                this.reddemon2.play("reddemon_left",true);
                this.reddemon2.setVelocityX(200);
            }
            else if(this.reddemon2.getBounds().centerX > 1240){
                this.reddemon2.play("reddemon_right",true);
                this.reddemon2.setVelocityX(-200);
            }
        }

        // Blue Demon
        if(this.bd1_alive){
            if(this.bluedemon1.getBounds().centerX < 120){
                this.bluedemon1.play("bluedemon_left",true);
                this.bluedemon1.setVelocityX(700);
            }
            else if(this.bluedemon1.getBounds().centerX > 1180){
                this.bluedemon1.play("bluedemon_right",true);
                this.bluedemon1.setVelocityX(-700);
            }
        }

        if(this.bd2_alive){
            if(this.bluedemon2.getBounds().centerX < 100){
                this.bluedemon2.play("bluedemon_left",true);
                this.bluedemon2.setVelocityX(250);
            }
            else if(this.bluedemon2.getBounds().centerX > 280){
                this.bluedemon2.play("bluedemon_right",true);
                this.bluedemon2.setVelocityX(-250);
            }
        }


        // Dark Demon
        if(this.darkdemon.getBounds().centerX < 120){
            this.darkdemon.play("darkdemon_left",true);
            this.darkdemon.setVelocityX(1000);
        }
        else if(this.darkdemon.getBounds().centerX > 1180){
            this.darkdemon.play("darkdemon_right",true);
            this.darkdemon.setVelocityX(-1000);
        }

        // Overlap actions////////////////////////////////////////////////
        // Keys
        this.physics.overlap(this.red,this.redkey,this.obtainRed,null,this);
        this.physics.overlap(this.blue,this.bluekey,this.obtainBlue,null,this);
        
        // Death
        this.physics.overlap(this.red,this.darkdemon,this.redDeath,null,this);
        this.physics.overlap(this.blue,this.darkdemon,this.blueDeath,null,this);
        this.physics.overlap(this.red,this.bluedemon1,this.redDeath,null,this);
        this.physics.overlap(this.red,this.bluedemon2,this.redDeath,null,this);
        this.physics.overlap(this.blue,this.reddemon1,this.blueDeath,null,this);
        this.physics.overlap(this.blue,this.reddemon2,this.blueDeath,null,this);

        // Attack
        this.physics.overlap(this.red,this.reddemon1,this.reddemonDeath1,null,this);
        this.physics.overlap(this.red,this.reddemon2,this.reddemonDeath2,null,this);
        this.physics.overlap(this.blue,this.bluedemon1,this.bluedemonDeath1,null,this);
        this.physics.overlap(this.blue,this.bluedemon2,this.bluedemonDeath2,null,this);
        
        // Check Victory
        if(this.getBlueKey && this.getRedKey && this.isVictory === false){
            this.vicSound.play();
            this.bgm.stop();
            this.isVictory = true;
            this.scene.start(Control.Scene.Level);
        }

        // Check Game Over
        if(!this.redAlive && !this.blueAlive && this.isVictory === false){
            this.ggSound.play();
            this.bgm.stop();
            this.scene.start(Control.Scene.Level);
        }

        // Check data
        if(this.key_space.isDown){
            console.log("Red:  " + this.red.getBounds().centerX + "," + this.red.getBounds().centerY)
            console.log("Blue: " + this.blue.getBounds().centerX + "," + this.blue.getBounds().centerY)
        }


        // Red Control
        // Jump detection
        if(this.redAlive){
            if(this.redcanjump===false){
                if(this.redjumpcount==1 && this.red.body.velocity.y==0){
                    this.redcanjump=true;
                    this.redjumpcount = 0;
                }
                else if(this.red.body.velocity.y==0){
                    this.redjumpcount++
                }
                else if(this.redjumpcount == 1 && this.red.body.velocity.y == 0){
                    this.redcanjump=true;
                    this.redjumpcount = 0;
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
        }
        
        // Blue Control
        // Jump detection
        if(this.blueAlive){
            if(this.bluecanjump==false){
                if(this.bluejumpcount==1 && this.blue.body.velocity.y==0){
                    this.bluecanjump=true;
                    this.bluejumpcount = 0;
                }
                else if(this.blue.body.velocity.y==0){
                    this.bluejumpcount++
                }
                else if(this.bluejumpcount == 1 && this.blue.body.velocity.y == 0){
                    this.bluecanjump=true;
                    this.bluejumpcount = 0;
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
    }

    redDeath(){
        if(this.redAlive == true){
            this.redAlive = false;
            this.atkSound.play();
            this.red.play("red_death_left",true);
            this.red.body.velocity.x = 0
        }
    }

    blueDeath(){
        if(this.blueAlive == true){
            this.blueAlive = false;
            this.atkSound.play();
            this.blue.play("blue_death_right",true);
            this.blue.body.velocity.x = 0
        }
    }

    reddemonDeath1(){
        if(this.redAlive){
            this.rd1_alive = false;
            this.atkSound.play();
            this.reddemon1.play("reddemon_death");
            this.reddemon1.destroy();
        }
    }

    reddemonDeath2(){
        if(this.redAlive){
            this.rd2_alive = false;
            this.atkSound.play();
            this.reddemon2.play("reddemon_death");
            this.reddemon2.destroy();
        }
    }

    bluedemonDeath1(){
        if(this.blueAlive){
            this.bd1_alive = false;
            this.atkSound.play();
            this.bluedemon1.play("bluedemon_death");
            this.bluedemon1.destroy();
        }
    }

    bluedemonDeath2(){
        if(this.blueAlive){
            this.bd2_alive = false;
            this.atkSound.play();
            this.bluedemon2.play("bluedemon_death");
            this.bluedemon2.destroy();
        }
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