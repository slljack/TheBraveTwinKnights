(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = {
    Scene: {
        LOAD: "LOAD",
        Menu: "Menu",
        Splash: "Splash",
        Level: "Level",
        Help: "Help",
        Control: "Control",
        Level1: "Level1",
        Level2: "Level_crj",
        Level3: "Level_crj2",
        Level4: "Level_al1",
        Level5: "Level_al2",
        Level6: "Level_sll1"
    }
};

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var Level1 = function (_Phaser$Scene) {
    _inherits(Level1, _Phaser$Scene);

    function Level1() {
        _classCallCheck(this, Level1);

        var _this = _possibleConstructorReturn(this, (Level1.__proto__ || Object.getPrototypeOf(Level1)).call(this, {
            key: Control_1.Control.Scene.Level1
        }));

        _this.redcanjump = true;
        _this.redjumpcount = 0;
        _this.bluecanjump = true;
        _this.bluejumpcount = 0;
        _this.getRedKey = false;
        _this.getBlueKey = false;
        _this.isVictory = false;
        return _this;
    }

    _createClass(Level1, [{
        key: "init",
        value: function init() {
            this.sound.stopAll();
            this.getBlueKey = false;
            this.getRedKey = false;
            this.isVictory = false;
        }
    }, {
        key: "preload",
        value: function preload() {
            this.load.image("redkey", "asset/RedKey.png");
            this.load.image("bluekey", "asset/BlueKey.png");
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.tilemapTiledJSON('map', 'asset/tilemaps/maps/LevelMap1.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.audio("defeated", "asset/sounds/gameover.mp3");
            this.anims.create({
                key: "red_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "red_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "red_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "red_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "red_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "red_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [30, 31, 32]
                })
            });
            //blue anim
            this.anims.create({
                key: "blue_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "blue_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "blue_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "blue_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "blue_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "blue_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [30, 31, 32]
                })
            });
        }
    }, {
        key: "create",
        value: function create() {
            // Play music
            this.bgm = this.sound.add('bgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.bgm.play(musicConfig);
            // Add sound effect
            this.jumpSound = this.sound.add('jump_sound');
            this.keySound = this.sound.add('key_sound');
            this.vicSound = this.sound.add('vic_sound');
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    // Stop music when esc
                    this.bgm.stop();
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("map");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            this.top = map1.createStaticLayer("Collision", [block, CastleBackground], 0, 0);
            this.top.setDepth(1);
            this.top.setCollisionBetween(0, 5);
            var bot = map1.createStaticLayer("Background", [block, CastleBackground], 0, 0);
            bot.setDepth(0);
            // Define Keys
            this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            // Add knights in to the scene
            this.red = this.physics.add.sprite(90, 280, "redknight1");
            this.blue = this.physics.add.sprite(90, 600, "blueknight");
            // Enable collision
            this.red.setCollideWorldBounds(true);
            this.blue.setCollideWorldBounds(true);
            // Place the keys
            this.redkey = this.add.image(610, 170, "redkey");
            this.redkey.setScale(2);
            this.bluekey = this.add.image(935, 550, "bluekey");
            this.bluekey.setScale(2);
        }
    }, {
        key: "update",
        value: function update(delta) {
            if (this.red.getBounds().centerX > 570 && this.red.getBounds().centerX < 640) {
                if (this.red.getBounds().centerY > 130 && this.red.getBounds().centerY < 200) {
                    this.redkey.destroy();
                    if (this.getRedKey === false) {
                        this.keySound.play();
                        this.getRedKey = true;
                    }
                }
            }
            if (this.blue.getBounds().centerX > 895 && this.blue.getBounds().centerX < 965) {
                if (this.blue.getBounds().centerY > 500 && this.blue.getBounds().centerY < 600) {
                    this.bluekey.destroy();
                    if (this.getBlueKey === false) {
                        this.keySound.play();
                        this.getBlueKey = true;
                    }
                }
            }
            if (this.getBlueKey && this.getRedKey && this.isVictory === false) {
                this.vicSound.play();
                this.bgm.stop();
                this.isVictory = true;
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Red Control
            // Jump detection
            if (this.redcanjump == false) {
                if (this.redjumpcount == 1 && this.red.body.velocity.y == 10) {
                    this.redcanjump = true;
                    this.redjumpcount = 0;
                } else if (this.red.body.velocity.y == 10) {
                    this.redjumpcount++;
                }
            }
            // Right Left Jump action
            this.physics.collide(this.red, this.top);
            if (this.key_ArrowRight.isDown === true) {
                this.red.setVelocityX(200);
                this.red.play("red_move_right", true);
                if (this.key_ArrowUp.isDown === true) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_right");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_ArrowLeft.isDown) {
                this.red.setVelocityX(-200);
                this.red.play("red_move_left", true);
                if (this.key_ArrowUp.isDown === true) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_left");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_ArrowUp.isDown) {
                if (this.redcanjump) {
                    this.red.play("red_jump_right");
                    this.red.setVelocityY(-400);
                    this.redcanjump = false;
                    this.jumpSound.play();
                }
            } else {
                this.red.setVelocityX(0);
                this.red.play("red_idle_right", true);
            }
            // Blue Control
            // Jump detection
            if (this.bluecanjump == false) {
                if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 10) {
                    this.bluecanjump = true;
                    this.bluejumpcount = 0;
                } else if (this.blue.body.velocity.y == 10) {
                    this.bluejumpcount++;
                }
            }
            // Right Left Jump action
            this.physics.collide(this.blue, this.top);
            if (this.key_D.isDown === true) {
                this.blue.setVelocityX(200);
                this.blue.play("blue_move_right", true);
                if (this.key_W.isDown === true) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_right");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_A.isDown) {
                this.blue.setVelocityX(-200);
                this.blue.play("blue_move_left", true);
                if (this.key_W.isDown === true) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_left");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_W.isDown) {
                if (this.bluecanjump) {
                    this.blue.play("blue_jump_right");
                    this.blue.setVelocityY(-400);
                    this.bluecanjump = false;
                    this.jumpSound.play();
                }
            } else {
                this.blue.setVelocityX(0);
                this.blue.play("blue_idle_right", true);
            }
        }
    }]);

    return Level1;
}(Phaser.Scene);

exports.Level1 = Level1;

},{"../Control":1}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var Level_al1 = function (_Phaser$Scene) {
    _inherits(Level_al1, _Phaser$Scene);

    function Level_al1() {
        _classCallCheck(this, Level_al1);

        var _this = _possibleConstructorReturn(this, (Level_al1.__proto__ || Object.getPrototypeOf(Level_al1)).call(this, {
            key: Control_1.Control.Scene.Level4
        }));

        _this.redcanjump = true;
        _this.redjumpcount = 0;
        _this.bluecanjump = true;
        _this.bluejumpcount = 0;
        _this.getRedKey = false;
        _this.getBlueKey = false;
        _this.isVictory = false;
        _this.redAlive = true;
        _this.blueAlive = true;
        _this.rd1_alive = true;
        _this.rd2_alive = true;
        _this.bd1_alive = true;
        _this.bd2_alive = true;
        return _this;
    }

    _createClass(Level_al1, [{
        key: "init",
        value: function init() {
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
    }, {
        key: "preload",
        value: function preload() {
            this.load.image("redkey", "asset/RedKey.png");
            this.load.image("bluekey", "asset/BlueKey.png");
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.tilemapTiledJSON('mapal1', 'asset/tilemaps/maps/LevelMap_al1.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.audio('gg_sound', 'asset/sounds/gameover.mp3');
            this.load.audio('atk_sound', 'asset/sounds/attack.mp3');
            //Red animation/////////////////////////////////////////
            this.anims.create({
                key: "red_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "red_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "red_death_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [18, 19, 20, 21, 22, 23]
                })
            });
            this.anims.create({
                key: "red_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "red_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "red_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "red_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [30, 31, 32]
                })
            });
            //Blue Animation/////////////////////////////////////////
            this.anims.create({
                key: "blue_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "blue_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "blue_death_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [12, 13, 14, 15, 16, 17]
                })
            });
            this.anims.create({
                key: "blue_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "blue_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "blue_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "blue_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [30, 31, 32]
                })
            });
            //Red Demon Animation///////////////////////////////////
            this.anims.create({
                key: "reddemon_idle",
                frameRate: 3,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [0, 1, 2, 3, 4]
                })
            });
            this.anims.create({
                key: "reddemon_death",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [5, 6, 7, 8, 9]
                })
            });
            this.anims.create({
                key: "reddemon_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [10, 11, 12, 13, 14]
                })
            });
            this.anims.create({
                key: "reddemon_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [15, 16, 17, 18, 19]
                })
            });
            //Blue Demon Animation//////////////////////////////////
            this.anims.create({
                key: "bluedemon_idle",
                frameRate: 3,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [0, 1, 2, 3, 4]
                })
            });
            this.anims.create({
                key: "bluedemon_death",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [5, 6, 7, 8, 9]
                })
            });
            this.anims.create({
                key: "bluedemon_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [10, 11, 12, 13, 14]
                })
            });
            this.anims.create({
                key: "bluedemon_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [15, 16, 17, 18, 19]
                })
            });
            //Dark Demon Animation///////////////////////////////////
            this.anims.create({
                key: "darkdemon_idle",
                frameRate: 3,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [0, 1, 2, 3, 4]
                })
            });
            this.anims.create({
                key: "darkdemon_death",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [5, 6, 7, 8, 9]
                })
            });
            this.anims.create({
                key: "darkdemon_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [10, 11, 12, 13, 14]
                })
            });
            this.anims.create({
                key: "darkdemon_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [15, 16, 17, 18, 19]
                })
            });
        }
    }, {
        key: "create",
        value: function create() {
            // Play music
            this.bgm = this.sound.add('bgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.bgm.play(musicConfig);
            // Add sound effect
            this.jumpSound = this.sound.add('jump_sound');
            this.keySound = this.sound.add('key_sound');
            this.vicSound = this.sound.add('vic_sound');
            this.ggSound = this.sound.add('gg_sound');
            this.atkSound = this.sound.add('atk_sound');
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    // Stop music when esc
                    this.bgm.stop();
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("mapal1");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            this.top = map1.createStaticLayer("Collision", [block, CastleBackground], 0, 0);
            this.top.setDepth(1);
            this.top.setCollisionBetween(0, 10);
            var bot = map1.createStaticLayer("Background", [block, CastleBackground], 0, 0);
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
            this.red = this.physics.add.sprite(1200, 600, "redknight1");
            this.blue = this.physics.add.sprite(90, 600, "blueknight");
            // Add demons into the scene
            this.darkdemon = this.physics.add.sprite(640, 600, "darkdemon");
            this.darkdemon.setVelocityX(-500);
            this.reddemon1 = this.physics.add.sprite(1050, 580, "reddemon");
            this.bluedemon1 = this.physics.add.sprite(230, 580, "bluedemon");
            this.reddemon2 = this.physics.add.sprite(40, 220, "reddemon");
            this.reddemon2.setVelocityX(-200);
            this.bluedemon2 = this.physics.add.sprite(1010, 220, "bluedemon");
            this.bluedemon2.setVelocityX(-200);
            // Enable collision
            this.red.setCollideWorldBounds(true);
            this.blue.setCollideWorldBounds(true);
            this.darkdemon.setCollideWorldBounds(true);
            this.reddemon1.setCollideWorldBounds(true);
            this.reddemon2.setCollideWorldBounds(true);
            this.bluedemon1.setCollideWorldBounds(true);
            this.bluedemon2.setCollideWorldBounds(true);
            // Place the keys
            this.redkey = this.physics.add.image(1180, 220, "redkey");
            this.redkey.setScale(2);
            this.bluekey = this.physics.add.image(100, 220, "bluekey");
            this.bluekey.setScale(2);
        }
    }, {
        key: "update",
        value: function update(delta) {
            // Collision Relation
            this.physics.collide(this.red, this.top);
            this.physics.collide(this.blue, this.top);
            this.physics.collide(this.darkdemon, this.top);
            this.physics.collide(this.reddemon1, this.top);
            this.physics.collide(this.reddemon2, this.top);
            this.physics.collide(this.bluedemon1, this.top);
            this.physics.collide(this.bluedemon2, this.top);
            this.physics.collide(this.top, this.redkey);
            this.physics.collide(this.top, this.bluekey);
            // Demon Movement
            // Red Demon
            if (this.rd1_alive) {
                this.reddemon1.play("reddemon_idle", true);
            }
            if (this.rd2_alive) {
                if (this.reddemon2.getBounds().centerX < 35) {
                    this.reddemon2.play("reddemon_left", true);
                    this.reddemon2.setVelocityX(200);
                } else if (this.reddemon2.getBounds().centerX > 285) {
                    this.reddemon2.play("reddemon_right", true);
                    this.reddemon2.setVelocityX(-200);
                }
            }
            // Blue Demon
            if (this.bd1_alive) {
                this.bluedemon1.play("bluedemon_idle", true);
            }
            if (this.bd2_alive) {
                if (this.bluedemon2.getBounds().centerX < 1000) {
                    this.bluedemon2.play("bluedemon_left", true);
                    this.bluedemon2.setVelocityX(200);
                } else if (this.bluedemon2.getBounds().centerX > 1240) {
                    this.bluedemon2.play("bluedemon_right", true);
                    this.bluedemon2.setVelocityX(-200);
                }
            }
            // Dark Demon
            if (this.darkdemon.getBounds().centerX < 300) {
                this.darkdemon.play("darkdemon_left", true);
                this.darkdemon.setVelocityX(500);
            } else if (this.darkdemon.getBounds().centerX > 1000) {
                this.darkdemon.play("darkdemon_right", true);
                this.darkdemon.setVelocityX(-500);
            }
            // Overlap actions////////////////////////////////////////////////
            // Keys
            this.physics.overlap(this.red, this.redkey, this.obtainRed, null, this);
            this.physics.overlap(this.blue, this.bluekey, this.obtainBlue, null, this);
            // Death
            this.physics.overlap(this.red, this.darkdemon, this.redDeath, null, this);
            this.physics.overlap(this.blue, this.darkdemon, this.blueDeath, null, this);
            this.physics.overlap(this.red, this.bluedemon1, this.redDeath, null, this);
            this.physics.overlap(this.red, this.bluedemon2, this.redDeath, null, this);
            this.physics.overlap(this.blue, this.reddemon1, this.blueDeath, null, this);
            this.physics.overlap(this.blue, this.reddemon2, this.blueDeath, null, this);
            // Attack
            this.physics.overlap(this.red, this.reddemon1, this.reddemonDeath1, null, this);
            this.physics.overlap(this.red, this.reddemon2, this.reddemonDeath2, null, this);
            this.physics.overlap(this.blue, this.bluedemon1, this.bluedemonDeath1, null, this);
            this.physics.overlap(this.blue, this.bluedemon2, this.bluedemonDeath2, null, this);
            // Check Victory
            if (this.getBlueKey && this.getRedKey && this.isVictory === false) {
                this.vicSound.play();
                this.bgm.stop();
                this.isVictory = true;
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Check Game Over
            if (!this.redAlive && !this.blueAlive && this.isVictory === false) {
                this.ggSound.play();
                this.bgm.stop();
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Check data
            if (this.key_space.isDown) {
                console.log("Red:  " + this.red.getBounds().centerX + "," + this.red.getBounds().centerY);
                console.log("Blue: " + this.blue.getBounds().centerX + "," + this.blue.getBounds().centerY);
            }
            // Red Control
            // Jump detection
            if (this.redAlive) {
                if (this.redcanjump === false) {
                    if (this.redjumpcount == 1 && this.red.body.velocity.y == 0) {
                        this.redcanjump = true;
                        this.redjumpcount = 0;
                    } else if (this.red.body.velocity.y == 0) {
                        this.redjumpcount++;
                    } else if (this.redjumpcount == 1 && this.red.body.velocity.y == 0) {
                        this.redcanjump = true;
                        this.redjumpcount = 0;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.red, this.top);
                if (this.key_ArrowRight.isDown) {
                    this.red.setVelocityX(200);
                    this.red.play("red_move_right", true);
                    if (this.key_ArrowUp.isDown) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_right");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowLeft.isDown) {
                    this.red.setVelocityX(-200);
                    this.red.play("red_move_left", true);
                    if (this.key_ArrowUp.isDown === true) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_left");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowUp.isDown) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_right");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.red.setVelocityX(0);
                    this.red.play("red_idle_left", true);
                }
            }
            // Blue Control
            // Jump detection
            if (this.blueAlive) {
                if (this.bluecanjump == false) {
                    if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 0) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    } else if (this.blue.body.velocity.y == 0) {
                        this.bluejumpcount++;
                    } else if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 0) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.blue, this.top);
                if (this.key_D.isDown === true) {
                    this.blue.setVelocityX(200);
                    this.blue.play("blue_move_right", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_right");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_A.isDown) {
                    this.blue.setVelocityX(-200);
                    this.blue.play("blue_move_left", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_left");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_W.isDown) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_right");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.blue.setVelocityX(0);
                    this.blue.play("blue_idle_right", true);
                }
            }
        }
    }, {
        key: "redDeath",
        value: function redDeath() {
            if (this.redAlive == true) {
                this.redAlive = false;
                this.atkSound.play();
                this.red.play("red_death_left", true);
                this.red.body.velocity.x = 0;
            }
        }
    }, {
        key: "blueDeath",
        value: function blueDeath() {
            if (this.blueAlive == true) {
                this.blueAlive = false;
                this.atkSound.play();
                this.blue.play("blue_death_right", true);
                this.blue.body.velocity.x = 0;
            }
        }
    }, {
        key: "reddemonDeath1",
        value: function reddemonDeath1() {
            this.rd1_alive = false;
            this.atkSound.play();
            this.reddemon1.play("reddemon_death");
            this.reddemon1.destroy();
        }
    }, {
        key: "reddemonDeath2",
        value: function reddemonDeath2() {
            this.rd2_alive = false;
            this.atkSound.play();
            this.reddemon2.play("reddemon_death");
            this.reddemon2.destroy();
        }
    }, {
        key: "bluedemonDeath1",
        value: function bluedemonDeath1() {
            this.bd1_alive = false;
            this.atkSound.play();
            this.bluedemon1.play("bluedemon_death");
            this.bluedemon1.destroy();
        }
    }, {
        key: "bluedemonDeath2",
        value: function bluedemonDeath2() {
            this.bd2_alive = false;
            this.atkSound.play();
            this.bluedemon2.play("bluedemon_death");
            this.bluedemon2.destroy();
        }
    }, {
        key: "obtainRed",
        value: function obtainRed() {
            this.redkey.destroy();
            if (this.getRedKey === false) {
                this.keySound.play();
                this.getRedKey = true;
            }
        }
    }, {
        key: "obtainBlue",
        value: function obtainBlue() {
            this.bluekey.destroy();
            if (this.getBlueKey === false) {
                this.keySound.play();
                this.getBlueKey = true;
            }
        }
    }]);

    return Level_al1;
}(Phaser.Scene);

exports.Level_al1 = Level_al1;

},{"../Control":1}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var Level_al2 = function (_Phaser$Scene) {
    _inherits(Level_al2, _Phaser$Scene);

    function Level_al2() {
        _classCallCheck(this, Level_al2);

        var _this = _possibleConstructorReturn(this, (Level_al2.__proto__ || Object.getPrototypeOf(Level_al2)).call(this, {
            key: Control_1.Control.Scene.Level5
        }));

        _this.redcanjump = true;
        _this.redjumpcount = 0;
        _this.bluecanjump = true;
        _this.bluejumpcount = 0;
        _this.getRedKey = false;
        _this.getBlueKey = false;
        _this.isVictory = false;
        _this.redAlive = true;
        _this.blueAlive = true;
        _this.rd1_alive = true;
        _this.rd2_alive = true;
        _this.bd1_alive = true;
        _this.bd2_alive = true;
        return _this;
    }

    _createClass(Level_al2, [{
        key: "init",
        value: function init() {
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
    }, {
        key: "preload",
        value: function preload() {
            this.load.image("redkey", "asset/RedKey.png");
            this.load.image("bluekey", "asset/BlueKey.png");
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.tilemapTiledJSON('mapal2', 'asset/tilemaps/maps/LevelMap_al2.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.audio('gg_sound', 'asset/sounds/gameover.mp3');
            this.load.audio('atk_sound', 'asset/sounds/attack.mp3');
            //Red animation/////////////////////////////////////////
            this.anims.create({
                key: "red_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "red_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "red_death_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [18, 19, 20, 21, 22, 23]
                })
            });
            this.anims.create({
                key: "red_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "red_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "red_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "red_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [30, 31, 32]
                })
            });
            //Blue Animation/////////////////////////////////////////
            this.anims.create({
                key: "blue_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "blue_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "blue_death_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [12, 13, 14, 15, 16, 17]
                })
            });
            this.anims.create({
                key: "blue_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "blue_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "blue_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "blue_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [30, 31, 32]
                })
            });
            //Red Demon Animation///////////////////////////////////
            this.anims.create({
                key: "reddemon_idle",
                frameRate: 3,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [0, 1, 2, 3, 4]
                })
            });
            this.anims.create({
                key: "reddemon_death",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [5, 6, 7, 8, 9]
                })
            });
            this.anims.create({
                key: "reddemon_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [10, 11, 12, 13, 14]
                })
            });
            this.anims.create({
                key: "reddemon_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("reddemon", {
                    frames: [15, 16, 17, 18, 19]
                })
            });
            //Blue Demon Animation//////////////////////////////////
            this.anims.create({
                key: "bluedemon_idle",
                frameRate: 3,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [0, 1, 2, 3, 4]
                })
            });
            this.anims.create({
                key: "bluedemon_death",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [5, 6, 7, 8, 9]
                })
            });
            this.anims.create({
                key: "bluedemon_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [10, 11, 12, 13, 14]
                })
            });
            this.anims.create({
                key: "bluedemon_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("bluedemon", {
                    frames: [15, 16, 17, 18, 19]
                })
            });
            //Dark Demon Animation///////////////////////////////////
            this.anims.create({
                key: "darkdemon_idle",
                frameRate: 3,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [0, 1, 2, 3, 4]
                })
            });
            this.anims.create({
                key: "darkdemon_death",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [5, 6, 7, 8, 9]
                })
            });
            this.anims.create({
                key: "darkdemon_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [10, 11, 12, 13, 14]
                })
            });
            this.anims.create({
                key: "darkdemon_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("darkdemon", {
                    frames: [15, 16, 17, 18, 19]
                })
            });
        }
    }, {
        key: "create",
        value: function create() {
            // Play music
            this.bgm = this.sound.add('bgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.bgm.play(musicConfig);
            // Add sound effect
            this.jumpSound = this.sound.add('jump_sound');
            this.keySound = this.sound.add('key_sound');
            this.vicSound = this.sound.add('vic_sound');
            this.ggSound = this.sound.add('gg_sound');
            this.atkSound = this.sound.add('atk_sound');
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    // Stop music when esc
                    this.bgm.stop();
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("mapal2");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            this.top = map1.createStaticLayer("Collision", [block, CastleBackground], 0, 0);
            this.top.setDepth(1);
            this.top.setCollisionBetween(0, 10);
            var bot = map1.createStaticLayer("Background", [block, CastleBackground], 0, 0);
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
            this.red = this.physics.add.sprite(1248, 400, "redknight1");
            this.blue = this.physics.add.sprite(32, 400, "blueknight");
            // Add demons into the scene
            this.darkdemon = this.physics.add.sprite(640, 600, "darkdemon");
            this.darkdemon.setVelocityX(-1000);
            this.reddemon1 = this.physics.add.sprite(1050, 600, "reddemon");
            this.reddemon1.setVelocityX(-800);
            this.bluedemon1 = this.physics.add.sprite(230, 600, "bluedemon");
            this.bluedemon1.setVelocityX(700);
            this.reddemon2 = this.physics.add.sprite(1180, 160, "reddemon");
            this.reddemon2.setVelocityX(-200);
            this.bluedemon2 = this.physics.add.sprite(160, 160, "bluedemon");
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
            this.redkey = this.physics.add.image(160, 160, "redkey");
            this.redkey.setScale(2);
            this.bluekey = this.physics.add.image(1180, 160, "bluekey");
            this.bluekey.setScale(2);
        }
    }, {
        key: "update",
        value: function update(delta) {
            // Collision Relation
            this.physics.collide(this.red, this.top);
            this.physics.collide(this.blue, this.top);
            this.physics.collide(this.darkdemon, this.top);
            this.physics.collide(this.reddemon1, this.top);
            this.physics.collide(this.reddemon2, this.top);
            this.physics.collide(this.bluedemon1, this.top);
            this.physics.collide(this.bluedemon2, this.top);
            this.physics.collide(this.top, this.redkey);
            this.physics.collide(this.top, this.bluekey);
            // Demon Movement
            // Red Demon
            if (this.rd1_alive) {
                if (this.reddemon1.getBounds().centerX < 120) {
                    this.reddemon1.play("reddemon_left", true);
                    this.reddemon1.setVelocityX(800);
                } else if (this.reddemon1.getBounds().centerX > 1180) {
                    this.reddemon1.play("reddemon_right", true);
                    this.reddemon1.setVelocityX(-800);
                }
            }
            if (this.rd2_alive) {
                if (this.reddemon2.getBounds().centerX < 1150) {
                    this.reddemon2.play("reddemon_left", true);
                    this.reddemon2.setVelocityX(200);
                } else if (this.reddemon2.getBounds().centerX > 1240) {
                    this.reddemon2.play("reddemon_right", true);
                    this.reddemon2.setVelocityX(-200);
                }
            }
            // Blue Demon
            if (this.bd1_alive) {
                if (this.bluedemon1.getBounds().centerX < 120) {
                    this.bluedemon1.play("bluedemon_left", true);
                    this.bluedemon1.setVelocityX(700);
                } else if (this.bluedemon1.getBounds().centerX > 1180) {
                    this.bluedemon1.play("bluedemon_right", true);
                    this.bluedemon1.setVelocityX(-700);
                }
            }
            if (this.bd2_alive) {
                if (this.bluedemon2.getBounds().centerX < 100) {
                    this.bluedemon2.play("bluedemon_left", true);
                    this.bluedemon2.setVelocityX(250);
                } else if (this.bluedemon2.getBounds().centerX > 280) {
                    this.bluedemon2.play("bluedemon_right", true);
                    this.bluedemon2.setVelocityX(-250);
                }
            }
            // Dark Demon
            if (this.darkdemon.getBounds().centerX < 120) {
                this.darkdemon.play("darkdemon_left", true);
                this.darkdemon.setVelocityX(1000);
            } else if (this.darkdemon.getBounds().centerX > 1180) {
                this.darkdemon.play("darkdemon_right", true);
                this.darkdemon.setVelocityX(-1000);
            }
            // Overlap actions////////////////////////////////////////////////
            // Keys
            this.physics.overlap(this.red, this.redkey, this.obtainRed, null, this);
            this.physics.overlap(this.blue, this.bluekey, this.obtainBlue, null, this);
            // Death
            this.physics.overlap(this.red, this.darkdemon, this.redDeath, null, this);
            this.physics.overlap(this.blue, this.darkdemon, this.blueDeath, null, this);
            this.physics.overlap(this.red, this.bluedemon1, this.redDeath, null, this);
            this.physics.overlap(this.red, this.bluedemon2, this.redDeath, null, this);
            this.physics.overlap(this.blue, this.reddemon1, this.blueDeath, null, this);
            this.physics.overlap(this.blue, this.reddemon2, this.blueDeath, null, this);
            // Attack
            this.physics.overlap(this.red, this.reddemon1, this.reddemonDeath1, null, this);
            this.physics.overlap(this.red, this.reddemon2, this.reddemonDeath2, null, this);
            this.physics.overlap(this.blue, this.bluedemon1, this.bluedemonDeath1, null, this);
            this.physics.overlap(this.blue, this.bluedemon2, this.bluedemonDeath2, null, this);
            // Check Victory
            if (this.getBlueKey && this.getRedKey && this.isVictory === false) {
                this.vicSound.play();
                this.bgm.stop();
                this.isVictory = true;
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Check Game Over
            if (!this.redAlive && !this.blueAlive && this.isVictory === false) {
                this.ggSound.play();
                this.bgm.stop();
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Check data
            if (this.key_space.isDown) {
                console.log("Red:  " + this.red.getBounds().centerX + "," + this.red.getBounds().centerY);
                console.log("Blue: " + this.blue.getBounds().centerX + "," + this.blue.getBounds().centerY);
            }
            // Red Control
            // Jump detection
            if (this.redAlive) {
                if (this.redcanjump === false) {
                    if (this.redjumpcount == 1 && this.red.body.velocity.y == 0) {
                        this.redcanjump = true;
                        this.redjumpcount = 0;
                    } else if (this.red.body.velocity.y == 0) {
                        this.redjumpcount++;
                    } else if (this.redjumpcount == 1 && this.red.body.velocity.y == 0) {
                        this.redcanjump = true;
                        this.redjumpcount = 0;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.red, this.top);
                if (this.key_ArrowRight.isDown) {
                    this.red.setVelocityX(200);
                    this.red.play("red_move_right", true);
                    if (this.key_ArrowUp.isDown) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_right");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowLeft.isDown) {
                    this.red.setVelocityX(-200);
                    this.red.play("red_move_left", true);
                    if (this.key_ArrowUp.isDown === true) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_left");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowUp.isDown) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_right");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.red.setVelocityX(0);
                    this.red.play("red_idle_left", true);
                }
            }
            // Blue Control
            // Jump detection
            if (this.blueAlive) {
                if (this.bluecanjump == false) {
                    if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 0) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    } else if (this.blue.body.velocity.y == 0) {
                        this.bluejumpcount++;
                    } else if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 0) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.blue, this.top);
                if (this.key_D.isDown === true) {
                    this.blue.setVelocityX(200);
                    this.blue.play("blue_move_right", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_right");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_A.isDown) {
                    this.blue.setVelocityX(-200);
                    this.blue.play("blue_move_left", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_left");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_W.isDown) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_right");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.blue.setVelocityX(0);
                    this.blue.play("blue_idle_right", true);
                }
            }
        }
    }, {
        key: "redDeath",
        value: function redDeath() {
            if (this.redAlive == true) {
                this.redAlive = false;
                this.atkSound.play();
                this.red.play("red_death_left", true);
                this.red.body.velocity.x = 0;
            }
        }
    }, {
        key: "blueDeath",
        value: function blueDeath() {
            if (this.blueAlive == true) {
                this.blueAlive = false;
                this.atkSound.play();
                this.blue.play("blue_death_right", true);
                this.blue.body.velocity.x = 0;
            }
        }
    }, {
        key: "reddemonDeath1",
        value: function reddemonDeath1() {
            if (this.redAlive) {
                this.rd1_alive = false;
                this.atkSound.play();
                this.reddemon1.play("reddemon_death");
                this.reddemon1.destroy();
            }
        }
    }, {
        key: "reddemonDeath2",
        value: function reddemonDeath2() {
            if (this.redAlive) {
                this.rd2_alive = false;
                this.atkSound.play();
                this.reddemon2.play("reddemon_death");
                this.reddemon2.destroy();
            }
        }
    }, {
        key: "bluedemonDeath1",
        value: function bluedemonDeath1() {
            if (this.blueAlive) {
                this.bd1_alive = false;
                this.atkSound.play();
                this.bluedemon1.play("bluedemon_death");
                this.bluedemon1.destroy();
            }
        }
    }, {
        key: "bluedemonDeath2",
        value: function bluedemonDeath2() {
            if (this.blueAlive) {
                this.bd2_alive = false;
                this.atkSound.play();
                this.bluedemon2.play("bluedemon_death");
                this.bluedemon2.destroy();
            }
        }
    }, {
        key: "obtainRed",
        value: function obtainRed() {
            this.redkey.destroy();
            if (this.getRedKey === false) {
                this.keySound.play();
                this.getRedKey = true;
            }
        }
    }, {
        key: "obtainBlue",
        value: function obtainBlue() {
            this.bluekey.destroy();
            if (this.getBlueKey === false) {
                this.keySound.play();
                this.getBlueKey = true;
            }
        }
    }]);

    return Level_al2;
}(Phaser.Scene);

exports.Level_al2 = Level_al2;

},{"../Control":1}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var Level_crj = function (_Phaser$Scene) {
    _inherits(Level_crj, _Phaser$Scene);

    function Level_crj() {
        _classCallCheck(this, Level_crj);

        var _this = _possibleConstructorReturn(this, (Level_crj.__proto__ || Object.getPrototypeOf(Level_crj)).call(this, {
            key: Control_1.Control.Scene.Level2
        }));

        _this.redcanjump = true;
        _this.redjumpcount = 0;
        _this.bluecanjump = true;
        _this.bluejumpcount = 0;
        _this.getRedKey = false;
        _this.getBlueKey = false;
        _this.isVictory = false;
        return _this;
    }

    _createClass(Level_crj, [{
        key: "init",
        value: function init() {
            this.sound.stopAll();
            this.bluealive = true;
            this.bluebubble = false;
            this.redalive = true;
            this.shoottime = 0;
            this.getBlueKey = false;
            this.getRedKey = false;
            this.isVictory = false;
        }
    }, {
        key: "preload",
        value: function preload() {
            this.load.image("redkey", "asset/RedKey.png");
            this.load.image("bluekey", "asset/BlueKey.png");
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.image('ele', "asset/level_crj/ele.png");
            this.load.tilemapTiledJSON('map2', 'asset/level_crj/mylevel.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.image("block", "asset/level_crj/CastleBlock_1.png");
            this.load.audio("defeated", "asset/sounds/gameover.mp3");
            this.load.spritesheet("dapao", "asset/level_crj/dapao.png", {
                frameWidth: 128,
                frameHeight: 64
            });
            // shooting group
            this.anims.create({
                key: "red_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "red_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "red_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "red_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "red_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "red_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [30, 31, 32]
                })
            });
            this.anims.create({
                key: "red_dead_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [12, 13, 14, 15, 16, 17]
                }),
                repeat: 0
            });
            //blue anim
            this.anims.create({
                key: "blue_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "blue_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "blue_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "blue_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "blue_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "blue_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [30, 31, 32]
                })
            });
            this.anims.create({
                key: "blue_bubble",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [36]
                })
            });
            this.anims.create({
                key: "blue_dead_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [12, 13, 14, 15, 16, 17]
                })
            });
        }
    }, {
        key: "create",
        value: function create() {
            // dapao anims
            this.anims.create({
                key: "dapao_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [3]
                })
            });
            this.anims.create({
                key: "dapao_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [0]
                })
            });
            this.anims.create({
                key: "dapao_move_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "dapao_move_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [3, 4, 5]
                })
            });
            // Play music
            this.bgm = this.sound.add('bgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.lose = this.sound.add("defeated");
            this.bgm.play(musicConfig);
            // Add sound effect
            this.jumpSound = this.sound.add('jump_sound');
            this.keySound = this.sound.add('key_sound');
            this.vicSound = this.sound.add('vic_sound');
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    // Stop music when esc
                    this.bgm.stop();
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("map2");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var ele = map1.addTilesetImage("ele", "ele");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            this.top = map1.createStaticLayer("collide", [block, CastleBackground], 0, 0);
            this.top.setDepth(2);
            this.mid = map1.createStaticLayer("ele", [ele], 0, 0);
            this.mid.setDepth(1);
            this.top.setCollisionBetween(0, 5);
            var bot = map1.createStaticLayer("background", [block, CastleBackground], 0, 0);
            bot.setDepth(0);
            this.blocks = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            this.block1 = this.blocks.create(672, 352, "block").setDepth(3);
            this.block2 = this.blocks.create(736, 352, "block").setDepth(3);
            this.block1.checkWorldBounds = true;
            this.block2.checkWorldBounds = true;
            // Define Keys
            this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            // Add knights in to the scene
            this.red = this.physics.add.sprite(90, 280, "redknight1");
            this.blue = this.physics.add.sprite(90, 600, "blueknight2");
            // Enable collision
            this.red.setCollideWorldBounds(true);
            this.blue.setCollideWorldBounds(true);
            this.redkey = this.physics.add.image(1185, 288, "redkey");
            this.redkey.setScale(2);
            this.bluekey = this.physics.add.image(1057, 672, "bluekey");
            this.bluekey.setScale(2);
            //add dapao to scene
            this.huopao = this.physics.add.sprite(1172, 64, "dapao");
            this.shuipao = this.physics.add.sprite(256, 512, "dapao");
            this.shuipao.setDrag(200, 200);
            this.huopao.play("dapao_idle_left", true);
            this.shuipao.play("dapao_idle_right", true);
            this.fireballs = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            for (var i = 0; i < 30; i++) {
                var fireball = this.fireballs.create(0, 0, "fireball").setDepth(3);
                fireball.name = "fireball" + i;
                fireball.active = false;
                fireball.visible = false;
                fireball.checkWorldBounds = true;
            }
            this.bubbles = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            for (var _i = 0; _i < 30; _i++) {
                var bubble = this.bubbles.create(0, 0, "bubble").setDepth(3);
                bubble.name = "bubble" + _i;
                bubble.active = false;
                bubble.visible = false;
                bubble.checkWorldBounds = true;
            }
        }
    }, {
        key: "update",
        value: function update(delta) {
            this.physics.collide(this.top, this.huopao);
            this.physics.collide(this.top, this.shuipao);
            this.physics.collide(this.red, this.huopao);
            this.physics.collide(this.blue, this.shuipao);
            this.physics.collide(this.top, this.redkey);
            this.physics.collide(this.top, this.bluekey);
            //shuipao move
            if (this.shuipao.body.velocity.x != 0) {
                this.shuipao.play("dapao_move_right", true);
            }
            this.physics.overlap(this.red, this.fireballs, this.redshot, null, this);
            this.physics.overlap(this.blue, this.bubbles, this.blueshot, null, this);
            var fireball = this.fireballs.getFirstAlive(true);
            if (fireball) {
                if (fireball.body.x < 0) {
                    fireball.active = false;
                }
            }
            var bubble = this.bubbles.getFirstAlive(true);
            if (bubble) {
                if (bubble.body.x > 1200) {
                    bubble.active = false;
                }
            }
            if (this.time.now > this.shoottime) {
                var _fireball = this.fireballs.getFirstDead(false);
                if (_fireball) {
                    _fireball.visible = true;
                    _fireball.active = true;
                    _fireball.body.reset(this.huopao.x - 100, this.huopao.y);
                    _fireball.body.velocity.x = -200;
                    this.shoottime = this.time.now + 2300;
                }
                var _bubble = this.bubbles.getFirstDead(false);
                if (_bubble) {
                    _bubble.visible = true;
                    _bubble.active = true;
                    _bubble.body.reset(this.shuipao.x + 100, this.shuipao.y);
                    _bubble.body.velocity.x = 270;
                }
            }
            // xiao ji guan
            this.physics.collide(this.red, this.blocks, this.dropdown, null, this);
            this.physics.collide(this.blue, this.blocks);
            if (this.block2.body.y >= 576) {
                this.block2.body.velocity.y = 0;
                this.block2.body.y = 576;
            }
            if (this.block2.body.x >= 768) {
                this.block2.body.velocity.x = 0;
                this.block2.body.x = 768;
            }
            //death
            if (this.red.body.y >= 352) {
                this.redshot();
            }
            if (this.blue.body.y <= 352) {
                this.bluedead();
            }
            if (this.blue.body.y >= 678) {
                this.bluedead();
            }
            this.physics.overlap(this.red, this.redkey, this.getredkey, null, this);
            this.physics.overlap(this.blue, this.bluekey, this.getbluekey, null, this);
            if (this.getBlueKey && this.getRedKey && this.isVictory === false) {
                this.vicSound.play();
                this.bgm.stop();
                this.isVictory = true;
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Red Control
            // Jump detection
            if (this.redalive == true) {
                if (this.redcanjump == false) {
                    if (this.redjumpcount == 1 && this.red.body.velocity.y == 10) {
                        this.redcanjump = true;
                        this.redjumpcount = 0;
                    } else if (this.red.body.velocity.y == 10) {
                        this.redjumpcount++;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.red, this.top);
                if (this.key_ArrowRight.isDown === true) {
                    this.red.setVelocityX(200);
                    this.red.play("red_move_right", true);
                    if (this.key_ArrowUp.isDown === true) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_right");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowLeft.isDown) {
                    this.red.setVelocityX(-200);
                    this.red.play("red_move_left", true);
                    if (this.key_ArrowUp.isDown === true) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_left");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowUp.isDown) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_right");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.red.setVelocityX(0);
                    this.red.play("red_idle_right", true);
                }
            } else {
                this.physics.collide(this.red, this.top);
            }
            // Blue Control
            // Jump detection
            if (this.bluebubble == false && this.bluealive == true) {
                if (this.bluecanjump == false) {
                    if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 10) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    } else if (this.blue.body.velocity.y == 10) {
                        this.bluejumpcount++;
                    } else if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 0) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.blue, this.top);
                if (this.key_D.isDown === true) {
                    this.blue.setVelocityX(200);
                    this.blue.play("blue_move_right", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_right");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_A.isDown) {
                    this.blue.setVelocityX(-200);
                    this.blue.play("blue_move_left", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_left");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_W.isDown) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_right");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.blue.setVelocityX(0);
                    this.blue.play("blue_idle_right", true);
                }
            } else if (this.bluealive == true && this.bluebubble == true) {
                this.physics.collide(this.blue, this.top);
                this.blue.setVelocityY(-200);
            } else if (this.bluealive == false) {
                this.physics.collide(this.blue, this.top);
            }
        }
    }, {
        key: "redshot",
        value: function redshot() {
            if (this.redalive == true) {
                this.redalive = false;
                this.red.play("red_dead_right", true);
                this.red.body.velocity.x = 0;
                if (this.bluealive == false) {
                    this.bgm.stop();
                    this.lose.play();
                }
            }
        }
    }, {
        key: "blueshot",
        value: function blueshot() {
            if (this.bluebubble == false) {
                this.bluebubble = true;
                this.blue.play("blue_bubble", true);
                this.blue.body.velocity.x = 0;
                this.blue.setVelocityY(-200);
            }
        }
    }, {
        key: "bluedead",
        value: function bluedead() {
            if (this.bluealive == true) {
                this.bluealive = false;
                this.blue.play("blue_dead_right", true);
                this.blue.body.velocity.x = 0;
                if (this.redalive == false) {
                    this.bgm.stop();
                    this.lose.play();
                }
            }
        }
    }, {
        key: "dropdown",
        value: function dropdown() {
            this.block1.body.velocity.y = 600;
            this.block2.body.velocity.y = 600;
            this.block2.body.velocity.x = 200;
        }
    }, {
        key: "getredkey",
        value: function getredkey() {
            this.redkey.destroy();
            if (this.getRedKey === false) {
                this.keySound.play();
                this.getRedKey = true;
            }
        }
    }, {
        key: "getbluekey",
        value: function getbluekey() {
            this.bluekey.destroy();
            if (this.getBlueKey === false) {
                this.keySound.play();
                this.getBlueKey = true;
            }
        }
    }]);

    return Level_crj;
}(Phaser.Scene);

exports.Level_crj = Level_crj;

},{"../Control":1}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var Level_crj2 = function (_Phaser$Scene) {
    _inherits(Level_crj2, _Phaser$Scene);

    function Level_crj2() {
        _classCallCheck(this, Level_crj2);

        var _this = _possibleConstructorReturn(this, (Level_crj2.__proto__ || Object.getPrototypeOf(Level_crj2)).call(this, {
            key: Control_1.Control.Scene.Level3
        }));

        _this.redcanjump = true;
        _this.redjumpcount = 0;
        _this.bluecanjump = true;
        _this.bluejumpcount = 0;
        _this.getRedKey = false;
        _this.getBlueKey = false;
        _this.isVictory = false;
        return _this;
    }

    _createClass(Level_crj2, [{
        key: "init",
        value: function init() {
            this.sound.stopAll();
            this.redbubble = false;
            this.bluekeybubble = false;
            this.bluealive = true;
            this.bluebubble = false;
            this.redalive = true;
            this.shoottime = 0;
            this.getBlueKey = false;
            this.getRedKey = false;
            this.isVictory = false;
        }
    }, {
        key: "preload",
        value: function preload() {
            this.load.image("redkey", "asset/RedKey.png");
            this.load.image("bluekey", "asset/BlueKey.png");
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.image('ele', "asset/level_crj/ele.png");
            this.load.tilemapTiledJSON('map3', 'asset/level_crj/mylevel2.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.image("block", "asset/level_crj/CastleBlock_1.png");
            this.load.audio("defeated", "asset/sounds/gameover.mp3");
            this.load.spritesheet("dapao", "asset/level_crj/dapao.png", {
                frameWidth: 128,
                frameHeight: 64
            });
            this.load.image("trap", "asset/level_crj/trap.png");
            this.load.spritesheet("redkey2", "asset/level_crj/redkey.png", {
                frameHeight: 64,
                frameWidth: 64
            });
            this.load.spritesheet("bluekey2", "asset/level_crj/bluekey.png", {
                frameHeight: 64,
                frameWidth: 64
            });
            // shooting group
            this.anims.create({
                key: "red_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "red_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "red_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "red_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "red_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "red_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [30, 31, 32]
                })
            });
            this.anims.create({
                key: "red_dead_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [12, 13, 14, 15, 16, 17]
                }),
                repeat: 0
            });
            //blue anim
            this.anims.create({
                key: "blue_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "blue_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "blue_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "blue_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "blue_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "blue_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [30, 31, 32]
                })
            });
            this.anims.create({
                key: "blue_bubble",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [36]
                })
            });
            this.anims.create({
                key: "blue_dead_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight2", {
                    frames: [12, 13, 14, 15, 16, 17]
                })
            });
        }
    }, {
        key: "create",
        value: function create() {
            // dapao anims
            this.anims.create({
                key: "dapao_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [3]
                })
            });
            this.anims.create({
                key: "dapao_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [0]
                })
            });
            this.anims.create({
                key: "dapao_move_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "dapao_move_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [3, 4, 5]
                })
            });
            //key anis
            this.anims.create({
                key: "red_key_idle",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redkey2", {
                    frames: [0]
                })
            });
            this.anims.create({
                key: "red_key_bubble",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redkey2", {
                    frames: [1]
                })
            });
            this.anims.create({
                key: "blue_key_idle",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("bluekey2", {
                    frames: [0]
                })
            });
            this.anims.create({
                key: "blue_key_bubble",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("bluekey2", {
                    frames: [1]
                })
            });
            // Play music
            this.bgm = this.sound.add('bgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.bgm.play(musicConfig);
            // Add sound effect
            this.jumpSound = this.sound.add('jump_sound');
            this.keySound = this.sound.add('key_sound');
            this.vicSound = this.sound.add('vic_sound');
            this.lose = this.sound.add("defeated");
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    // Stop music when esc
                    this.bgm.stop();
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("map3");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var ele = map1.addTilesetImage("ele", "ele");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            this.top = map1.createStaticLayer("collide", [block, CastleBackground], 0, 0);
            this.top.setDepth(2);
            this.mid = map1.createStaticLayer("ele", [ele], 0, 0);
            this.mid.setDepth(1);
            this.top.setCollisionBetween(0, 10);
            var bot = map1.createStaticLayer("background", [block, CastleBackground], 0, 0);
            bot.setDepth(0);
            this.blocks = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            this.block1 = this.blocks.create(288, 352, "block").setDepth(3);
            this.block2 = this.blocks.create(352, 352, "block").setDepth(3);
            this.block3 = this.blocks.create(416, 352, "block").setDepth(3);
            this.block4 = this.blocks.create(1120, 352, "block").setDepth(3);
            this.block5 = this.blocks.create(1184, 352, "block").setDepth(3);
            this.block6 = this.blocks.create(1248, 352, "block").setDepth(3);
            this.traps = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            this.trap1 = this.traps.create(544, 352, "trap").setDepth(1);
            this.trap2 = this.traps.create(608, 352, "trap").setDepth(1);
            // Define Keys
            this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            // Add knights in to the scene
            this.red = this.physics.add.sprite(90, 280, "redknight1");
            this.blue = this.physics.add.sprite(90, 600, "blueknight2");
            // Enable collision
            this.red.setCollideWorldBounds(true);
            this.blue.setCollideWorldBounds(true);
            this.redkey = this.physics.add.sprite(800, 480, "redkey2");
            this.bluekey = this.physics.add.sprite(672, 32, "bluekey2");
            this.redkey.setDragX(100);
            this.bluekey.setDragX(100);
            this.redkey.setCollideWorldBounds(true);
            this.bluekey.setCollideWorldBounds(true);
            //add dapao to scene
            this.huopao = this.physics.add.sprite(64, 32, "dapao");
            this.shuipao = this.physics.add.sprite(256, 544, "dapao");
            this.shuipao.setDrag(200, 200);
            this.huopao.play("dapao_idle_right", true);
            this.shuipao.play("dapao_idle_right", true);
            this.fireballs = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            for (var i = 0; i < 30; i++) {
                var fireball = this.fireballs.create(0, 0, "fireballr").setDepth(3);
                fireball.name = "fireball" + i;
                fireball.active = false;
                fireball.visible = false;
                fireball.checkWorldBounds = true;
            }
            this.bubbles = this.physics.add.group({
                immovable: true,
                allowGravity: false
            });
            for (var _i = 0; _i < 30; _i++) {
                var bubble = this.bubbles.create(0, 0, "bubble").setDepth(3);
                bubble.name = "bubble" + _i;
                bubble.active = false;
                bubble.visible = false;
                bubble.checkWorldBounds = true;
            }
        }
    }, {
        key: "update",
        value: function update(delta) {
            this.physics.collide(this.top, this.huopao);
            this.physics.collide(this.top, this.shuipao);
            this.physics.collide(this.red, this.huopao);
            this.physics.collide(this.blue, this.shuipao);
            this.physics.collide(this.top, this.redkey);
            this.physics.collide(this.top, this.bluekey);
            this.physics.collide(this.red, this.bluekey);
            this.physics.collide(this.blue, this.redkey);
            this.physics.collide(this.blocks, this.shuipao);
            this.physics.collide(this.blocks, this.bluekey);
            this.physics.collide(this.blocks, this.redkey);
            //shuipao move
            if (this.shuipao.body.velocity.x != 0) {
                this.shuipao.play("dapao_move_right", true);
            }
            this.physics.overlap(this.red, this.fireballs, this.redshot, null, this);
            this.physics.overlap(this.blue, this.bubbles, this.blueshot, null, this);
            var fireball = this.fireballs.getFirstAlive(true);
            if (fireball) {
                if (fireball.body.x > 1280) {
                    fireball.active = false;
                }
            }
            var bubble = this.bubbles.getFirstAlive(true);
            if (bubble) {
                if (bubble.body.x > 1280) {
                    bubble.active = false;
                }
            }
            if (this.time.now > this.shoottime) {
                var _fireball = this.fireballs.getFirstDead(false);
                if (_fireball) {
                    _fireball.visible = true;
                    _fireball.active = true;
                    _fireball.body.reset(this.huopao.x + 100, this.huopao.y);
                    _fireball.body.velocity.x = 150;
                    this.shoottime = this.time.now + 2800;
                }
                var _bubble = this.bubbles.getFirstDead(false);
                if (_bubble) {
                    _bubble.visible = true;
                    _bubble.active = true;
                    _bubble.body.reset(this.shuipao.x + 100, this.shuipao.y);
                    _bubble.body.velocity.x = 270;
                }
            }
            // xiao ji guan
            this.physics.collide(this.red, this.block1, this.dropdown1, null, this);
            this.physics.collide(this.red, this.block2, this.dropdown1, null, this);
            this.physics.collide(this.red, this.block3, this.dropdown1, null, this);
            this.physics.collide(this.blue, this.blocks);
            this.physics.collide(this.red, this.block4, this.dropdown2, null, this);
            this.physics.collide(this.red, this.block5, this.dropdown2, null, this);
            this.physics.collide(this.red, this.block6, this.dropdown2, null, this);
            if (this.block3.body.y >= 640) {
                this.block3.body.velocity.y = 0;
                this.block3.body.y = 640;
            }
            //xiao ji guan 2
            if (this.red.getBounds().centerX >= 487 && this.red.getBounds().centerX <= 640) {
                if (this.red.body.y >= 256) {
                    this.trapout();
                }
            }
            if (this.trap1.body.y < 300) {
                this.trap1.body.velocity.y = 0;
                this.trap1.body.y = 294;
            }
            if (this.trap2.body.y < 300) {
                this.trap2.body.velocity.y = 0;
                this.trap2.body.y = 294;
            }
            this.physics.overlap(this.red, this.traps, this.redshot, null, this);
            //key
            if (this.getRedKey == false) {
                if (this.redbubble == false) {
                    this.redkey.play("red_key_idle", true);
                } else {
                    this.redkey.body.velocity.y = -100;
                    this.redkey.play("red_key_bubble", true);
                }
            }
            if (this.getBlueKey == false) {
                if (this.bluekeybubble == false) {
                    this.bluekey.play("blue_key_idle", true);
                } else {
                    this.bluekey.body.velocity.y = -100;
                    this.bluekey.play("blue_key_bubble", true);
                }
            }
            this.physics.overlap(this.bubbles, this.redkey, this.redkeybubble, null, this);
            //death
            if (this.red.body.y >= 352) {
                this.redshot();
            }
            if (this.blue.body.y <= 352) {
                this.bluedead();
            }
            if (this.blue.body.y >= 678) {
                this.bluedead();
            }
            this.physics.overlap(this.red, this.redkey, this.getredkey, null, this);
            this.physics.overlap(this.blue, this.bluekey, this.getbluekey, null, this);
            if (this.getBlueKey && this.getRedKey && this.isVictory === false) {
                this.vicSound.play();
                this.bgm.stop();
                this.isVictory = true;
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Red Control
            // Jump detection
            if (this.redalive == true) {
                if (this.redcanjump == false) {
                    if (this.redjumpcount == 1 && this.red.body.velocity.y == 10) {
                        this.redcanjump = true;
                        this.redjumpcount = 0;
                    } else if (this.red.body.velocity.y == 10) {
                        this.redjumpcount++;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.red, this.top);
                if (this.key_ArrowRight.isDown === true) {
                    this.red.setVelocityX(200);
                    this.red.play("red_move_right", true);
                    if (this.key_ArrowUp.isDown === true) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_right");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowLeft.isDown) {
                    this.red.setVelocityX(-200);
                    this.red.play("red_move_left", true);
                    if (this.key_ArrowUp.isDown === true) {
                        if (this.redcanjump) {
                            this.red.play("red_jump_left");
                            this.red.setVelocityY(-400);
                            this.redcanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_ArrowUp.isDown) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_right");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.red.setVelocityX(0);
                    this.red.play("red_idle_right", true);
                }
            } else {
                this.physics.collide(this.red, this.top);
            }
            // Blue Control
            // Jump detection
            if (this.bluebubble == false && this.bluealive == true) {
                if (this.bluecanjump == false) {
                    if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 10) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    } else if (this.blue.body.velocity.y == 10) {
                        this.bluejumpcount++;
                    } else if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 0) {
                        this.bluecanjump = true;
                        this.bluejumpcount = 0;
                    }
                }
                // Right Left Jump action
                this.physics.collide(this.blue, this.top);
                if (this.key_D.isDown === true) {
                    this.blue.setVelocityX(200);
                    this.blue.play("blue_move_right", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_right");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_A.isDown) {
                    this.blue.setVelocityX(-200);
                    this.blue.play("blue_move_left", true);
                    if (this.key_W.isDown === true) {
                        if (this.bluecanjump) {
                            this.blue.play("blue_jump_left");
                            this.blue.setVelocityY(-400);
                            this.bluecanjump = false;
                            this.jumpSound.play();
                        }
                    }
                } else if (this.key_W.isDown) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_right");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                } else {
                    this.blue.setVelocityX(0);
                    this.blue.play("blue_idle_right", true);
                }
            } else if (this.bluealive == true && this.bluebubble == true) {
                this.physics.collide(this.blue, this.top);
                this.blue.setVelocityY(-200);
            } else if (this.bluealive == false) {
                this.physics.collide(this.blue, this.top);
            }
        }
    }, {
        key: "redshot",
        value: function redshot() {
            if (this.redalive == true) {
                this.redalive = false;
                this.red.play("red_dead_right", true);
                this.red.body.velocity.x = 0;
                if (this.bluealive == false) {
                    this.bgm.stop();
                    this.lose.play();
                }
            }
        }
    }, {
        key: "blueshot",
        value: function blueshot() {
            if (this.bluebubble == false) {
                this.bluebubble = true;
                this.blue.play("blue_bubble", true);
                this.blue.body.velocity.x = 0;
                this.blue.setVelocityY(-200);
            }
        }
    }, {
        key: "bluedead",
        value: function bluedead() {
            if (this.bluealive == true) {
                this.bluealive = false;
                this.blue.play("blue_dead_right", true);
                this.blue.body.velocity.x = 0;
                if (this.redalive == false) {
                    this.bgm.stop();
                    this.lose.play();
                }
            }
        }
    }, {
        key: "dropdown1",
        value: function dropdown1() {
            this.block1.body.velocity.y = 600;
            this.block2.body.velocity.y = 600;
            this.block3.body.velocity.y = 600;
        }
    }, {
        key: "dropdown2",
        value: function dropdown2() {
            this.block4.body.velocity.x = 600;
            this.block5.body.velocity.x = 600;
            this.block6.body.velocity.x = 600;
        }
    }, {
        key: "getredkey",
        value: function getredkey() {
            this.redkey.destroy();
            if (this.getRedKey === false) {
                this.keySound.play();
                this.getRedKey = true;
            }
        }
    }, {
        key: "getbluekey",
        value: function getbluekey() {
            this.bluekey.destroy();
            if (this.getBlueKey === false) {
                this.keySound.play();
                this.getBlueKey = true;
            }
        }
    }, {
        key: "trapout",
        value: function trapout() {
            this.trap1.body.velocity.y = -600;
            this.trap2.body.velocity.y = -600;
        }
    }, {
        key: "redkeybubble",
        value: function redkeybubble() {
            this.redbubble = true;
            this.redkey.body.velocity.y = -100;
        }
    }]);

    return Level_crj2;
}(Phaser.Scene);

exports.Level_crj2 = Level_crj2;

},{"../Control":1}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var Level_sll1 = function (_Phaser$Scene) {
    _inherits(Level_sll1, _Phaser$Scene);

    function Level_sll1() {
        _classCallCheck(this, Level_sll1);

        var _this = _possibleConstructorReturn(this, (Level_sll1.__proto__ || Object.getPrototypeOf(Level_sll1)).call(this, {
            key: Control_1.Control.Scene.Level6
        }));

        _this.redcanjump = true;
        _this.redjumpcount = 0;
        _this.bluecanjump = true;
        _this.bluejumpcount = 0;
        _this.getRedKey = false;
        _this.getBlueKey = false;
        _this.isVictory = false;
        _this.ppRed1Press = false;
        _this.ppRed2Press = false;
        _this.ppRed3Press = false;
        _this.ppBlue1Press = false;
        _this.ppBlue2Press = false;
        _this.ppBlue3Press = false;
        _this.showRedKey = false;
        _this.showBlueKey = false;
        return _this;
    }

    _createClass(Level_sll1, [{
        key: "init",
        value: function init() {
            this.sound.stopAll();
            this.getBlueKey = false;
            this.getRedKey = false;
            this.isVictory = false;
        }
    }, {
        key: "preload",
        value: function preload() {
            this.load.image("redkey", "asset/RedKey.png");
            this.load.image("bluekey", "asset/BlueKey.png");
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.tilemapTiledJSON('map6', 'asset/tilemaps/maps/Level6.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.spritesheet("PressurePlate", "asset/level_sll/PressurePlate.png", {
                frameWidth: 64,
                frameHeight: 64
            });
            this.anims.create({
                key: "red_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "red_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "red_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "red_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "red_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "red_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [30, 31, 32]
                })
            });
            //blue anim
            this.anims.create({
                key: "blue_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "blue_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [3, 4, 5]
                })
            });
            this.anims.create({
                key: "blue_move_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [24, 25, 26]
                })
            });
            this.anims.create({
                key: "blue_move_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [27, 28, 29]
                })
            });
            this.anims.create({
                key: "blue_jump_left",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [33, 34, 35]
                })
            });
            this.anims.create({
                key: "blue_jump_right",
                frameRate: 5,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [30, 31, 32]
                })
            });
        }
    }, {
        key: "create",
        value: function create() {
            //Pressure Plate
            this.anims.create({
                key: "pressure_plate_activate",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("PressurePlate", {
                    frames: [1]
                })
            });
            this.anims.create({
                key: "pressure_plate_idle",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("PressurePlate", {
                    frames: [0]
                })
            });
            // Play music
            this.bgm = this.sound.add('bgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.bgm.play(musicConfig);
            // Add sound effect
            this.jumpSound = this.sound.add('jump_sound');
            this.keySound = this.sound.add('key_sound');
            this.vicSound = this.sound.add('vic_sound');
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    // Stop music when esc
                    this.bgm.stop();
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("map6");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            this.top = map1.createStaticLayer("Collision", [block, CastleBackground], 0, 0);
            this.top.setDepth(1);
            this.top.setCollisionBetween(0, 5);
            var bot = map1.createStaticLayer("Background", [block, CastleBackground], 0, 0);
            bot.setDepth(0);
            // Define Keys
            this.key_ArrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            this.key_ArrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.key_ArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            // Add knights in to the scene
            this.red = this.physics.add.sprite(90, 280, "redknight1");
            this.blue = this.physics.add.sprite(90, 600, "blueknight");
            // Add Pressure Plate
            this.ppRed1 = this.physics.add.sprite(192, 280, "PressurePlate");
            this.ppRed2 = this.physics.add.sprite(640, 280, "PressurePlate");
            this.ppRed3 = this.physics.add.sprite(1088, 280, "PressurePlate");
            this.ppBlue1 = this.physics.add.sprite(192, 600, "PressurePlate");
            this.ppBlue2 = this.physics.add.sprite(640, 600, "PressurePlate");
            this.ppBlue3 = this.physics.add.sprite(1088, 600, "PressurePlate");
            this.ppRed1.setImmovable(true);
            this.ppRed2.setImmovable(true);
            this.ppRed3.setImmovable(true);
            this.ppBlue1.setImmovable(true);
            this.ppBlue2.setImmovable(true);
            this.ppBlue3.setImmovable(true);
            // Enable collision
            this.red.setCollideWorldBounds(true);
            this.blue.setCollideWorldBounds(true);
            this.ppRed1.setCollideWorldBounds(true);
            this.ppRed2.setCollideWorldBounds(true);
            this.ppRed3.setCollideWorldBounds(true);
            this.ppBlue1.setCollideWorldBounds(true);
            this.ppBlue2.setCollideWorldBounds(true);
            this.ppBlue3.setCollideWorldBounds(true);
            // Place the keys
            //this.redkey = this.add.image(610,170,"redkey");
            //this.redkey.setScale(2)
            //this.bluekey = this.add.image(935,550,"bluekey")
            //this.bluekey.setScale(2);
        }
    }, {
        key: "update",
        value: function update(delta) {
            //Collision Relation 
            this.physics.collide(this.ppRed1, this.top);
            this.physics.collide(this.ppRed2, this.top);
            this.physics.collide(this.ppRed3, this.top);
            this.physics.collide(this.ppBlue1, this.top);
            this.physics.collide(this.ppBlue2, this.top);
            this.physics.collide(this.ppBlue3, this.top);
            this.physics.collide(this.red, this.ppRed1);
            this.physics.collide(this.red, this.ppRed2);
            this.physics.collide(this.red, this.ppRed3);
            this.physics.collide(this.blue, this.ppBlue1);
            this.physics.collide(this.blue, this.ppBlue2);
            this.physics.collide(this.blue, this.ppBlue3);
            this.physics.collide(this.top, this.redkey);
            this.physics.collide(this.top, this.bluekey);
            //Get the keys
            this.physics.overlap(this.red, this.redkey, this.getredkey, null, this);
            this.physics.overlap(this.blue, this.bluekey, this.getbluekey, null, this);
            this.physics.overlap(this.red, this.ppRed1, this.activateR1Plate, null, this);
            this.physics.overlap(this.red, this.ppRed2, this.activateR2Plate, null, this);
            this.physics.overlap(this.red, this.ppRed3, this.activateR3Plate, null, this);
            this.physics.overlap(this.blue, this.ppBlue1, this.activateB1Plate, null, this);
            this.physics.overlap(this.blue, this.ppBlue2, this.activateB2Plate, null, this);
            this.physics.overlap(this.blue, this.ppBlue3, this.activateB3Plate, null, this);
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
            if (this.getBlueKey && this.getRedKey && this.isVictory === false) {
                this.vicSound.play();
                this.bgm.stop();
                this.isVictory = true;
                this.scene.start(Control_1.Control.Scene.Level);
            }
            // Red Control
            // Jump detection
            if (this.redcanjump == false) {
                if (this.redjumpcount == 1 && this.red.body.velocity.y == 10) {
                    this.redcanjump = true;
                    this.redjumpcount = 0;
                } else if (this.red.body.velocity.y == 10) {
                    this.redjumpcount++;
                }
            }
            // Right Left Jump action
            this.physics.collide(this.red, this.top);
            if (this.key_ArrowRight.isDown === true) {
                this.red.setVelocityX(200);
                this.red.play("red_move_right", true);
                if (this.key_ArrowUp.isDown === true) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_right");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_ArrowLeft.isDown) {
                this.red.setVelocityX(-200);
                this.red.play("red_move_left", true);
                if (this.key_ArrowUp.isDown === true) {
                    if (this.redcanjump) {
                        this.red.play("red_jump_left");
                        this.red.setVelocityY(-400);
                        this.redcanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_ArrowUp.isDown) {
                if (this.redcanjump) {
                    this.red.play("red_jump_right");
                    this.red.setVelocityY(-400);
                    this.redcanjump = false;
                    this.jumpSound.play();
                }
            } else {
                this.red.setVelocityX(0);
                this.red.play("red_idle_right", true);
            }
            // Blue Control
            // Jump detection
            if (this.bluecanjump == false) {
                if (this.bluejumpcount == 1 && this.blue.body.velocity.y == 10) {
                    this.bluecanjump = true;
                    this.bluejumpcount = 0;
                } else if (this.blue.body.velocity.y == 10) {
                    this.bluejumpcount++;
                }
            }
            // Right Left Jump action
            this.physics.collide(this.blue, this.top);
            if (this.key_D.isDown === true) {
                this.blue.setVelocityX(200);
                this.blue.play("blue_move_right", true);
                if (this.key_W.isDown === true) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_right");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_A.isDown) {
                this.blue.setVelocityX(-200);
                this.blue.play("blue_move_left", true);
                if (this.key_W.isDown === true) {
                    if (this.bluecanjump) {
                        this.blue.play("blue_jump_left");
                        this.blue.setVelocityY(-400);
                        this.bluecanjump = false;
                        this.jumpSound.play();
                    }
                }
            } else if (this.key_W.isDown) {
                if (this.bluecanjump) {
                    this.blue.play("blue_jump_right");
                    this.blue.setVelocityY(-400);
                    this.bluecanjump = false;
                    this.jumpSound.play();
                }
            } else {
                this.blue.setVelocityX(0);
                this.blue.play("blue_idle_right", true);
            }
            //check if already show keys
            if (this.ppRed1Press) {
                this.blueKeyShow();
            }
            if (this.ppBlue3Press) {
                this.redKeyShow();
            }
        }
    }, {
        key: "getredkey",
        value: function getredkey() {
            this.redkey.destroy();
            if (this.getRedKey === false) {
                this.keySound.play();
                this.getRedKey = true;
            }
        }
    }, {
        key: "getbluekey",
        value: function getbluekey() {
            this.bluekey.destroy();
            if (this.getBlueKey === false) {
                this.keySound.play();
                this.getBlueKey = true;
            }
        }
    }, {
        key: "activateR1Plate",
        value: function activateR1Plate() {
            this.ppRed1.play("pressure_plate_activate");
            if (this.ppRed2Press) {
                this.ppRed1Press = true;
            }
        }
    }, {
        key: "activateR2Plate",
        value: function activateR2Plate() {
            this.ppRed2.play("pressure_plate_activate");
            if (this.ppRed3Press) this.ppRed2Press = true;
        }
    }, {
        key: "activateR3Plate",
        value: function activateR3Plate() {
            this.ppRed3.play("pressure_plate_activate");
            this.ppRed3Press = true;
        }
    }, {
        key: "activateB1Plate",
        value: function activateB1Plate() {
            this.ppBlue1.play("pressure_plate_activate");
            if (this.ppBlue2Press) this.ppBlue1Press = true;
        }
    }, {
        key: "activateB2Plate",
        value: function activateB2Plate() {
            this.ppBlue2.play("pressure_plate_activate");
            this.ppBlue2Press = true;
        }
    }, {
        key: "activateB3Plate",
        value: function activateB3Plate() {
            this.ppBlue3.play("pressure_plate_activate");
            if (this.ppBlue1Press) this.ppBlue3Press = true;
        }
    }, {
        key: "blueKeyShow",
        value: function blueKeyShow() {
            if (this.showBlueKey) return;else {
                this.bluekey = this.physics.add.sprite(384, 600, "bluekey");
                this.bluekey.setScale(2);
                this.bluekey.setCollideWorldBounds(true);
                this.showBlueKey = true;
            }
        }
    }, {
        key: "redKeyShow",
        value: function redKeyShow() {
            if (this.showRedKey) return;else {
                this.redkey = this.physics.add.sprite(384, 280, "redkey");
                this.redkey.setScale(2);
                this.redkey.setCollideWorldBounds(true);
                this.showRedKey = true;
            }
        }
    }]);

    return Level_sll1;
}(Phaser.Scene);

exports.Level_sll1 = Level_sll1;

},{"../Control":1}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var ControlScene = function (_Phaser$Scene) {
    _inherits(ControlScene, _Phaser$Scene);

    function ControlScene() {
        _classCallCheck(this, ControlScene);

        return _possibleConstructorReturn(this, (ControlScene.__proto__ || Object.getPrototypeOf(ControlScene)).call(this, {
            key: Control_1.Control.Scene.Control
        }));
    }

    _createClass(ControlScene, [{
        key: "preload",
        value: function preload() {
            this.anims.create({
                key: "idle_red",
                frameRate: 4,
                repeat: -1,
                frames: this.anims.generateFrameNumbers("redknight1", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "idle_blue",
                frameRate: 4,
                repeat: -1,
                frames: this.anims.generateFrameNumbers("blueknight", {
                    frames: [0, 1, 2]
                })
            });
        }
    }, {
        key: "init",
        value: function init() {}
    }, {
        key: "create",
        value: function create() {
            var _this2 = this;

            var logo = this.add.image(0, 0, "logo").setOrigin(0);
            this.add.text(logo.x + 150, logo.y + 50, "Control", { font: "40px Impact" });
            var back = this.add.text(this.game.renderer.width - 100, 0, "Back", { font: "40px Impact" });
            back.setInteractive();
            back.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Menu);
            });
            this.input.keyboard.on("keyup", function (event) {
                if (event.key == "Escape") {
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var red = this.add.sprite(400, 200, "redknight1");
            var blue = this.add.sprite(800, 200, "blueknight");
            red.setScale(2);
            blue.setScale(2);
            red.play("idle_red");
            blue.play("idle_blue");
            //controls
            var up = this.add.image(400, 400, "up");
            up.setScale(4);
            var right = this.add.image(470, 455, "right");
            right.setScale(4);
            var left = this.add.image(330, 455, "left");
            left.setScale(4);
            var down = this.add.image(400, 455, "down");
            down.setScale(4);
            var w = this.add.image(800, 400, "w");
            w.setScale(4);
            var a = this.add.image(730, 455, "a");
            a.setScale(4);
            var s = this.add.image(800, 455, "s");
            s.setScale(4);
            var d = this.add.image(870, 455, "d");
            d.setScale(4);
        }
    }]);

    return ControlScene;
}(Phaser.Scene);

exports.ControlScene = ControlScene;

},{"../Control":1}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var HelpScene = function (_Phaser$Scene) {
    _inherits(HelpScene, _Phaser$Scene);

    function HelpScene() {
        _classCallCheck(this, HelpScene);

        return _possibleConstructorReturn(this, (HelpScene.__proto__ || Object.getPrototypeOf(HelpScene)).call(this, {
            key: Control_1.Control.Scene.Help
        }));
    }

    _createClass(HelpScene, [{
        key: "init",
        value: function init() {}
    }, {
        key: "create",
        value: function create() {
            var _this2 = this;

            var logo = this.add.image(0, 0, "logo").setOrigin(0);
            this.add.text(logo.x + 150, logo.y + 50, "HELP", { font: "40px Impact" });
            var back = this.add.text(this.game.renderer.width - 100, 0, "Back", { font: "40px Impact" });
            back.setInteractive();
            back.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Menu);
            });
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            this.add.text(100, 200, "                 The demon king had kidnapped the princess of the Magic\n Kingdom and" + "prisoned her inside his evil castle. The king of the \nMagic Kingdom orders the bravest" + "knights, the twin knights, to travel\n to the demon king’s castle to save the princess. Thus," + "the brave twin\n knights start their journey of saving the princess. ", { font: "40px Impact" });
        }
    }]);

    return HelpScene;
}(Phaser.Scene);

exports.HelpScene = HelpScene;

},{"../Control":1}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var LevelScene = function (_Phaser$Scene) {
    _inherits(LevelScene, _Phaser$Scene);

    function LevelScene() {
        _classCallCheck(this, LevelScene);

        return _possibleConstructorReturn(this, (LevelScene.__proto__ || Object.getPrototypeOf(LevelScene)).call(this, {
            key: Control_1.Control.Scene.Level
        }));
    }

    _createClass(LevelScene, [{
        key: "init",
        value: function init() {}
    }, {
        key: "create",
        value: function create() {
            var _this2 = this;

            var logo = this.add.image(0, 0, "logo").setOrigin(0);
            this.add.text(logo.x + 150, logo.y + 50, "Levels", { font: "40px Impact" });
            var back = this.add.text(this.game.renderer.width - 100, 0, "Back", { font: "40px Impact" });
            var level1 = this.add.text(570, 200, "[ Level 1 ]", { font: "40px Impact" });
            var level2 = this.add.text(570, 250, "[ Level 2 ]", { font: "40px Impact" });
            var level3 = this.add.text(570, 300, "[ Level 3 ]", { font: "40px Impact" });
            var level4 = this.add.text(570, 350, "[ Level 4 ]", { font: "40px Impact" });
            var level5 = this.add.text(570, 400, "[ Level 5 ]", { font: "40px Impact" });
            var level6 = this.add.text(570, 450, "[ Level 6 ]", { font: "40px Impact" });
            back.setInteractive();
            back.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Menu);
            });
            level1.setInteractive();
            level1.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level1);
            });
            level2.setInteractive();
            level2.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level2);
            });
            level3.setInteractive();
            level3.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level3);
            });
            level4.setInteractive();
            level4.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level4);
            });
            level5.setInteractive();
            level5.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level5);
            });
            level6.setInteractive();
            level6.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level6);
            });
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
        }
    }]);

    return LevelScene;
}(Phaser.Scene);

exports.LevelScene = LevelScene;

},{"../Control":1}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var LoadingScene = function (_Phaser$Scene) {
    _inherits(LoadingScene, _Phaser$Scene);

    function LoadingScene() {
        _classCallCheck(this, LoadingScene);

        return _possibleConstructorReturn(this, (LoadingScene.__proto__ || Object.getPrototypeOf(LoadingScene)).call(this, {
            key: Control_1.Control.Scene.LOAD
        }));
    }

    _createClass(LoadingScene, [{
        key: "preload",
        value: function preload() {
            var _this2 = this;

            this.load.image("logo", "asset/LOGO.png");
            this.load.image("pointer", "asset/pointer.png");
            this.load.image("splash", "asset/splash_screen.png");
            this.load.image("up", "asset/up.png");
            this.load.image("down", "asset/down.png");
            this.load.image("right", "asset/right.png");
            this.load.image("left", "asset/left.png");
            this.load.image("w", "asset/W.png");
            this.load.image("a", "asset/A.png");
            this.load.image("s", "asset/S.png");
            this.load.image("d", "asset/D.png");
            this.load.audio("menubgm", "asset/audio/bgm_maoudamashii_fantasy08.mp3");
            var loadingbar = this.add.graphics({
                fillStyle: {
                    color: 0xffffff
                }
            });
            this.load.spritesheet("blueknight", "asset/BlueKnight.png", {
                frameHeight: 64,
                frameWidth: 64
            });
            for (var i = 0; i < 100; i++) {
                this.load.spritesheet("redknight" + i, "asset/RedKnight.png", {
                    frameHeight: 64,
                    frameWidth: 64
                });
            }
            this.load.on("progress", function (percent) {
                loadingbar.fillRect(350, _this2.game.renderer.height / 2, 580 * percent, 10);
            });
            this.load.image("fireball", "asset/level_crj/fireball2.png");
            this.load.image("bubble", "asset/level_crj/bubble.png");
            this.load.image("fireballr", "asset/level_crj/fireballr.png");
            this.load.spritesheet("blueknight2", "asset/level_crj/BlueKnight.png", {
                frameWidth: 64,
                frameHeight: 64
            });
            //Load Red Demon
            this.load.spritesheet("reddemon", "asset/level_al/RedDemon.png", {
                frameWidth: 64,
                frameHeight: 64
            });
            //Load Blue Demon
            this.load.spritesheet("bluedemon", "asset/level_al/BlueDemon.png", {
                frameWidth: 64,
                frameHeight: 64
            });
            //Load Dark Demon
            this.load.spritesheet("darkdemon", "asset/level_al/DarkDemon.png", {
                frameWidth: 64,
                frameHeight: 64
            });
        }
    }, {
        key: "create",
        value: function create() {
            this.scene.start(Control_1.Control.Scene.Splash);
        }
    }]);

    return LoadingScene;
}(Phaser.Scene);

exports.LoadingScene = LoadingScene;

},{"../Control":1}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var MenuScene = function (_Phaser$Scene) {
    _inherits(MenuScene, _Phaser$Scene);

    function MenuScene() {
        _classCallCheck(this, MenuScene);

        return _possibleConstructorReturn(this, (MenuScene.__proto__ || Object.getPrototypeOf(MenuScene)).call(this, {
            key: Control_1.Control.Scene.Menu
        }));
    }

    _createClass(MenuScene, [{
        key: "init",
        value: function init() {
            this.sound.stopAll();
        }
    }, {
        key: "preload",
        value: function preload() {
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
        }
    }, {
        key: "create",
        value: function create() {
            var _this2 = this;

            // Play music
            var bgm = this.sound.add('bgm');
            this.menubgm = this.sound.add('menubgm');
            var musicConfig = {
                mute: false,
                volume: 0.4,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: true,
                delay: 0
            };
            this.menubgm.play(musicConfig);
            var logo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 164, "logo");
            logo.setScale(2);
            var playbutton = this.add.text(570, 400, "<Play>", { font: "40px Impact" });
            var levelbutton = this.add.text(570, 450, "<Levels>", { font: "40px Impact" });
            var controlbutton = this.add.text(570, 500, "<Control>", { font: "40px Impact" });
            var helpbutton = this.add.text(570, 550, "<Help>", { font: "40px Impact" });
            var hoversprite = this.add.sprite(100, 100, "pointer");
            hoversprite.setScale(2);
            hoversprite.setVisible(false);
            playbutton.setInteractive();
            playbutton.on("pointerover", function () {
                hoversprite.setVisible(true), hoversprite.x = playbutton.x - 50, hoversprite.y = playbutton.y + 23;
            });
            playbutton.on("pointerout", function () {
                hoversprite.setVisible(false);
            });
            playbutton.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level);
            });
            levelbutton.setInteractive();
            levelbutton.on("pointerover", function () {
                hoversprite.setVisible(true), hoversprite.x = levelbutton.x - 50, hoversprite.y = levelbutton.y + 23;
            });
            levelbutton.on("pointerout", function () {
                hoversprite.setVisible(false);
            });
            levelbutton.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level);
            });
            controlbutton.setInteractive();
            controlbutton.on("pointerover", function () {
                hoversprite.setVisible(true), hoversprite.x = controlbutton.x - 50, hoversprite.y = controlbutton.y + 23;
            });
            controlbutton.on("pointerout", function () {
                hoversprite.setVisible(false);
            });
            controlbutton.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Control);
            });
            helpbutton.setInteractive();
            helpbutton.on("pointerover", function () {
                hoversprite.setVisible(true), hoversprite.x = helpbutton.x - 50, hoversprite.y = helpbutton.y + 23;
            });
            helpbutton.on("pointerout", function () {
                hoversprite.setVisible(false);
            });
            helpbutton.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Help);
            });
        }
    }]);

    return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;

},{"../Control":1}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Control_1 = require("../Control");

var SplashScene = function (_Phaser$Scene) {
    _inherits(SplashScene, _Phaser$Scene);

    function SplashScene() {
        _classCallCheck(this, SplashScene);

        return _possibleConstructorReturn(this, (SplashScene.__proto__ || Object.getPrototypeOf(SplashScene)).call(this, {
            key: Control_1.Control.Scene.Splash
        }));
    }

    _createClass(SplashScene, [{
        key: "init",
        value: function init() {}
    }, {
        key: "create",
        value: function create() {
            var logo = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 64, "logo");
            logo.setScale(2);
            this.add.text(this.game.renderer.width / 2 - 250, this.game.renderer.height / 2 + 100, "<Press any key to continue>", { font: "40px Impact" });
            this.input.keyboard.on("keyup", function () {
                this.scene.start(Control_1.Control.Scene.Menu);
            }, this);
        }
    }]);

    return SplashScene;
}(Phaser.Scene);

exports.SplashScene = SplashScene;

},{"../Control":1}],14:[function(require,module,exports){
"use strict";
/**@type {import("../types/phaser")} */

Object.defineProperty(exports, "__esModule", { value: true });
var LoadingScene_1 = require("./Scene/LoadingScene");
var MenuScene_1 = require("./Scene/MenuScene");
var SplashScene_1 = require("./Scene/SplashScene");
var LevelScene_1 = require("./Scene/LevelScene");
var ControlScene_1 = require("./Scene/ControlScene");
var HelpScene_1 = require("./Scene/HelpScene");
var Level1_1 = require("./Level/Level1");
var Level_crj_1 = require("./Level/Level_crj");
var Level_al1_1 = require("./Level/Level_al1");
var Level_crj2_1 = require("./Level/Level_crj2");
var Level_al2_1 = require("./Level/Level_al2");
var Level_sll1_1 = require("./Level/Level_sll1");
var config = {
    type: Phaser.AUTO,
    scale: {
        //1280×720
        //860x700
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 768
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 }
        }
    },
    scene: [LoadingScene_1.LoadingScene, MenuScene_1.MenuScene, SplashScene_1.SplashScene, LevelScene_1.LevelScene, ControlScene_1.ControlScene, HelpScene_1.HelpScene, Level1_1.Level1, Level_crj_1.Level_crj, Level_al1_1.Level_al1, Level_crj2_1.Level_crj2, Level_al2_1.Level_al2, Level_sll1_1.Level_sll1],
    render: {
        pixelArt: true
    }
};
var game = new Phaser.Game(config);

},{"./Level/Level1":2,"./Level/Level_al1":3,"./Level/Level_al2":4,"./Level/Level_crj":5,"./Level/Level_crj2":6,"./Level/Level_sll1":7,"./Scene/ControlScene":8,"./Scene/HelpScene":9,"./Scene/LevelScene":10,"./Scene/LoadingScene":11,"./Scene/MenuScene":12,"./Scene/SplashScene":13}]},{},[14])

//# sourceMappingURL=demo.js.map
