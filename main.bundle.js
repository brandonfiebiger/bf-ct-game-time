/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Car.js":
/*!********************!*\
  !*** ./lib/Car.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Car = function (_GamePiece) {
  _inherits(Car, _GamePiece);

  function Car(x, y, height, width, color, dx, dxv) {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, x, y, height, width, color, dx, dxv));
  }

  _createClass(Car, [{
    key: 'drawCar',
    value: function drawCar(ctx) {
      var image = document.getElementById('car');
      ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
  }]);

  return Car;
}(GamePiece);

module.exports = Car;

/***/ }),

/***/ "./lib/Frog.js":
/*!*********************!*\
  !*** ./lib/Frog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Frog = function (_GamePiece) {
  _inherits(Frog, _GamePiece);

  function Frog(x, y, height, width, color, dx, dxv, dy, dyv, img) {
    _classCallCheck(this, Frog);

    return _possibleConstructorReturn(this, (Frog.__proto__ || Object.getPrototypeOf(Frog)).call(this, x = 0, y = 685, height = 30, width = 30, color, dx = 1, dxv = 2.5, dy = 1, dyv = 5, img));
  }

  _createClass(Frog, [{
    key: 'drawFrog',
    value: function drawFrog(ctx) {
      var image = document.getElementById('frog');
      ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
  }, {
    key: 'hopLeft',
    value: function hopLeft() {
      this.x > 0 ? this.x -= 28.5 : this.x = 0;
      if (this.x < 0) {
        this.x = 0;
      }
    }
  }, {
    key: 'hopUp',
    value: function hopUp() {
      this.y > 0 ? this.y -= 50 : this.y = 0;
    }
  }, {
    key: 'hopRight',
    value: function hopRight() {
      this.x < 570 ? this.x += 28.5 : this.x = 570;
      if (this.x > 600) {
        this.x = 600 - this.width;
      }
    }
  }, {
    key: 'hopDown',
    value: function hopDown() {
      this.y < 670 ? this.y += 50 : this.y = 670;
    }
  }, {
    key: 'frogDies',
    value: function frogDies(lives) {
      lives.life -= 1;
      this.x = 350;
      this.y = 680;
    }
  }]);

  return Frog;
}(GamePiece);

module.exports = Frog;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frog = __webpack_require__(/*! ./Frog.js */ "./lib/Frog.js");
var frog = new Frog();
var Log = __webpack_require__(/*! ./Log.js */ "./lib/Log.js");
var Car = __webpack_require__(/*! ./Car.js */ "./lib/Car.js");
var Trophy = __webpack_require__(/*! ./Trophy.js */ "./lib/Trophy.js");
var Water = __webpack_require__(/*! ./Water.js */ "./lib/Water.js");
var GreenGrass = __webpack_require__(/*! ./GreenGrass.js */ "./lib/GreenGrass.js");
var Score = __webpack_require__(/*! ./Score.js */ "./lib/Score.js");
var score = new Score();
var Lives = __webpack_require__(/*! ./Lives.js */ "./lib/Lives.js");
var lives = new Lives();

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.frog = new Frog();
    this.water = new Water();
    this.cars = [];
    this.logs = [];
    this.grass = [];
    this.logRows = [];
    this.carRows = [];
    this.frogTrophies = [];
    this.gameOver = false;
    this.trophyCount = 0;
  }

  _createClass(Game, [{
    key: 'drawFrogTrophies',
    value: function drawFrogTrophies(context) {
      this.frogTrophies.forEach(function (trophy) {
        trophy.drawTrophy(context);
      });
    }
  }, {
    key: 'drawLogs',
    value: function drawLogs(context) {
      this.logs.forEach(function (log) {
        log.drawLog(context);
        if (log.y === 125 || log.y === 225 || log.y === 325) {
          log.moveRight();
        } else {
          log.moveLeft();
        }
      });
    }
  }, {
    key: 'drawCars',
    value: function drawCars(context) {
      this.cars.forEach(function (car) {
        car.drawCar(context);
        if (car.y === 430 || car.y === 530 || car.y === 630) {
          car.moveRight();
        } else {
          car.moveLeft();
        }
      });
    }
  }, {
    key: 'drawWater',
    value: function drawWater(ctx) {
      ctx.fillStyle = 'rgb(0, 2, 500)';
      ctx.fillRect(0, 120, 600, 255);
    }
  }, {
    key: 'drawStreet',
    value: function drawStreet(ctx) {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 425, 600, 255);
    }
  }, {
    key: 'drawBackground',
    value: function drawBackground(ctx) {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, 600, 550);
    }
  }, {
    key: 'drawPurpleGrass',
    value: function drawPurpleGrass(ctx) {
      var image = document.getElementById('purple-grass');
      ctx.drawImage(image, 0, 375, 600, 51);
      ctx.drawImage(image, 0, 675, 600, 50);
    }
  }, {
    key: 'drawGreenGrass',
    value: function drawGreenGrass(ctx) {
      var image = document.getElementById('green-grass');
      ctx.drawImage(image, 0, 55, 600, 60);
    }
  }, {
    key: 'addCarRows',
    value: function addCarRows() {
      if (this.cars.length == 5) {
        return;
      }
      var x = -200;
      var y = 380;
      for (var i = 0; i < 5; i++) {
        y += 50;
        var newCar = new Car(x, y, 43, 50, 'rgb(14, 15, 117)', 1, 1.5);
        this.carRows.push(newCar);
        // this.cars.push(newCar)
      }
      this.generateCars();
    }
  }, {
    key: 'generateCars',
    value: function generateCars() {
      var _this = this;

      var _loop = function _loop(i) {
        _this.carRows.forEach(function (car) {
          var newCar = new Car(car.x + car.width * (4 * i), car.y, 43, 50, 'rgb(14, 15, 117)', 1, 1.5);
          _this.cars.push(newCar);
        });
      };

      for (var i = 1; i < 5; i++) {
        _loop(i);
      }
    }
  }, {
    key: 'addLogRows',
    value: function addLogRows() {
      if (this.trophyCount >= 5) {
        return;
      }
      if (this.logs.length == 5) {
        return;
      }
      var x = -200;
      var y = 75;
      for (var i = 0; i < 5; i++) {
        y += 50;
        var newLog = new Log(x, y, 43, 75, 'rgb(148, 90, 48)', 1, 2.5);
        this.logRows.push(newLog);
        this.logs.push(newLog);
      }
      this.generateLogs();
    }
  }, {
    key: 'generateLogs',
    value: function generateLogs() {
      var _this2 = this;

      if (this.trophyCount >= 5) {
        return;
      }

      var _loop2 = function _loop2(i) {
        _this2.logRows.forEach(function (log) {
          var newLog = new Log(log.x + log.width * (2 * i), log.y, 43, 125, 'rgb(148, 90, 48)', 1, 2.5);
          _this2.logs.push(newLog);
        });
      };

      for (var i = 1; i < 3; i++) {
        _loop2(i);
      }
    }

    // addWinArea() {
    //   let x = -105;
    //   for (let i = 0; i < 5; i++) {
    //   this.grass.push(new GreenGrass(x += 125, 77, 45, 50));  
    //   }
    // }

  }, {
    key: 'addWinArea',
    value: function addWinArea() {
      var x = -105;
      for (var i = 0; i < 5; i++) {
        this.grass.push(new GreenGrass(x += 125, 67, 35, 35, 'rgb(255, 3, 0)'));
      }
    }
  }, {
    key: 'carCollision',
    value: function carCollision() {
      var _this3 = this;

      this.cars.forEach(function (car) {
        if (car.isCollidingWith(_this3.frog)) {
          _this3.frog.frogDies(lives);
          score.points -= 20;
        }
      });
    }
  }, {
    key: 'logCollision',
    value: function logCollision() {
      var _this4 = this;

      this.logs.forEach(function (log) {
        if (log.y === 125 || log.y === 225 || log.y === 325) {
          if (log.isCollidingWith(_this4.frog)) {
            _this4.frog.frogLogMoveRight();
          }
        } else {
          if (log.isCollidingWith(_this4.frog)) {
            _this4.frog.frogLogMoveLeft();
          }
        }
      });
    }
  }, {
    key: 'waterCollision',
    value: function waterCollision() {
      var _this5 = this;

      var includesLog = this.logs.find(function (log) {
        return _this5.frog.isCollidingWith(log);
      });
      if (this.frog.isCollidingWith(this.water)) {
        if (this.logs.includes(includesLog)) {
          return;
        } else {
          this.frog.frogDies(lives);
          score.points -= 20;
        }
      }
    }
  }, {
    key: 'grassLanding',
    value: function grassLanding(ctx) {
      var _this6 = this;

      this.grass.forEach(function (grassPatch) {
        if (_this6.frog.isCollidingWith(grassPatch)) {
          _this6.trophyCount++;
          _this6.frogTrophies.push(new Trophy(grassPatch.x += 15, grassPatch.y += 10, 30, 30, 'rgb(0, 0, 255)'));
          _this6.frog.x = 350;
          _this6.frog.y = 680;
          score.points += 200;
          _this6.oneUp();
        }
      });
    }
  }, {
    key: 'drawScore',
    value: function drawScore(ctx) {
      ctx.font = '48px serif';
      ctx.fillStyle = 'rgb(0, 255, 255';
      ctx.fillText('Score: ' + score.points, 10, 50);
    }
  }, {
    key: 'drawLives',
    value: function drawLives(ctx) {
      ctx.font = '48px serif';
      ctx.fillStyle = 'rgb(0, 255, 255';
      ctx.fillText('Lives: ' + lives.life, 400, 50);
    }
  }, {
    key: 'oneUp',
    value: function oneUp() {
      if (score.points >= 1000) {
        lives.life += 1;
      }
    }
  }, {
    key: 'resetGame',
    value: function resetGame() {
      frog.frogDies(lives);
      lives.life = 3;
      score.points = 0;
      for (var i = 0; i < 5; i++) {
        this.frogTrophies.shift();
      }
    }
  }, {
    key: 'checkGameOver',
    value: function checkGameOver() {
      if (lives.life < 1) {
        this.gameOver = true;
      }
    }
  }, {
    key: 'launchNewLevel',
    value: function launchNewLevel() {
      if (this.trophyCount === 5) {
        this.newLevel();
        this.generateNewLevel();
      }
    }
  }, {
    key: 'newLevel',
    value: function newLevel() {
      if (this.trophyCount === 5) {
        this.logs.length = 0;
        this.frogTrophies.length = 0;
        if (this.logs.length == 5) {
          return;
        }
        var x = -200;
        var y = 75;
        for (var i = 0; i < 5; i++) {
          y += 50;
          var newLog = new Log(x, y, 43, 75, 'rgb(148, 90, 48)', 1, 2.5);
          this.logRows.push(newLog);
          this.logs.push(newLog);
        }
        this.generateNewLevel();
      };
    }
  }, {
    key: 'generateNewLevel',
    value: function generateNewLevel() {
      var _this7 = this;

      if (this.trophyCount === 5) {
        var _loop3 = function _loop3(i) {
          _this7.logRows.forEach(function (log) {
            var newLog = new Log(log.x + log.width * (2 * i), log.y, 43, 125, 'rgb(148, 90, 48)', 1, 4.5);
            _this7.logs.push(newLog);
          });
        };

        for (var i = 1; i < 2; i++) {
          _loop3(i);
        }
      }
    }
  }]);

  return Game;
}();

;

module.exports = Game;

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color, dx, dxv) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dxv = dxv;
  }

  _createClass(GamePiece, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      if (this.x < 600) {
        this.x += this.dx * this.dxv;
      } else if (this.x >= 600) {
        this.x = -200;
        // this.x += this.dx * this.dxv;
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      if (this.x > -200) {
        this.x -= this.dx * this.dxv;
      } else if (this.x === -200) {
        this.x = 700;
        this.x -= this.dx * this.dxv;
      }
    }
  }, {
    key: "frogLogMoveRight",
    value: function frogLogMoveRight() {
      if (this.x < 600 - this.width) {
        this.x += this.dx * this.dxv;
      } else if (this.x === 600 - this.width) {
        this.x = 600 - this.width;
      }
    }
  }, {
    key: "frogLogMoveLeft",
    value: function frogLogMoveLeft() {
      if (this.x > 0) {
        this.x -= this.dx * this.dxv;
      } else if (this.x === 0) {
        this.x = 0;
      }
    }
  }, {
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return !(this.x + this.width < object.x || this.y + this.height < object.y || this.x > object.x + object.width || this.y > object.y + object.height);
    }
  }, {
    key: "isNotCollidingWith",
    value: function isNotCollidingWith(object) {
      return this.x + this.width < object.x || this.y + this.height < object.y || this.x > object.x + object.width || this.y > object.y + object.height;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/GreenGrass.js":
/*!***************************!*\
  !*** ./lib/GreenGrass.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var GreenGrass = function (_GamePiece) {
  _inherits(GreenGrass, _GamePiece);

  function GreenGrass(x, y, height, width) {
    _classCallCheck(this, GreenGrass);

    var _this = _possibleConstructorReturn(this, (GreenGrass.__proto__ || Object.getPrototypeOf(GreenGrass)).call(this));

    _this.x = x;
    _this.y = y;
    _this.height = height;
    _this.width = width;
    return _this;
  }

  return GreenGrass;
}(GamePiece);

module.exports = GreenGrass;

/***/ }),

/***/ "./lib/Lives.js":
/*!**********************!*\
  !*** ./lib/Lives.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lives = function Lives() {
  _classCallCheck(this, Lives);

  this.life = 3;
};

;

module.exports = Lives;

/***/ }),

/***/ "./lib/Log.js":
/*!********************!*\
  !*** ./lib/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Log = function (_GamePiece) {
  _inherits(Log, _GamePiece);

  function Log(x, y, height, width, color, dx, dxv) {
    _classCallCheck(this, Log);

    return _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, x, y, height, width, color, dx, dxv));
  }

  _createClass(Log, [{
    key: 'drawLog',
    value: function drawLog(ctx) {
      var image = document.getElementById('log');
      ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
  }]);

  return Log;
}(GamePiece);

module.exports = Log;

/***/ }),

/***/ "./lib/Score.js":
/*!**********************!*\
  !*** ./lib/Score.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function Score() {
  _classCallCheck(this, Score);

  this.points = 0;
};

module.exports = Score;

/***/ }),

/***/ "./lib/Trophy.js":
/*!***********************!*\
  !*** ./lib/Trophy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Trophy = function (_GamePiece) {
  _inherits(Trophy, _GamePiece);

  function Trophy(x, y, height, width) {
    _classCallCheck(this, Trophy);

    var _this = _possibleConstructorReturn(this, (Trophy.__proto__ || Object.getPrototypeOf(Trophy)).call(this));

    _this.x = x;
    _this.y = y;
    _this.height = height;
    _this.width = width;
    return _this;
  }

  _createClass(Trophy, [{
    key: 'drawTrophy',
    value: function drawTrophy(ctx) {
      var image = document.getElementById('frog');
      ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
  }]);

  return Trophy;
}(GamePiece);

module.exports = Trophy;

/***/ }),

/***/ "./lib/Water.js":
/*!**********************!*\
  !*** ./lib/Water.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Water = function (_GamePiece) {
  _inherits(Water, _GamePiece);

  function Water(x, y, height, width, color, dx) {
    _classCallCheck(this, Water);

    return _possibleConstructorReturn(this, (Water.__proto__ || Object.getPrototypeOf(Water)).call(this, x = 0, y = 120, height = 229, width = 600, color = 'rgb(0, 2, 68)', dx = 0));
  }

  return Water;
}(GamePiece);

module.exports = Water;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var game = new Game();

var paused = false;
var gameover = false;

game.addCarRows();
game.addLogRows();
game.addWinArea();
game.newLevel();
game.generateNewLevel();

function animate() {
  game.drawBackground(context);
  game.drawWater(context);
  game.drawStreet(context);
  game.drawPurpleGrass(context);
  game.drawGreenGrass(context);
  game.drawLogs(context);
  game.drawCars(context);
  game.drawScore(context);
  game.drawLives(context);
  game.grassLanding(context);
  game.drawFrogTrophies(context);
  game.frog.drawFrog(context);
}

function pauseText() {
  if (paused) {
    context.fillStyle = 'rgb(0, 255, 0)';
    context.fillText('PAUSED', 220, 410);
  }
}

requestAnimationFrame(function gameLoop() {
  if (paused) {
    pauseText();
  } else if (game.gameOver) {
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, 600, 720);
    context.font = '48px serif';
    context.fillStyle = 'rgb(13, 188, 121)';
    context.fillText('Game Over', 200, 350);
    context.fillStyle = 'rgb(13, 188, 121)';
    context.fillText('Press R to Replay', 140, 400);
  } else {
    game.launchNewLevel();
    game.waterCollision();
    game.carCollision();
    game.logCollision();
    game.checkGameOver();
    context.clearRect(0, 0, canvas.width, canvas.height);
    animate();
  }

  requestAnimationFrame(gameLoop);
});

window.onkeydown = function keyFunctions(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      game.frog.hopLeft();
      break;
    case 38:
      game.frog.hopUp();
      break;
    case 39:
      game.frog.hopRight();
      break;
    case 40:
      game.frog.hopDown();
      break;
    case 82:
      location.reload();
      break;
    case 80:
      paused = !paused;
      pauseText(context);
      break;
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Nhci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvRnJvZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZVBpZWNlLmpzIiwid2VicGFjazovLy8uL2xpYi9HcmVlbkdyYXNzLmpzIiwid2VicGFjazovLy8uL2xpYi9MaXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTG9nLmpzIiwid2VicGFjazovLy8uL2xpYi9TY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvVHJvcGh5LmpzIiwid2VicGFjazovLy8uL2xpYi9XYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiR2FtZVBpZWNlIiwicmVxdWlyZSIsIkNhciIsIngiLCJ5IiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImR4IiwiZHh2IiwiY3R4IiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0ltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkZyb2ciLCJkeSIsImR5diIsImltZyIsImxpdmVzIiwibGlmZSIsImZyb2ciLCJMb2ciLCJUcm9waHkiLCJXYXRlciIsIkdyZWVuR3Jhc3MiLCJTY29yZSIsInNjb3JlIiwiTGl2ZXMiLCJHYW1lIiwid2F0ZXIiLCJjYXJzIiwibG9ncyIsImdyYXNzIiwibG9nUm93cyIsImNhclJvd3MiLCJmcm9nVHJvcGhpZXMiLCJnYW1lT3ZlciIsInRyb3BoeUNvdW50IiwiY29udGV4dCIsImZvckVhY2giLCJ0cm9waHkiLCJkcmF3VHJvcGh5IiwibG9nIiwiZHJhd0xvZyIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwiY2FyIiwiZHJhd0NhciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibGVuZ3RoIiwiaSIsIm5ld0NhciIsInB1c2giLCJnZW5lcmF0ZUNhcnMiLCJuZXdMb2ciLCJnZW5lcmF0ZUxvZ3MiLCJpc0NvbGxpZGluZ1dpdGgiLCJmcm9nRGllcyIsInBvaW50cyIsImZyb2dMb2dNb3ZlUmlnaHQiLCJmcm9nTG9nTW92ZUxlZnQiLCJpbmNsdWRlc0xvZyIsImZpbmQiLCJpbmNsdWRlcyIsImdyYXNzUGF0Y2giLCJvbmVVcCIsImZvbnQiLCJmaWxsVGV4dCIsInNoaWZ0IiwibmV3TGV2ZWwiLCJnZW5lcmF0ZU5ld0xldmVsIiwib2JqZWN0IiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwicGF1c2VkIiwiZ2FtZW92ZXIiLCJhZGRDYXJSb3dzIiwiYWRkTG9nUm93cyIsImFkZFdpbkFyZWEiLCJhbmltYXRlIiwiZHJhd0JhY2tncm91bmQiLCJkcmF3V2F0ZXIiLCJkcmF3U3RyZWV0IiwiZHJhd1B1cnBsZUdyYXNzIiwiZHJhd0dyZWVuR3Jhc3MiLCJkcmF3TG9ncyIsImRyYXdDYXJzIiwiZHJhd1Njb3JlIiwiZHJhd0xpdmVzIiwiZ3Jhc3NMYW5kaW5nIiwiZHJhd0Zyb2dUcm9waGllcyIsImRyYXdGcm9nIiwicGF1c2VUZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUxvb3AiLCJsYXVuY2hOZXdMZXZlbCIsIndhdGVyQ29sbGlzaW9uIiwiY2FyQ29sbGlzaW9uIiwibG9nQ29sbGlzaW9uIiwiY2hlY2tHYW1lT3ZlciIsImNsZWFyUmVjdCIsIndpbmRvdyIsIm9ua2V5ZG93biIsImtleUZ1bmN0aW9ucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtleUNvZGUiLCJob3BMZWZ0IiwiaG9wVXAiLCJob3BSaWdodCIsImhvcERvd24iLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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QUNBVixZQUFROEIsUUFBUixjQUE4QixHQUE5QixFQUFtQyxHQUFuQztBQUNBOUIsWUFBUVUsU0FBUixHQUFvQixtQkFBcEI7QUFDQVYsWUFBUThCLFFBQVIsc0JBQXNDLEdBQXRDLEVBQTJDLEdBQTNDO0FBQ0QsR0FSTSxNQVFBO0FBQ0xRLFNBQUtzQixjQUFMO0FBQ0F0QixTQUFLdUIsY0FBTDtBQUNBdkIsU0FBS3dCLFlBQUw7QUFDQXhCLFNBQUt5QixZQUFMO0FBQ0F6QixTQUFLMEIsYUFBTDtBQUNBaEUsWUFBUWlFLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0I5QixPQUFPdEUsS0FBL0IsRUFBc0NzRSxPQUFPdkUsTUFBN0M7QUFDQWdGO0FBQ0Q7O0FBRUhjLHdCQUFzQkMsUUFBdEI7QUFDRCxDQXRCRDs7QUF3QkFPLE9BQU9DLFNBQVAsR0FBbUIsU0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDMUNBLElBQUVDLGNBQUY7QUFDQSxVQUFRRCxFQUFFRSxPQUFWO0FBQ0EsU0FBSyxFQUFMO0FBQ0VqQyxXQUFLeEQsSUFBTCxDQUFVMEYsT0FBVjtBQUNBO0FBQ0YsU0FBSyxFQUFMO0FBQ0VsQyxXQUFLeEQsSUFBTCxDQUFVMkYsS0FBVjtBQUNBO0FBQ0YsU0FBSyxFQUFMO0FBQ0VuQyxXQUFLeEQsSUFBTCxDQUFVNEYsUUFBVjtBQUNBO0FBQ0YsU0FBSyxFQUFMO0FBQ0VwQyxXQUFLeEQsSUFBTCxDQUFVNkYsT0FBVjtBQUNBO0FBQ0YsU0FBSyxFQUFMO0FBQ0VDLGVBQVNDLE1BQVQ7QUFDQTtBQUNGLFNBQUssRUFBTDtBQUNFdEMsZUFBUyxDQUFDQSxNQUFWO0FBQ0FrQixnQkFBVXpELE9BQVY7QUFDQTtBQW5CRjtBQXFCRCxDQXZCRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5cbmNsYXNzIENhciBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCwgZHh2KSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4LCBkeHYpO1xuICB9XG4gIGRyYXdDYXIoY3R4KSB7XG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcicpO1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcjsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZS5qcycpO1xuXG5jbGFzcyBGcm9nIGV4dGVuZHMgR2FtZVBpZWNlICB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCwgZHh2LCBkeSwgZHl2LCBpbWcpIHtcbiAgICBzdXBlcih4ID0gMCwgeSA9IDY4NSwgaGVpZ2h0ID0gMzAsIHdpZHRoID0gMzAsIGNvbG9yLCBkeCA9IDEsIGR4diA9IDIuNSwgZHkgPSAxLCBkeXYgPSA1LCBpbWcpO1xuICB9XG5cbiAgZHJhd0Zyb2coY3R4KSB7XG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb2cnKTtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgaG9wTGVmdCgpIHtcbiAgICB0aGlzLnggPiAwID8gdGhpcy54IC09IDI4LjU6IHRoaXMueCA9IDA7XG4gICAgaWYgKHRoaXMueCA8IDApIHtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaG9wVXAoKSB7XG4gICAgdGhpcy55ID4gMCA/IHRoaXMueSAtPSA1MDogdGhpcy55ID0gMDtcbiAgfVxuXG4gIGhvcFJpZ2h0KCkge1xuICAgIHRoaXMueCA8IDU3MCA/IHRoaXMueCArPSAyOC41OiB0aGlzLnggPSA1NzA7XG4gICAgaWYgKHRoaXMueCA+IDYwMCkge1xuICAgICAgdGhpcy54ID0gNjAwIC0gdGhpcy53aWR0aDtcbiAgICB9XG4gIH1cblxuICBob3BEb3duKCkge1xuICAgIHRoaXMueSA8IDY3MCA/IHRoaXMueSArPSA1MDogdGhpcy55ID0gNjcwO1xuICB9XG5cbiAgZnJvZ0RpZXMobGl2ZXMpIHtcbiAgICBsaXZlcy5saWZlIC09IDE7XG4gICAgdGhpcy54ID0gMzUwO1xuICAgIHRoaXMueSA9IDY4MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyb2c7IiwiY29uc3QgRnJvZyA9IHJlcXVpcmUoJy4vRnJvZy5qcycpO1xuY29uc3QgZnJvZyA9IG5ldyBGcm9nKCk7XG5jb25zdCBMb2cgPSByZXF1aXJlKCcuL0xvZy5qcycpO1xuY29uc3QgQ2FyID0gcmVxdWlyZSgnLi9DYXIuanMnKTtcbmNvbnN0IFRyb3BoeSA9IHJlcXVpcmUoJy4vVHJvcGh5LmpzJyk7XG5jb25zdCBXYXRlciA9IHJlcXVpcmUoJy4vV2F0ZXIuanMnKTtcbmNvbnN0IEdyZWVuR3Jhc3MgPSByZXF1aXJlKCcuL0dyZWVuR3Jhc3MuanMnKTtcbmNvbnN0IFNjb3JlID0gcmVxdWlyZSgnLi9TY29yZS5qcycpO1xuY29uc3Qgc2NvcmUgPSBuZXcgU2NvcmUoKTtcbmNvbnN0IExpdmVzID0gcmVxdWlyZSgnLi9MaXZlcy5qcycpO1xuY29uc3QgbGl2ZXMgPSBuZXcgTGl2ZXMoKTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnJvZyA9IG5ldyBGcm9nKCk7XG4gICAgdGhpcy53YXRlciA9IG5ldyBXYXRlcigpO1xuICAgIHRoaXMuY2FycyA9IFtdO1xuICAgIHRoaXMubG9ncyA9IFtdO1xuICAgIHRoaXMuZ3Jhc3MgPSBbXTtcbiAgICB0aGlzLmxvZ1Jvd3MgPSBbXTtcbiAgICB0aGlzLmNhclJvd3MgPSBbXTtcbiAgICB0aGlzLmZyb2dUcm9waGllcyA9IFtdO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnRyb3BoeUNvdW50ID0gMDtcbiAgfTtcblxuICBkcmF3RnJvZ1Ryb3BoaWVzKGNvbnRleHQpIHtcbiAgICB0aGlzLmZyb2dUcm9waGllcy5mb3JFYWNoKHRyb3BoeSA9PiB7XG4gICAgICB0cm9waHkuZHJhd1Ryb3BoeShjb250ZXh0KTtcbiAgICB9KVxuICB9XG5cbiAgZHJhd0xvZ3MoY29udGV4dCkge1xuICAgIHRoaXMubG9ncy5mb3JFYWNoKGxvZyA9PiB7XG4gICAgICBsb2cuZHJhd0xvZyhjb250ZXh0KTtcbiAgICAgIGlmIChsb2cueSA9PT0gMTI1IHx8IGxvZy55ID09PSAyMjUgfHwgbG9nLnkgPT09IDMyNSkge1xuICAgICAgICBsb2cubW92ZVJpZ2h0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cubW92ZUxlZnQoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgZHJhd0NhcnMoY29udGV4dCkge1xuICAgIHRoaXMuY2Fycy5mb3JFYWNoKGNhciA9PiB7XG4gICAgICBjYXIuZHJhd0Nhcihjb250ZXh0KTtcbiAgICAgIGlmIChjYXIueSA9PT0gNDMwIHx8IGNhci55ID09PSA1MzAgfHwgY2FyLnkgPT09IDYzMCkge1xuICAgICAgICBjYXIubW92ZVJpZ2h0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXIubW92ZUxlZnQoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIGRyYXdXYXRlcihjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAyLCA1MDApJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMTIwLCA2MDAsIDI1NSk7XG4gIH07XG5cbiAgZHJhd1N0cmVldChjdHgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAwLCAwKSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDQyNSwgNjAwLCAyNTUpO1xuICB9O1xuXG4gIGRyYXdCYWNrZ3JvdW5kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDAsIDApJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgNjAwLCA1NTApO1xuICB9O1xuXG4gIGRyYXdQdXJwbGVHcmFzcyhjdHgpIHtcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVycGxlLWdyYXNzJyk7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMzc1LCA2MDAsIDUxKVxuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDY3NSwgNjAwLCA1MClcbiAgfTtcblxuICBkcmF3R3JlZW5HcmFzcyhjdHgpIHtcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZW4tZ3Jhc3MnKTtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCA1NSwgNjAwLCA2MClcbiAgfTtcblxuICBhZGRDYXJSb3dzKCkge1xuICAgIGlmICh0aGlzLmNhcnMubGVuZ3RoID09IDUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAgIGxldCB4ID0gLTIwMFxuICAgICAgbGV0IHkgPSAzODBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIHkgKz0gNTBcbiAgICAgICAgbGV0IG5ld0NhciA9IG5ldyBDYXIoeCwgeSwgNDMsIDUwLCAncmdiKDE0LCAxNSwgMTE3KScsIDEsIDEuNSlcbiAgICAgICAgdGhpcy5jYXJSb3dzLnB1c2gobmV3Q2FyKVxuICAgICAgICAvLyB0aGlzLmNhcnMucHVzaChuZXdDYXIpXG4gICAgICB9XG4gICAgdGhpcy5nZW5lcmF0ZUNhcnMoKTsgXG4gIH07XG5cbiAgZ2VuZXJhdGVDYXJzKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICB0aGlzLmNhclJvd3MuZm9yRWFjaChjYXIgPT4ge1xuICAgICAgICBsZXQgbmV3Q2FyID0gbmV3IENhcihjYXIueCArIGNhci53aWR0aCAqICg0KmkpLCBjYXIueSwgNDMsIDUwLCAncmdiKDE0LCAxNSwgMTE3KScsIDEsIDEuNSlcbiAgICAgICAgdGhpcy5jYXJzLnB1c2gobmV3Q2FyKVxuICAgICAgfSlcbiAgICB9IFxuICB9O1xuICBcbiAgYWRkTG9nUm93cygpIHtcbiAgICBpZiAodGhpcy50cm9waHlDb3VudCA+PSA1KSB7XG4gICAgICByZXR1cm5cbiAgICB9IFxuICAgIGlmICh0aGlzLmxvZ3MubGVuZ3RoID09IDUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgeCA9IC0yMDBcbiAgICBsZXQgeSA9IDc1XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIHkgKz0gNTBcbiAgICAgIGxldCBuZXdMb2cgPSBuZXcgTG9nKHgsIHksIDQzLCA3NSwgJ3JnYigxNDgsIDkwLCA0OCknLCAxLCAyLjUpXG4gICAgICB0aGlzLmxvZ1Jvd3MucHVzaChuZXdMb2cpXG4gICAgICB0aGlzLmxvZ3MucHVzaChuZXdMb2cpXG4gICAgfVxuICAgIHRoaXMuZ2VuZXJhdGVMb2dzKCk7XG4gIH07XG4gIFxuICBcbiAgZ2VuZXJhdGVMb2dzKCkge1xuICAgIGlmICh0aGlzLnRyb3BoeUNvdW50ID49IDUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgdGhpcy5sb2dSb3dzLmZvckVhY2gobG9nID0+IHtcbiAgICAgICAgbGV0IG5ld0xvZyA9IG5ldyBMb2cobG9nLnggKyBsb2cud2lkdGggKiAoMippKSwgbG9nLnksIDQzLCAxMjUsICdyZ2IoMTQ4LCA5MCwgNDgpJywgMSwgMi41KVxuICAgICAgICB0aGlzLmxvZ3MucHVzaChuZXdMb2cpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBcbiAgLy8gYWRkV2luQXJlYSgpIHtcbiAgLy8gICBsZXQgeCA9IC0xMDU7XG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgLy8gICB0aGlzLmdyYXNzLnB1c2gobmV3IEdyZWVuR3Jhc3MoeCArPSAxMjUsIDc3LCA0NSwgNTApKTsgIFxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGFkZFdpbkFyZWEoKSB7XG4gICAgbGV0IHggPSAtMTA1O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgdGhpcy5ncmFzcy5wdXNoKG5ldyBHcmVlbkdyYXNzKHggKz0gMTI1LCA2NywgMzUsIDM1LCAncmdiKDI1NSwgMywgMCknKSk7ICBcbiAgICB9XG4gIH1cblxuICBjYXJDb2xsaXNpb24oKSB7XG4gIHRoaXMuY2Fycy5mb3JFYWNoKGNhciA9PiB7XG4gICAgICBpZiAoY2FyLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZyb2cpKSB7XG4gICAgICAgIHRoaXMuZnJvZy5mcm9nRGllcyhsaXZlcyk7XG4gICAgICAgIHNjb3JlLnBvaW50cyAtPSAyMFxuICAgICAgfSBcbiAgICB9KVxuICB9O1xuICBcbiAgbG9nQ29sbGlzaW9uKCkge1xuICAgIHRoaXMubG9ncy5mb3JFYWNoKGxvZyA9PiB7XG4gICAgICBpZiAobG9nLnkgPT09IDEyNSB8fCBsb2cueSA9PT0gMjI1IHx8IGxvZy55ID09PSAzMjUpIHtcbiAgICAgICAgaWYgKGxvZy5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcm9nKSkge1xuICAgICAgICAgIHRoaXMuZnJvZy5mcm9nTG9nTW92ZVJpZ2h0KCk7XG4gICAgICAgIH0gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobG9nLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZyb2cpKSB7XG4gICAgICAgICAgdGhpcy5mcm9nLmZyb2dMb2dNb3ZlTGVmdCgpO1xuICAgICAgICB9XG4gICAgfX0pXG4gIH07XG4gICAgICBcbiAgd2F0ZXJDb2xsaXNpb24oKSB7XG4gICAgdmFyIGluY2x1ZGVzTG9nID0gdGhpcy5sb2dzLmZpbmQoKGxvZykgPT4gdGhpcy5mcm9nLmlzQ29sbGlkaW5nV2l0aChsb2cpKSAgICAgICAgXG4gICAgaWYodGhpcy5mcm9nLmlzQ29sbGlkaW5nV2l0aCh0aGlzLndhdGVyKSkge1xuICAgICAgaWYgKHRoaXMubG9ncy5pbmNsdWRlcyhpbmNsdWRlc0xvZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyb2cuZnJvZ0RpZXMobGl2ZXMpO1xuICAgICAgICBzY29yZS5wb2ludHMgLT0gMjA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGdyYXNzTGFuZGluZyhjdHgpIHtcbiAgICB0aGlzLmdyYXNzLmZvckVhY2goZ3Jhc3NQYXRjaCA9PiB7XG4gICAgICBpZiAodGhpcy5mcm9nLmlzQ29sbGlkaW5nV2l0aChncmFzc1BhdGNoKSkge1xuICAgICAgICAgIHRoaXMudHJvcGh5Q291bnQrK1xuICAgICAgICAgIHRoaXMuZnJvZ1Ryb3BoaWVzLnB1c2gobmV3IFRyb3BoeShncmFzc1BhdGNoLnggKz0gMTUsIGdyYXNzUGF0Y2gueSArPSAxMCwgMzAsIDMwLCAncmdiKDAsIDAsIDI1NSknKSk7XG4gICAgICAgICAgdGhpcy5mcm9nLnggPSAzNTA7XG4gICAgICAgICAgdGhpcy5mcm9nLnkgPSA2ODA7XG4gICAgICAgICAgc2NvcmUucG9pbnRzICs9IDIwMDtcbiAgICAgICAgICB0aGlzLm9uZVVwKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gJzQ4cHggc2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAgJ3JnYigwLCAyNTUsIDI1NSdcbiAgICBjdHguZmlsbFRleHQoYFNjb3JlOiAke3Njb3JlLnBvaW50c31gLCAxMCwgNTApO1xuICB9XG5cbiAgZHJhd0xpdmVzKGN0eCkge1xuICAgIGN0eC5mb250ID0gJzQ4cHggc2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAgJ3JnYigwLCAyNTUsIDI1NSdcbiAgICBjdHguZmlsbFRleHQoYExpdmVzOiAke2xpdmVzLmxpZmV9YCwgNDAwLCA1MCwpO1xuICB9O1xuXG4gIG9uZVVwKCkge1xuICAgIGlmIChzY29yZS5wb2ludHMgPj0gMTAwMCkge1xuICAgICAgbGl2ZXMubGlmZSArPSAxO1xuICAgIH1cbiAgfTtcblxuICByZXNldEdhbWUoKSB7XG4gICAgZnJvZy5mcm9nRGllcyhsaXZlcyk7XG4gICAgbGl2ZXMubGlmZSA9IDM7XG4gICAgc2NvcmUucG9pbnRzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICB0aGlzLmZyb2dUcm9waGllcy5zaGlmdCgpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja0dhbWVPdmVyKCkge1xuICAgIGlmIChsaXZlcy5saWZlIDwgMSkge1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbGF1bmNoTmV3TGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMudHJvcGh5Q291bnQgPT09IDUpIHtcbiAgICAgIHRoaXMubmV3TGV2ZWwoKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVOZXdMZXZlbCgpO1xuICAgIH1cbiAgfVxuXG5cbiAgbmV3TGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMudHJvcGh5Q291bnQgPT09IDUpIHtcbiAgICAgIHRoaXMubG9ncy5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5mcm9nVHJvcGhpZXMubGVuZ3RoID0gMDtcbiAgICAgIGlmICh0aGlzLmxvZ3MubGVuZ3RoID09IDUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAgbGV0IHggPSAtMjAwXG4gICAgbGV0IHkgPSA3NVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICB5ICs9IDUwXG4gICAgICBsZXQgbmV3TG9nID0gbmV3IExvZyh4LCB5LCA0MywgNzUsICdyZ2IoMTQ4LCA5MCwgNDgpJywgMSwgMi41KVxuICAgICAgdGhpcy5sb2dSb3dzLnB1c2gobmV3TG9nKVxuICAgICAgdGhpcy5sb2dzLnB1c2gobmV3TG9nKVxuICAgIH1cbiAgICB0aGlzLmdlbmVyYXRlTmV3TGV2ZWwoKTtcbiAgfTtcblxufTtcbmdlbmVyYXRlTmV3TGV2ZWwoKSB7XG4gIGlmICh0aGlzLnRyb3BoeUNvdW50ID09PSA1KSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICB0aGlzLmxvZ1Jvd3MuZm9yRWFjaChsb2cgPT4ge1xuICAgICAgICBsZXQgbmV3TG9nID0gbmV3IExvZyhsb2cueCArIGxvZy53aWR0aCAqICgyKmkpLCBsb2cueSwgNDMsIDEyNSwgJ3JnYigxNDgsIDkwLCA0OCknLCAxLCA0LjUpXG4gICAgICAgIHRoaXMubG9ncy5wdXNoKG5ld0xvZylcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG59O1xuICBcbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgsIGR4dikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR4diA9IGR4djtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcbiAgICBcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgbW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnggPCA2MDApIHtcbiAgICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgfSBlbHNlIGlmICh0aGlzLnggPj0gNjAwKSB7XG4gICAgICB0aGlzLnggPSAtMjAwO1xuICAgICAgLy8gdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB9XG4gIH1cblxuICBtb3ZlTGVmdCgpIHtcbiAgICBpZiAodGhpcy54ID4gLTIwMCkge1xuICAgICAgdGhpcy54IC09IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA9PT0gLTIwMCkge1xuICAgICAgdGhpcy54ID0gNzAwO1xuICAgICAgdGhpcy54IC09IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB9XG4gIH1cblxuICBmcm9nTG9nTW92ZVJpZ2h0KCkge1xuICAgIGlmICh0aGlzLnggPCAoNjAwIC0gdGhpcy53aWR0aCkpIHtcbiAgICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgfSBlbHNlIGlmICh0aGlzLnggPT09ICg2MDAgLSB0aGlzLndpZHRoKSkge1xuICAgICAgdGhpcy54ID0gKDYwMCAtIHRoaXMud2lkdGgpO1xuICAgIH1cbiAgfVxuICBmcm9nTG9nTW92ZUxlZnQoKSB7XG4gICAgaWYgKHRoaXMueCA+IDApIHtcbiAgICAgIHRoaXMueCAtPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgfSBlbHNlIGlmICh0aGlzLnggPT09IDApIHtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAhKFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA8IG9iamVjdC54IHx8XG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8IG9iamVjdC55IHx8XG4gICAgICB0aGlzLnggPiBvYmplY3QueCArIG9iamVjdC53aWR0aCB8fCBcbiAgICAgIHRoaXMueSA+IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodFxuICAgICk7XG4gIH1cblxuICBpc05vdENvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPCBvYmplY3QueCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPCBvYmplY3QueSB8fFxuICAgICAgdGhpcy54ID4gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggfHwgXG4gICAgICB0aGlzLnkgPiBvYmplY3QueSArIG9iamVjdC5oZWlnaHRcbiAgICApO1xuICB9XG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbmNsYXNzIEdyZWVuR3Jhc3MgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gR3JlZW5HcmFzczsiLCJjbGFzcyBMaXZlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlmZSA9IDM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGl2ZXM7XG5cbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlLmpzJyk7XG5cbmNsYXNzIExvZyBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBkeCwgZHh2KSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGR4LCBkeHYpO1xuICB9XG5cbiAgZHJhd0xvZyhjdHgpIHtcbiAgbGV0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZycpO1xuICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nOyIsImNsYXNzIFNjb3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wb2ludHMgPSAwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NvcmU7IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxuY2xhc3MgVHJvcGh5IGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxuXG4gIGRyYXdUcm9waHkoY3R4KSB7XG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zyb2cnKTtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gVHJvcGh5O1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxuY2xhc3MgV2F0ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpIHtcbiAgICBzdXBlcih4ID0gMCwgeSA9IDEyMCwgaGVpZ2h0ID0gMjI5LCB3aWR0aCA9IDYwMCwgY29sb3IgPSAncmdiKDAsIDIsIDY4KScsIGR4ID0gMCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYXRlcjsiLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbnZhciBwYXVzZWQgPSBmYWxzZTtcbnZhciBnYW1lb3ZlciA9IGZhbHNlO1xuXG5nYW1lLmFkZENhclJvd3MoKTtcbmdhbWUuYWRkTG9nUm93cygpO1xuZ2FtZS5hZGRXaW5BcmVhKCk7XG5nYW1lLm5ld0xldmVsKCk7XG5nYW1lLmdlbmVyYXRlTmV3TGV2ZWwoKTtcblxuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBnYW1lLmRyYXdCYWNrZ3JvdW5kKGNvbnRleHQpO1xuICBnYW1lLmRyYXdXYXRlcihjb250ZXh0KTtcbiAgZ2FtZS5kcmF3U3RyZWV0KGNvbnRleHQpO1xuICBnYW1lLmRyYXdQdXJwbGVHcmFzcyhjb250ZXh0KTtcbiAgZ2FtZS5kcmF3R3JlZW5HcmFzcyhjb250ZXh0KTtcbiAgZ2FtZS5kcmF3TG9ncyhjb250ZXh0KTtcbiAgZ2FtZS5kcmF3Q2Fycyhjb250ZXh0KTtcbiAgZ2FtZS5kcmF3U2NvcmUoY29udGV4dCk7XG4gIGdhbWUuZHJhd0xpdmVzKGNvbnRleHQpO1xuICBnYW1lLmdyYXNzTGFuZGluZyhjb250ZXh0KTtcbiAgZ2FtZS5kcmF3RnJvZ1Ryb3BoaWVzKGNvbnRleHQpO1xuICBnYW1lLmZyb2cuZHJhd0Zyb2coY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHBhdXNlVGV4dCgpIHtcbiAgaWYgKHBhdXNlZCkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYigwLCAyNTUsIDApJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KGBQQVVTRURgLCAyMjAsIDQxMCk7XG4gIH1cbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGlmIChwYXVzZWQpIHtcbiAgICAgIHBhdXNlVGV4dCgpO1xuICAgIH0gZWxzZSBpZiAoZ2FtZS5nYW1lT3Zlcikge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiKDAsIDAsIDApJztcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QgKDAsIDAsIDYwMCwgNzIwKTtcbiAgICAgIGNvbnRleHQuZm9udCA9ICc0OHB4IHNlcmlmJztcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYigxMywgMTg4LCAxMjEpJztcbiAgICAgIGNvbnRleHQuZmlsbFRleHQoYEdhbWUgT3ZlcmAsIDIwMCwgMzUwKTtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYigxMywgMTg4LCAxMjEpJztcbiAgICAgIGNvbnRleHQuZmlsbFRleHQoYFByZXNzIFIgdG8gUmVwbGF5YCwgMTQwLCA0MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lLmxhdW5jaE5ld0xldmVsKCk7XG4gICAgICBnYW1lLndhdGVyQ29sbGlzaW9uKCk7XG4gICAgICBnYW1lLmNhckNvbGxpc2lvbigpO1xuICAgICAgZ2FtZS5sb2dDb2xsaXNpb24oKTtcbiAgICAgIGdhbWUuY2hlY2tHYW1lT3ZlcigpO1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGFuaW1hdGUoKTtcbiAgICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn0pO1xuXG53aW5kb3cub25rZXlkb3duID0gZnVuY3Rpb24ga2V5RnVuY3Rpb25zKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICBjYXNlIDM3OlxuICAgIGdhbWUuZnJvZy5ob3BMZWZ0KCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgMzg6XG4gICAgZ2FtZS5mcm9nLmhvcFVwKCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgMzk6XG4gICAgZ2FtZS5mcm9nLmhvcFJpZ2h0KCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgNDA6XG4gICAgZ2FtZS5mcm9nLmhvcERvd24oKTtcbiAgICBicmVhaztcbiAgY2FzZSA4MjpcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBicmVhaztcbiAgY2FzZSA4MDpcbiAgICBwYXVzZWQgPSAhcGF1c2VkO1xuICAgIHBhdXNlVGV4dChjb250ZXh0KTtcbiAgICBicmVhaztcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=