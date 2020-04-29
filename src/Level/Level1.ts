import {Control} from "../Control"
export class Level1 extends Phaser.Scene{
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

    }


}