import {Control} from "../Control"
export class Level1 extends Phaser.Scene{
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
    bluekey: Phaser.GameObjects.Image;
    constructor(){
        super({
            key : Control.Scene.Level1
        })
    }
    init(){

    }
    preload(){
        this.load.image("redkey","asset/RedKey.png");
        this.load.image("bluekey","asset/BlueKey.png");
        this.load.image('CastleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('CastleBackground','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('map','asset/tilemaps/maps/LevelMap1.json');
        this.load.audio('bgm','asset/audio/bgm_maoudamashii_8bit05.mp3');

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
        // Play music
        let bgm = this.sound.add('bgm');
        bgm.play();

        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                // Stop music when esc
                bgm.stop();
                this.scene.start(Control.Scene.Menu)
            }
        },this)

        let map1 = this.add.tilemap("map");
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
        this.red = this.physics.add.sprite(90,280,"redknight1");
        this.blue = this.physics.add.sprite(90,600,"blueknight");
        
        // Enable collision
        this.red.setCollideWorldBounds(true);
        this.blue.setCollideWorldBounds(true);

        // Place the keys
        this.redkey = this.add.image(610,170,"redkey");
        this.redkey.setScale(2)

        this.bluekey = this.add.image(935,550,"bluekey")
        this.bluekey.setScale(2);
    }

    update(delta:number){
        if(this.red.getBounds().centerX>570 && this.red.getBounds().centerX<640){
            if(this.red.getBounds().centerY>130 && this.red.getBounds().centerY<200){
                this.redkey.destroy()
            }
        }


        if(this.blue.getBounds().centerX>895 && this.blue.getBounds().centerX<965){
            if(this.blue.getBounds().centerY>500 && this.blue.getBounds().centerY<600){
                this.bluekey.destroy()
            }
        }

        //red control
        if(this.redcanjump==false){
            if(this.redjumpcount==1 && this.red.body.velocity.y==10){
                this.redcanjump=true;
                this.redjumpcount = 0;
            }
            else if(this.red.body.velocity.y==10){
                this.redjumpcount++
            }
            
        }
        this.physics.collide(this.red,this.top)
        if(this.key_ArrowRight.isDown ===true){
            this.red.setVelocityX(200);
            this.red.play("red_move_right",true);
        }
        else if(this.key_ArrowLeft.isDown){
            this.red.setVelocityX(-200)
            this.red.play("red_move_left",true);
        }
        else if(this.key_ArrowUp.isDown){
            if(this.redcanjump){
                this.red.play("red_jump_right");
                this.red.setVelocityY(-400);
                this.redcanjump = false;
            }


        }
        else if(this.key_ArrowUp.isDown && this.key_ArrowLeft.isDown){
            if(this.redcanjump){
                this.red.play("red_jump_left");
                this.red.setVelocityX(-200);
                this.red.setVelocityY(-400);
                this.redcanjump = false;
            }


        }
        else if(this.key_ArrowUp.isDown && this.key_ArrowRight.isDown){
            if(this.redcanjump){
                this.red.play("red_jump_right");
                this.red.setVelocityX(200);
                this.red.setVelocityY(-400);
                this.redcanjump = false;
            }

        }
        else if(this.key_ArrowLeft.isDown && this.key_ArrowUp.isDown){
            if(this.redcanjump){
                this.red.play("red_jump_left");
                this.red.setVelocityX(-200);
                this.red.setVelocityY(-400);
                this.redcanjump = false;
            }


        }
        else if(this.key_ArrowRight.isDown && this.key_ArrowUp.isDown){
            if(this.redcanjump){
                this.red.play("red_jump_right");
                this.red.setVelocityX(200);
                this.red.setVelocityY(-400);
                this.redcanjump = false;
            }

        }
        else{
            this.red.setVelocityX(0);
            this.red.play("red_idle_right",true);
        }




        //blue control


        if(this.bluecanjump==false){
            if(this.bluejumpcount==1 && this.blue.body.velocity.y==10){
                this.bluecanjump=true;
                this.bluejumpcount = 0;
            }
            else if(this.blue.body.velocity.y==10){
                this.bluejumpcount++
            }
            
        }

        this.physics.collide(this.blue,this.top)
        if(this.key_D.isDown ===true){
            this.blue.setVelocityX(200);
            this.blue.play("blue_move_right",true);
        }
        else if(this.key_A.isDown){
            this.blue.setVelocityX(-200)
            this.blue.play("blue_move_left",true);
        }
        else if(this.key_W.isDown){
            if(this.bluecanjump){
                this.blue.play("blue_jump_right");
                this.blue.setVelocityY(-400);
                this.bluecanjump = false;
            }


        }
        else if(this.key_W.isDown && this.key_A.isDown){
            if(this.bluecanjump){
                this.blue.play("blue_jump_left");
                this.blue.setVelocityX(-200);
                this.blue.setVelocityY(-400);
                this.bluecanjump = false;
            }


        }
        else if(this.key_W.isDown && this.key_D.isDown){
            if(this.bluecanjump){
                this.blue.play("blue_jump_right");
                this.blue.setVelocityX(200);
                this.blue.setVelocityY(-400);
                this.bluecanjump = false;
            }

        }
        else if(this.key_A.isDown && this.key_W.isDown){
            if(this.bluecanjump){
                this.blue.play("blue_jump_left");
                this.blue.setVelocityX(-200);
                this.blue.setVelocityY(-400);
                this.bluecanjump = false;
            }


        }
        else if(this.key_D.isDown && this.key_W.isDown){
            if(this.bluecanjump){
                this.blue.play("blue_jump_right");
                this.blue.setVelocityX(200);
                this.blue.setVelocityY(-400);
                this.bluecanjump = false;
            }

        }
        else{
            this.blue.setVelocityX(0);
            this.blue.play("blue_idle_right",true);
        }
    }


}