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
        Level1: "Level1"
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

        return _possibleConstructorReturn(this, (Level1.__proto__ || Object.getPrototypeOf(Level1)).call(this, {
            key: Control_1.Control.Scene.Level1
        }));
    }

    _createClass(Level1, [{
        key: "init",
        value: function init() {}
    }, {
        key: "preload",
        value: function preload() {
            this.load.image('CastleBlock', 'asset/tilemaps/tiles/CastleBlock.png');
            this.load.image('CastleBackground', 'asset/tilemaps/tiles/CastleBackground.png');
            this.load.tilemapTiledJSON('map', 'asset/tilemaps/maps/LevelMap1.json');
            this.load.image('player', 'asset/TestPlayer.png');
        }
    }, {
        key: "create",
        value: function create() {
            this.input.keyboard.on("keyup", function (e) {
                if (e.key == "Escape") {
                    this.scene.start(Control_1.Control.Scene.Menu);
                }
            }, this);
            var map1 = this.add.tilemap("map");
            var block = map1.addTilesetImage("CastleBlock", "CastleBlock");
            var CastleBackground = map1.addTilesetImage("CastleBackground", "CastleBackground");
            var top = map1.createStaticLayer("Collision", [block, CastleBackground], 0, 0);
            top.setDepth(1);
            var bot = map1.createStaticLayer("Background", [block, CastleBackground], 0, 0);
            bot.setDepth(0);
        }
    }, {
        key: "update",
        value: function update() {}
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

var ControlScene = function (_Phaser$Scene) {
    _inherits(ControlScene, _Phaser$Scene);

    function ControlScene() {
        _classCallCheck(this, ControlScene);

        return _possibleConstructorReturn(this, (ControlScene.__proto__ || Object.getPrototypeOf(ControlScene)).call(this, {
            key: Control_1.Control.Scene.Control
        }));
    }

    _createClass(ControlScene, [{
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
            this.add.sprite(200, 200, "redknight1");
            this.add.sprite(600, 200, "blueknight");
            //controls
            var up = this.add.image(200, 400, "up");
            up.setScale(4);
            var right = this.add.image(270, 455, "right");
            right.setScale(4);
            var left = this.add.image(130, 455, "left");
            left.setScale(4);
            var down = this.add.image(200, 455, "down");
            down.setScale(4);
            var w = this.add.image(600, 400, "w");
            w.setScale(4);
            var a = this.add.image(530, 455, "a");
            a.setScale(4);
            var s = this.add.image(600, 455, "s");
            s.setScale(4);
            var d = this.add.image(670, 455, "d");
            d.setScale(4);
        }
    }]);

    return ControlScene;
}(Phaser.Scene);

exports.ControlScene = ControlScene;

},{"../Control":1}],4:[function(require,module,exports){
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
            this.add.text(100, 200, "                 The demon king had kidnapped the princess of the Magic Kingdom and \n" + "prisoned her inside his evil castle. The king of the Magic Kingdom orders the bravest\n" + "knights, the twin knights, to travel to the demon king’s castle to save the princess. Thus,\n" + "the brave twin knights start their journey of saving the princess. ", { font: "20px Impact" });
        }
    }]);

    return HelpScene;
}(Phaser.Scene);

exports.HelpScene = HelpScene;

},{"../Control":1}],5:[function(require,module,exports){
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
            var level1 = this.add.text(360, 200, "[ Level 1 ]", { font: "40px Impact" });
            back.setInteractive();
            back.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Menu);
            });
            level1.setInteractive();
            level1.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Level1);
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

},{"../Control":1}],6:[function(require,module,exports){
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
                frameHeight: 128,
                frameWidth: 128
            });
            for (var i = 0; i < 100; i++) {
                this.load.spritesheet("redknight" + i, "asset/RedKnight.png", {
                    frameHeight: 128,
                    frameWidth: 128
                });
            }
            this.load.on("progress", function (percent) {
                loadingbar.fillRect(330, _this2.game.renderer.height / 2, 200 * percent, 10);
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

},{"../Control":1}],7:[function(require,module,exports){
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
        key: "create",
        value: function create() {
            var _this2 = this;

            this.add.image(420, 200, "logo");
            var playbutton = this.add.text(360, 300, "<Play>", { font: "40px Impact" });
            var levelbutton = this.add.text(360, 350, "<Levels>", { font: "40px Impact" });
            var controlbutton = this.add.text(360, 400, "<Control>", { font: "40px Impact" });
            var helpbutton = this.add.text(360, 450, "<Help>", { font: "40px Impact" });
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

},{"../Control":1}],8:[function(require,module,exports){
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
            this.add.image(420, 300, "logo");
            this.add.text(300, 500, "<Press any key to continue>", { font: "20px Impact" });
            this.input.keyboard.on("keyup", function () {
                this.scene.start(Control_1.Control.Scene.Menu);
            }, this);
        }
    }]);

    return SplashScene;
}(Phaser.Scene);

exports.SplashScene = SplashScene;

},{"../Control":1}],9:[function(require,module,exports){
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
var config = {
    type: Phaser.AUTO,
    scale: {
        //1280×720
        //860x700
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 }
        }
    },
    scene: [LoadingScene_1.LoadingScene, MenuScene_1.MenuScene, SplashScene_1.SplashScene, LevelScene_1.LevelScene, ControlScene_1.ControlScene, HelpScene_1.HelpScene, Level1_1.Level1],
    render: {
        pixelArt: true
    }
};
var game = new Phaser.Game(config);

},{"./Level/Level1":2,"./Scene/ControlScene":3,"./Scene/HelpScene":4,"./Scene/LevelScene":5,"./Scene/LoadingScene":6,"./Scene/MenuScene":7,"./Scene/SplashScene":8}]},{},[9])

//# sourceMappingURL=demo.js.map
