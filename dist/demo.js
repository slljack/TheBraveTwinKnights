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
        Control: "Control"
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
        }
    }]);

    return ControlScene;
}(Phaser.Scene);

exports.ControlScene = ControlScene;

},{"../Control":1}],3:[function(require,module,exports){
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
        }
    }]);

    return HelpScene;
}(Phaser.Scene);

exports.HelpScene = HelpScene;

},{"../Control":1}],4:[function(require,module,exports){
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
            back.setInteractive();
            back.on("pointerdown", function () {
                _this2.scene.start(Control_1.Control.Scene.Menu);
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

},{"../Control":1}],5:[function(require,module,exports){
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
            var loadingbar = this.add.graphics({
                fillStyle: {
                    color: 0xffffff
                }
            });
            for (var i = 0; i < 100; i++) {
                this.load.spritesheet("redknight" + i, "asset/RedKnight.png", {
                    frameHeight: 64,
                    frameWidth: 64
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

},{"../Control":1}],6:[function(require,module,exports){
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

},{"../Control":1}],7:[function(require,module,exports){
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

},{"../Control":1}],8:[function(require,module,exports){
"use strict";
/**@type {import("../types/phaser")} */

Object.defineProperty(exports, "__esModule", { value: true });
var LoadingScene_1 = require("./Scene/LoadingScene");
var MenuScene_1 = require("./Scene/MenuScene");
var SplashScene_1 = require("./Scene/SplashScene");
var LevelScene_1 = require("./Scene/LevelScene");
var ControlScene_1 = require("./Scene/ControlScene");
var HelpScene_1 = require("./Scene/HelpScene");
var config = {
    type: Phaser.AUTO,
    width: 860,
    height: 700,
    scene: [LoadingScene_1.LoadingScene, MenuScene_1.MenuScene, SplashScene_1.SplashScene, LevelScene_1.LevelScene, ControlScene_1.ControlScene, HelpScene_1.HelpScene]
};
var game = new Phaser.Game(config);

},{"./Scene/ControlScene":2,"./Scene/HelpScene":3,"./Scene/LevelScene":4,"./Scene/LoadingScene":5,"./Scene/MenuScene":6,"./Scene/SplashScene":7}]},{},[8])

//# sourceMappingURL=demo.js.map
