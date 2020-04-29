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

        this.load.image('castleBlock','asset/tilemaps/tiles/CastleBlock.png');
        this.load.image('castleBG','asset/tilemaps/tiles/CastleBackground.png');
        this.load.tilemapTiledJSON('map','asset/tilemaps/maps/LevelMap1.json');
    }
    create(){
        //let map = this.make.tilemap({ key: 'map', tileWidth: 128, tileHeight: 128 });
        //let tileset = map.addTilesetImage('castleBlock');
        //let layer = map.createDynamicLayer('Collision',tileset);

        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                this.scene.start(Control.Scene.Menu)
            }
        },this)
    }


}