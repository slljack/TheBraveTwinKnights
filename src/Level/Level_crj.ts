import {Control} from "../Control"


export class Level_crj extends Phaser.Scene{
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
    isVictory: boolean = false;
    huopao: Phaser.Physics.Arcade.Sprite;
    shuipao: Phaser.Physics.Arcade.Sprite;
    shoottime: number;
    fireballs: Phaser.Physics.Arcade.Group;
    redalive: boolean;
    bubbles: Phaser.Physics.Arcade.Group;
    constructor(){
        super({
            key : Control.Scene.Level2
        })
    }
    init(){
        this.redalive = true;
        this.shoottime = 0;
        this.getBlueKey = false;
        this.getRedKey = false;
        this.isVictory = false;
    }
    preload(){
        this.load.image("redkey","asset/RedKey.png");
        this.load.image("bluekey","asset/BlueKey.png");
        this.load.image('CastleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('CastleBackground','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('map','asset/level_crj/mylevel.json');
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');
        this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
        this.load.audio('key_sound','asset/sounds/key.mp3');
        this.load.audio('vic_sound','asset/sounds/victory.mp3');

        this.load.spritesheet("dapao","asset/level_crj/dapao.png",{
            frameWidth:128,
            frameHeight:64
        })

        // shooting group

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

        this.anims.create({
            key:"red_dead_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[10,11,12,13,14]
            }),
            repeat:0,

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
        // dapao anims
        this.anims.create({
            key:"dapao_idle_right",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("dapao",{
                frames:[3]
            })
        })

        this.anims.create({
            key:"dapao_idle_left",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("dapao",{
                frames:[0]
            })
        })

        this.anims.create({
            key:"dapao_move_left",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("dapao",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"dapao_move_right",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("dapao",{
                frames:[3,4,5]
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

        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                // Stop music when esc
                this.bgm.stop();
                this.scene.start(Control.Scene.Menu)
            }
        },this)

        

        let map1 = this.add.tilemap("map");
        let block =  map1.addTilesetImage("CastleBlock","CastleBlock");
        let CastleBackground = map1.addTilesetImage("CastleBackground","CastleBackground");
        this.top = map1.createStaticLayer("collide",[block,CastleBackground],0,0);
        this.top.setDepth(1);
        this.top.setCollisionBetween(0,5);
        let bot = map1.createStaticLayer("background",[block,CastleBackground],0,0);
        bot.setDepth(0);

        


        // Define Keys
        this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Add knights in to the scene
        this.red = this.physics.add.sprite(90,280,"redknight1");
        this.blue = this.physics.add.sprite(90,600,"blueknight");
        
        // Enable collision
        this.red.setCollideWorldBounds(true);
        this.blue.setCollideWorldBounds(true);

        //add dapao to scene
        this.huopao = this.physics.add.sprite(1172,64,"dapao");
        this.shuipao = this.physics.add.sprite(256,512,"dapao");

        this.huopao.setCollideWorldBounds(true);
        this.shuipao.setCollideWorldBounds(true);
        this.shuipao.setDrag(200,200);
        this.huopao.play("dapao_idle_left",true);
        this.shuipao.play("dapao_idle_right",true);

        this.fireballs = this.physics.add.group({
            immovable:true,
            allowGravity:false,
        })
        for(let i = 0;i<30;i++){
            const fireball = this.fireballs.create(0,0,"fireball").setDepth(2);
            fireball.name = "fireball"+i;
            fireball.active = false;
            fireball.visible = false;
            fireball.checkWorldBounds = true;
        }

        this.bubbles = this.physics.add.group({
            immovable:true,
            allowGravity:false,
        })
        for(let i = 0;i<30;i++){
            const bubble = this.bubbles.create(0,0,"bubble").setDepth(2);
            bubble.name = "fireball"+i;
            bubble.active = false;
            bubble.visible = false;
            bubble.checkWorldBounds = true;
        }


    }

    update(delta:number){
        this.physics.collide(this.top,this.huopao);
        this.physics.collide(this.top,this.shuipao);
        this.physics.collide(this.red,this.huopao);
        this.physics.collide(this.blue,this.shuipao);

        //shuipao move
        if(this.shuipao.body.velocity.x !=0){
            this.shuipao.play("dapao_move_right",true);
        }

        this.physics.overlap(this.red,this.fireballs,this.redshot,null,this)



        let fireball = this.fireballs.getFirstAlive(true);
        if(fireball){
            if(fireball.body.x<0){
                fireball.active = false;
            }
        }
        
        let bubble = this.bubbles.getFirstAlive(true);
        if(bubble){
            if(bubble.body.x>1200){
                bubble.active = false;
            }
        }


        if(this.time.now>this.shoottime){
            let fireball = this.fireballs.getFirstDead(false);
            if(fireball){
                fireball.visible = true;
                fireball.active = true;
                fireball.body.reset(this.huopao.x-100,this.huopao.y);
                fireball.body.velocity.x = -200;
                this.shoottime = this.time.now+2300;
            }

            let bubble = this.bubbles.getFirstDead(false);
            if(bubble){
                bubble.visible = true;
                bubble.active = true;
                bubble.body.reset(this.shuipao.x+100,this.shuipao.y);
                bubble.body.velocity.x = 300;
            }
        }

        
        /** 
        if(this.red.getBounds().centerX>570 && this.red.getBounds().centerX<640){
            if(this.red.getBounds().centerY>130 && this.red.getBounds().centerY<200){
                this.redkey.destroy()
                if(this.getRedKey === false){
                    this.keySound.play();
                    this.getRedKey = true;
                }
                    
            }
        }
*/
/** 
        if(this.blue.getBounds().centerX>895 && this.blue.getBounds().centerX<965){
            if(this.blue.getBounds().centerY>500 && this.blue.getBounds().centerY<600){
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

        // Red Control

        // Jump detection
        if(this.redalive ==true){
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
    
            
        }
        else{
            this.physics.collide(this.red,this.top)
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
    redshot(){
        if(this.redalive == true){
            this.redalive = false;
            this.red.play("red_dead_right",true);
            this.red.body.velocity.x = 0
        }

        }



}