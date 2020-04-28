// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/Control.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
},{}],"src/Scene/LoadingScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Control_1 = require("../Control");

var LoadingScene =
/** @class */
function (_super) {
  __extends(LoadingScene, _super);

  function LoadingScene() {
    return _super.call(this, {
      key: Control_1.Control.Scene.LOAD
    }) || this;
  }

  LoadingScene.prototype.preload = function () {
    var _this = this;

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
      loadingbar.fillRect(330, _this.game.renderer.height / 2, 200 * percent, 10);
    });
  };

  LoadingScene.prototype.create = function () {
    this.scene.start(Control_1.Control.Scene.Splash);
  };

  return LoadingScene;
}(Phaser.Scene);

exports.LoadingScene = LoadingScene;
},{"../Control":"src/Control.ts"}],"src/Scene/MenuScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Control_1 = require("../Control");

var MenuScene =
/** @class */
function (_super) {
  __extends(MenuScene, _super);

  function MenuScene() {
    return _super.call(this, {
      key: Control_1.Control.Scene.Menu
    }) || this;
  }

  MenuScene.prototype.init = function () {};

  MenuScene.prototype.create = function () {
    var _this = this;

    this.add.image(420, 200, "logo");
    var playbutton = this.add.text(360, 300, "<Play>", {
      font: "40px Impact"
    });
    var levelbutton = this.add.text(360, 350, "<Levels>", {
      font: "40px Impact"
    });
    var controlbutton = this.add.text(360, 400, "<Control>", {
      font: "40px Impact"
    });
    var helpbutton = this.add.text(360, 450, "<Help>", {
      font: "40px Impact"
    });
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
      _this.scene.start(Control_1.Control.Scene.Level);
    });
    controlbutton.setInteractive();
    controlbutton.on("pointerover", function () {
      hoversprite.setVisible(true), hoversprite.x = controlbutton.x - 50, hoversprite.y = controlbutton.y + 23;
    });
    controlbutton.on("pointerout", function () {
      hoversprite.setVisible(false);
    });
    controlbutton.on("pointerdown", function () {
      _this.scene.start(Control_1.Control.Scene.Control);
    });
    helpbutton.setInteractive();
    helpbutton.on("pointerover", function () {
      hoversprite.setVisible(true), hoversprite.x = helpbutton.x - 50, hoversprite.y = helpbutton.y + 23;
    });
    helpbutton.on("pointerout", function () {
      hoversprite.setVisible(false);
    });
    helpbutton.on("pointerdown", function () {
      _this.scene.start(Control_1.Control.Scene.Help);
    });
  };

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../Control":"src/Control.ts"}],"src/Scene/SplashScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Control_1 = require("../Control");

var SplashScene =
/** @class */
function (_super) {
  __extends(SplashScene, _super);

  function SplashScene() {
    return _super.call(this, {
      key: Control_1.Control.Scene.Splash
    }) || this;
  }

  SplashScene.prototype.init = function () {};

  SplashScene.prototype.create = function () {
    this.add.image(420, 300, "logo");
    this.add.text(300, 500, "<Press any key to continue>", {
      font: "20px Impact"
    });
    this.input.keyboard.on("keyup", function (e) {
      this.scene.start(Control_1.Control.Scene.Menu);
    }, this);
  };

  return SplashScene;
}(Phaser.Scene);

exports.SplashScene = SplashScene;
},{"../Control":"src/Control.ts"}],"src/Scene/LevelScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Control_1 = require("../Control");

var LevelScene =
/** @class */
function (_super) {
  __extends(LevelScene, _super);

  function LevelScene() {
    return _super.call(this, {
      key: Control_1.Control.Scene.Level
    }) || this;
  }

  LevelScene.prototype.init = function () {};

  LevelScene.prototype.create = function () {
    var _this = this;

    var logo = this.add.image(0, 0, "logo").setOrigin(0);
    this.add.text(logo.x + 150, logo.y + 50, "Levels", {
      font: "40px Impact"
    });
    var back = this.add.text(this.game.renderer.width - 100, 0, "Back", {
      font: "40px Impact"
    });
    back.setInteractive();
    back.on("pointerdown", function () {
      _this.scene.start(Control_1.Control.Scene.Menu);
    });
    this.input.keyboard.on("keyup", function (e) {
      if (e.key == "Escape") {
        this.scene.start(Control_1.Control.Scene.Menu);
      }
    }, this);
  };

  return LevelScene;
}(Phaser.Scene);

exports.LevelScene = LevelScene;
},{"../Control":"src/Control.ts"}],"src/Scene/ControlScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Control_1 = require("../Control");

var ControlScene =
/** @class */
function (_super) {
  __extends(ControlScene, _super);

  function ControlScene() {
    return _super.call(this, {
      key: Control_1.Control.Scene.Control
    }) || this;
  }

  ControlScene.prototype.init = function () {};

  ControlScene.prototype.create = function () {
    var _this = this;

    var logo = this.add.image(0, 0, "logo").setOrigin(0);
    this.add.text(logo.x + 150, logo.y + 50, "Control", {
      font: "40px Impact"
    });
    var back = this.add.text(this.game.renderer.width - 100, 0, "Back", {
      font: "40px Impact"
    });
    back.setInteractive();
    back.on("pointerdown", function () {
      _this.scene.start(Control_1.Control.Scene.Menu);
    });
    this.input.keyboard.on("keyup", function (e) {
      if (e.key == "Escape") {
        this.scene.start(Control_1.Control.Scene.Menu);
      }
    }, this);
  };

  return ControlScene;
}(Phaser.Scene);

exports.ControlScene = ControlScene;
},{"../Control":"src/Control.ts"}],"src/Scene/HelpScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Control_1 = require("../Control");

var HelpScene =
/** @class */
function (_super) {
  __extends(HelpScene, _super);

  function HelpScene() {
    return _super.call(this, {
      key: Control_1.Control.Scene.Help
    }) || this;
  }

  HelpScene.prototype.init = function () {};

  HelpScene.prototype.create = function () {
    var _this = this;

    var logo = this.add.image(0, 0, "logo").setOrigin(0);
    this.add.text(logo.x + 150, logo.y + 50, "HELP", {
      font: "40px Impact"
    });
    var back = this.add.text(this.game.renderer.width - 100, 0, "Back", {
      font: "40px Impact"
    });
    back.setInteractive();
    back.on("pointerdown", function () {
      _this.scene.start(Control_1.Control.Scene.Menu);
    });
    this.input.keyboard.on("keyup", function (e) {
      if (e.key == "Escape") {
        this.scene.start(Control_1.Control.Scene.Menu);
      }
    }, this);
  };

  return HelpScene;
}(Phaser.Scene);

exports.HelpScene = HelpScene;
},{"../Control":"src/Control.ts"}],"src/app.ts":[function(require,module,exports) {
"use strict";
/**@type {import("../types/phaser")} */

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
},{"./Scene/LoadingScene":"src/Scene/LoadingScene.ts","./Scene/MenuScene":"src/Scene/MenuScene.ts","./Scene/SplashScene":"src/Scene/SplashScene.ts","./Scene/LevelScene":"src/Scene/LevelScene.ts","./Scene/ControlScene":"src/Scene/ControlScene.ts","./Scene/HelpScene":"src/Scene/HelpScene.ts"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50884" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app.ts"], null)
//# sourceMappingURL=/app.5cec07dd.js.map