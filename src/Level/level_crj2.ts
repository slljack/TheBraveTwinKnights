import {Control} from "../Control"


export class Level_crj2 extends Phaser.Scene{
    blocks: Phaser.Physics.Arcade.Group;
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
    bgm: Phaser.Sound.BaseSound;
    isVictory: boolean = false;
    huopao: Phaser.Physics.Arcade.Sprite;
    shuipao: Phaser.Physics.Arcade.Sprite;
    shoottime: number;
    fireballs: Phaser.Physics.Arcade.Group;
    redalive: boolean;
    bubbles: Phaser.Physics.Arcade.Group;
    bluebubble:boolean;
    mid: Phaser.Tilemaps.StaticTilemapLayer;
    block1: any;
    block2: any;
    bluealive: boolean;
    block3: any;
    block4: any;
    block5: any;
    block6: any;
    traps: Phaser.Physics.Arcade.Group;
    trap1: any;
    trap2: any;
    redbubble: boolean;
    bluekeybubble: boolean;
    lose: Phaser.Sound.BaseSound;
    constructor(){
        super({
            key : Control.Scene.Level7
        })
    }
    init(){
        this.sound.stopAll();
        this.redbubble = false;
        this.bluekeybubble = false;
        this.bluealive = true;
        this.bluebubble=false;
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
        this.load.image('ele',"asset/level_crj/ele.png");
        this.load.tilemapTiledJSON('map3','asset/level_crj/mylevel2.json');
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');
        this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
        this.load.audio('key_sound','asset/sounds/key.mp3');
        this.load.audio('vic_sound','asset/sounds/victory.mp3');
        this.load.image("block","asset/level_crj/CastleBlock_1.png");
        this.load.audio("defeated","asset/sounds/gameover.mp3");
        this.load.spritesheet("dapao","asset/level_crj/dapao.png",{
            frameWidth:128,
            frameHeight:64
        })
        this.load.image("trap","asset/level_crj/trap.png");
        this.load.spritesheet("redkey2","asset/level_crj/redkey.png",{
            frameHeight:64,
            frameWidth:64
        })

        this.load.spritesheet("bluekey2","asset/level_crj/bluekey.png",{
            frameHeight:64,
            frameWidth:64
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
                frames:[12,13,14,15,16,17]
            }),
            repeat:0,

        })




        //blue anim
        this.anims.create({
            key:"blue_idle_right",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"blue_idle_left",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[3,4,5]
            })
        })

        this.anims.create({
            key:"blue_move_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[24,25,26]
            })
        })

        this.anims.create({
            key:"blue_move_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[27,28,29]
            })
        })

        this.anims.create({
            key:"blue_jump_left",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[33,34,35]
            })
        })

        this.anims.create({
            key:"blue_jump_right",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[30,31,32]
            })
        })

        this.anims.create({
            key:"blue_bubble",
            frameRate:5,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[36]
            })
        })
        this.anims.create({
            key:"blue_dead_right",
            frameRate: 5,
            frames:this.anims.generateFrameNumbers("blueknight2",{
                frames:[12,13,14,15,16,17],
            })

        })

    }

    create(){
        // Level Label
        let label = this.add.text(0,0,"<Level 7> How To Float?",{font:"25px Impact"});
        label.setDepth(1);

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
        

        //key anis
        this.anims.create({
            key:"red_key_idle",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("redkey2",{
                frames:[0]
            })
        })
        this.anims.create({
            key:"red_key_bubble",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("redkey2",{
                frames:[1]
            })
        })

        this.anims.create({
            key:"blue_key_idle",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("bluekey2",{
                frames:[0]
            })
        })
        this.anims.create({
            key:"blue_key_bubble",
            frameRate:10,
            frames:this.anims.generateFrameNumbers("bluekey2",{
                frames:[1]
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
        this.lose = this.sound.add("defeated");


        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                // Stop music when esc
                this.bgm.stop();
                this.scene.start(Control.Scene.Level)
            }
        },this)

        

        let map1 = this.add.tilemap("map3");
        let block =  map1.addTilesetImage("CastleBlock","CastleBlock");
        let ele = map1.addTilesetImage("ele","ele");
        let CastleBackground = map1.addTilesetImage("CastleBackground","CastleBackground");
        this.top = map1.createStaticLayer("collide",[block,CastleBackground],0,0);
        this.top.setDepth(2);
        this.mid = map1.createStaticLayer("ele",[ele],0,0);
        this.mid.setDepth(1);
        this.top.setCollisionBetween(0,10);
        let bot = map1.createStaticLayer("background",[block,CastleBackground],0,0);
        bot.setDepth(0);



        this.blocks = this.physics.add.group({
            immovable:true,
            allowGravity:false,
        })
        this.block1 = this.blocks.create(288,352,"block").setDepth(3);
        this.block2 = this.blocks.create(352,352,"block").setDepth(3);
        this.block3 = this.blocks.create(416,352,"block").setDepth(3);
        
        this.block4 = this.blocks.create(1120,352,"block").setDepth(3);
        this.block5 = this.blocks.create(1184,352,"block").setDepth(3);
        this.block6 = this.blocks.create(1248,352,"block").setDepth(3);


        this.traps = this.physics.add.group({
            immovable:true,
            allowGravity:false
        })


        this.trap1 = this.traps.create(544,352,"trap").setDepth(1);

        this.trap2 = this.traps.create(608,352,"trap").setDepth(1);

        // Define Keys
        this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // Add knights in to the scene
        this.red = this.physics.add.sprite(90,280,"redknight1");
        this.blue = this.physics.add.sprite(90,600,"blueknight2");
        
        // Enable collision
        this.red.setCollideWorldBounds(true);
        this.blue.setCollideWorldBounds(true);


        this.redkey = this.physics.add.sprite(800,480,"redkey2");

        this.bluekey = this.physics.add.sprite(672,32,"bluekey2")
        
        this.redkey.setDragX(100);
        this.bluekey.setDragX(100);
        this.redkey.setCollideWorldBounds(true);
        this.bluekey.setCollideWorldBounds(true);
        
        //add dapao to scene
        this.huopao = this.physics.add.sprite(64,32,"dapao");
        this.shuipao = this.physics.add.sprite(256,544,"dapao");

        this.shuipao.setDrag(200,200);
        this.huopao.play("dapao_idle_right",true);
        this.shuipao.play("dapao_idle_right",true);

        this.fireballs = this.physics.add.group({
            immovable:true,
            allowGravity:false,
        })
        for(let i = 0;i<30;i++){
            const fireball = this.fireballs.create(0,0,"fireballr").setDepth(3);
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
            const bubble = this.bubbles.create(0,0,"bubble").setDepth(3);
            bubble.name = "bubble"+i;
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
        this.physics.collide(this.top,this.redkey);
        this.physics.collide(this.top,this.bluekey);
        this.physics.collide(this.red,this.bluekey);
        this.physics.collide(this.blue,this.redkey);
        this.physics.collide(this.blocks,this.shuipao);
        this.physics.collide(this.blocks,this.bluekey);
        this.physics.collide(this.blocks,this.redkey);

        //shuipao move
        if(this.shuipao.body.velocity.x !=0){
            this.shuipao.play("dapao_move_right",true);
        }

        this.physics.overlap(this.red,this.fireballs,this.redshot,null,this);
        this.physics.overlap(this.blue,this.bubbles,this.blueshot,null,this);


        let fireball = this.fireballs.getFirstAlive(true);
        if(fireball){
            if(fireball.body.x>1280){
                fireball.active = false;
            }
        }
        
        let bubble = this.bubbles.getFirstAlive(true);
        if(bubble){
            if(bubble.body.x>1280){
                bubble.active = false;
            }
        }


        if(this.time.now>this.shoottime){
            let fireball = this.fireballs.getFirstDead(false);
            if(fireball){
                fireball.visible = true;
                fireball.active = true;
                fireball.body.reset(this.huopao.x+100,this.huopao.y);
                fireball.body.velocity.x = 150;
                this.shoottime = this.time.now+2800;
            }

            let bubble = this.bubbles.getFirstDead(false);
            if(bubble){
                bubble.visible = true;
                bubble.active = true;
                bubble.body.reset(this.shuipao.x+100,this.shuipao.y);
                bubble.body.velocity.x = 270;
            }
        }

        
        // xiao ji guan
        this.physics.collide(this.red,this.block1,this.dropdown1,null,this);
        this.physics.collide(this.red,this.block2,this.dropdown1,null,this);
        this.physics.collide(this.red,this.block3,this.dropdown1,null,this);
        this.physics.collide(this.blue,this.blocks)

        this.physics.collide(this.red,this.block4,this.dropdown2,null,this);
        this.physics.collide(this.red,this.block5,this.dropdown2,null,this);
        this.physics.collide(this.red,this.block6,this.dropdown2,null,this);


        if(this.block3.body.y >= 640){
            this.block3.body.velocity.y = 0
            this.block3.body.y = 640
        }


        //xiao ji guan 2
        
        if(this.red.getBounds().centerX>=487 && this.red.getBounds().centerX<=640){
            if(this.red.body.y >= 256){
                this.trapout()
            }
        }
        if(this.trap1.body.y<300){
            this.trap1.body.velocity.y = 0;
            this.trap1.body.y = 294
        }
        if(this.trap2.body.y<300){
            this.trap2.body.velocity.y = 0;
            this.trap2.body.y = 294
        }
        this.physics.overlap(this.red,this.traps,this.redshot,null,this);

        //key
        if(this.getRedKey == false){
            if(this.redbubble == false){
                this.redkey.play("red_key_idle",true)
            }
            else{
                this.redkey.body.velocity.y = -100
                this.redkey.play("red_key_bubble",true)
            }
        }



        if(this.getBlueKey == false){
            if(this.bluekeybubble == false){
                this.bluekey.play("blue_key_idle",true)
            }
            else{
                this.bluekey.body.velocity.y = -100
                this.bluekey.play("blue_key_bubble",true)
            }
        }

        this.physics.overlap(this.bubbles,this.redkey,this.redkeybubble,null,this);


        //death
        if(this.red.body.y>=352){
            this.redshot();
        }
        if(this.blue.body.y<=352 ){
            this.bluedead();
        }
        if(this.blue.body.y >= 678){

            this.bluedead()
        }

        this.physics.overlap(this.red,this.redkey,this.getredkey,null,this);
        this.physics.overlap(this.blue,this.bluekey,this.getbluekey,null,this);




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
        if(this.bluebubble == false && this.bluealive==true){
            if(this.bluecanjump==false){
                if(this.bluejumpcount==1 && this.blue.body.velocity.y==10){
                    this.bluecanjump=true;
                    this.bluejumpcount = 0;
                }
                else if(this.blue.body.velocity.y==10){
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
        else if(this.bluealive==true && this.bluebubble == true){
            this.physics.collide(this.blue,this.top)
            this.blue.setVelocityY(-200);

        }
        else if(this.bluealive == false){
            this.physics.collide(this.blue,this.top)
        }

    }
    redshot(){
        if(this.redalive == true){
            this.redalive = false;
            this.red.play("red_dead_right",true);
            this.red.body.velocity.x = 0
            if(this.bluealive == false){
                this.bgm.stop();
                this.lose.play();
                this.scene.start(Control.Scene.Level)

            }
        }

    }
    blueshot(){
        if(this.bluebubble == false){
            this.bluebubble = true;
            this.blue.play("blue_bubble",true);
            this.blue.body.velocity.x = 0;
            this.blue.setVelocityY(-200);
        }
    }
    bluedead(){
        if(this.bluealive == true){
            this.bluealive = false;
            this.blue.play("blue_dead_right",true);
            this.blue.body.velocity.x = 0
            if(this.redalive == false){
                this.bgm.stop();
                this.lose.play();
                this.scene.start(Control.Scene.Level)

            }
        }
    }

    dropdown1(){
        this.block1.body.velocity.y = 600;
        this.block2.body.velocity.y = 600;
        this.block3.body.velocity.y = 600;

    }

    dropdown2(){
        this.block4.body.velocity.x = 600;
        this.block5.body.velocity.x = 600;
        this.block6.body.velocity.x = 600;

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
    trapout(){
        this.trap1.body.velocity.y = -600;
        this.trap2.body.velocity.y = -600;

    }
    redkeybubble(){
        this.redbubble = true;
        this.redkey.body.velocity.y = -100
    }




}