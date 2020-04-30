import {Control} from "../Control"
export class Level1 extends Phaser.Scene{
    red: Phaser.GameObjects.Sprite;
    key_ArrowRight: Phaser.Input.Keyboard.Key;
    key_ArrowUp: Phaser.Input.Keyboard.Key;
    key_ArrowLeft: Phaser.Input.Keyboard.Key;
    constructor(){
        super({
            key : Control.Scene.Level1
        })
    }
    init(){

    }
    preload(){

        this.load.image('CastleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('CastleBackground','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('map','asset/tilemaps/maps/LevelMap1.json');
        this.load.image('player','asset/TestPlayer.png');

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


    }
    create(){
        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                this.scene.start(Control.Scene.Menu)
            }
        },this)

        let map1 = this.add.tilemap("map");
        let block =  map1.addTilesetImage("CastleBlock","CastleBlock");
        let CastleBackground = map1.addTilesetImage("CastleBackground","CastleBackground");
        let top = map1.createStaticLayer("Collision",[block,CastleBackground],0,0);
        top.setDepth(1);
        let bot = map1.createStaticLayer("Background",[block,CastleBackground],0,0);
        bot.setDepth(0);

        this.input.keyboard.on("keyup",function(event:any){
            console.log(event.key)
        })
        
        this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        //knights
         this.red = this.add.sprite(100,287,"redknight1");

    }
    update(delta:number){
        if(this.key_ArrowRight.isDown ===true){
            this.red.x = this.red.x+(delta/2000);
            this.red.play("red_move_right",true);
        }
        else if(this.key_ArrowLeft.isDown){
            this.red.x = this.red.x-(delta/2000);
            this.red.play("red_move_left",true);
        }
        else{
            this.red.play("red_idle_right",true);
        }
    }


}