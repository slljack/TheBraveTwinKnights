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
        Level2: "Level_crj"
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
            console.log(this.redcanjump);
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
            this.load.tilemapTiledJSON('map', 'asset/level_crj/mylevel.json');
            this.load.audio('bgm', 'asset/audio/bgm_maoudamashii_8bit05.mp3');
            this.load.audio('jump_sound', 'asset/sounds/jump.mp3');
            this.load.audio('key_sound', 'asset/sounds/key.mp3');
            this.load.audio('vic_sound', 'asset/sounds/victory.mp3');
            this.load.spritesheet("dapao", "asset/level_crj/dapao.png", {
                frameWidth: 128,
                frameHeight: 64
            });
            this.anims.create({
                key: "dapao_idle_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [3, 5]
                })
            });
            this.anims.create({
                key: "dapao_idle_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [0, 2]
                })
            });
            this.anims.create({
                key: "dapao_move_right",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [0, 1, 2]
                })
            });
            this.anims.create({
                key: "dapao_move_left",
                frameRate: 10,
                frames: this.anims.generateFrameNumbers("dapao", {
                    frames: [3, 4, 5]
                })
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
            this.top = map1.createStaticLayer("collide", [block, CastleBackground], 0, 0);
            this.top.setDepth(1);
            this.top.setCollisionBetween(0, 5);
            var bot = map1.createStaticLayer("background", [block, CastleBackground], 0, 0);
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
            //add dapao to scene
            this.huopao = this.physics.add.sprite(1172, 64, "dapao");
            this.shuipao = this.physics.add.sprite(256, 512, "dapao");
            this.huopao.setCollideWorldBounds(true);
            this.shuipao.setCollideWorldBounds(true);
        }
    }, {
        key: "update",
        value: function update(delta) {
            this.physics.collide(this.top, this.huopao);
            this.physics.collide(this.top, this.shuipao);
            this.huopao.play("dapao_idle_left");
            this.shuipao.play("dapao_idle_right");
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

    return Level_crj;
}(Phaser.Scene);

exports.Level_crj = Level_crj;

},{"../Control":1}],4:[function(require,module,exports){
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

},{"../Control":1}],5:[function(require,module,exports){
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

},{"../Control":1}],6:[function(require,module,exports){
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

},{"../Control":1}],7:[function(require,module,exports){
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

},{"../Control":1}],8:[function(require,module,exports){
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
        value: function init() {}
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

},{"../Control":1}],9:[function(require,module,exports){
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

},{"../Control":1}],10:[function(require,module,exports){
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
    scene: [LoadingScene_1.LoadingScene, MenuScene_1.MenuScene, SplashScene_1.SplashScene, LevelScene_1.LevelScene, ControlScene_1.ControlScene, HelpScene_1.HelpScene, Level1_1.Level1, Level_crj_1.Level_crj],
    render: {
        pixelArt: true
    }
};
var game = new Phaser.Game(config);

},{"./Level/Level1":2,"./Level/Level_crj":3,"./Scene/ControlScene":4,"./Scene/HelpScene":5,"./Scene/LevelScene":6,"./Scene/LoadingScene":7,"./Scene/MenuScene":8,"./Scene/SplashScene":9}]},{},[10])

//# sourceMappingURL=demo.js.map
