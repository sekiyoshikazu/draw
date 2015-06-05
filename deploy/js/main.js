/// <reference path="../../typescript.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../jquery.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../greensock.d.ts" />
/// <reference path="../../createjs/createjs/createjs.d.ts" />
///
/// <reference path="../../classes/core/Main.ts" />
/// <reference path="../../classes/display/PlayerCharacter.ts" />
///

//
// ==================== BG class ==================== 
//
var BG = (function (_super) {
    __extends(BG, _super);
    //
    // ---------- constructor ---------- 
    //
    function BG(_img, _baseWidth, _id) {
        if (_baseWidth === void 0) { _baseWidth = 2400; }
        if (_id === void 0) { _id = "bgImg"; }
        _super.call(this, _img);
        this._baseWidth = _baseWidth;
        this._scrollMax = Main.STAGE_WIDTH - _baseWidth;
    }
    Object.defineProperty(BG.prototype, "scrollMax", {
        //
        // ---------- methods ---------- 
        //
        //
        // ---------- getter/setter ---------- 
        //
        get: function () {
            return this._scrollMax;
        },
        set: function (val) {
            this._scrollMax = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BG.prototype, "baseWidth", {
        get: function () {
            return this._baseWidth;
        },
        set: function (val) {
            this._baseWidth = val;
        },
        enumerable: true,
        configurable: true
    });
    //
    // ---------- eventHandlers ---------- 
    //
    BG.prototype._onAdded = function (e) {
        console.log("****************", e.type, e.target);
    };
    return BG;
})(createjs.Bitmap);
//# sourceMappingURL=BG.js.map
/// <reference path="../../typescript.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../jquery.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../greensock.d.ts" />
/// <reference path="../../createjs/createjs/createjs.d.ts" />
///
/// <reference path="../../classes/core/Main.ts" />
/// <reference path="../../classes/display/CharacterBase.ts" />
/// <reference path="../../classes/display/PlayerCharacter.ts" />
///
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//
// ==================== BulletBase class ==================== 
//
var BulletBase = (function (_super) {
    __extends(BulletBase, _super);
    //
    // ---------- constructor ---------- 
    //
    function BulletBase() {
        _super.call(this);
        //
        // ---------- properties ---------- 
        //
        //弾のの属性 0=通常弾,1=レーザー,2=ミサイル
        this._alignment = 0;
        this.x = Main.player.x;
        this.y = Main.player.y;
    }
    //
    // ---------- methods ---------- 
    //
    BulletBase.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return BulletBase;
})(CharacterBase);
//# sourceMappingURL=BulletBase.js.map
/// <reference path="../../typescript.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../jquery.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../greensock.d.ts" />
/// <reference path="../../createjs/createjs/createjs.d.ts" />
///
/// <reference path="../../classes/core/Main.ts" />
/// <reference path="../../classes/display/PlayerCharacter.ts" />
///
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//
// ==================== CharacterBase class ==================== 
//
var CharacterBase = (function (_super) {
    __extends(CharacterBase, _super);
    //
    // ---------- constructor ---------- 
    //
    function CharacterBase() {
        _super.call(this);
        this._hp = 1;
        this._speed = 2;
        //console.log(this._onAdded);
        //this.addEventListener("added", this._onAdded);
        this.addEventListener("hit", this._onHit);
        this.addEventListener("died", this._onDied);
    }
    //
    // ---------- methods ---------- 
    //
    CharacterBase.prototype.init = function () {
        console.log("init", Main.main);
    };
    CharacterBase.prototype.getSprite = function (_spriteSheetData) {
        var _spriteSheet = new createjs.SpriteSheet(_spriteSheetData);
        var _sprite = new createjs.Sprite(_spriteSheet);
        return _sprite;
    };
    CharacterBase.prototype.move = function () {
    };
    CharacterBase.prototype.shoot = function () {
    };
    CharacterBase.prototype.hitEffect = function () {
        console.log(this, "hit!!");
    };
    CharacterBase.prototype.dieEffect = function () {
        console.log(this, "died!!");
    };
    Object.defineProperty(CharacterBase.prototype, "hp", {
        //
        // ---------- getter/setter ---------- 
        //
        get: function () {
            return this._hp;
        },
        set: function (val) {
            this._hp = val;
        },
        enumerable: true,
        configurable: true
    });
    //
    // ---------- eventHandlers ---------- 
    //
    CharacterBase.prototype._onAdded = function (e) {
        alert("_onAdded");
        this.init();
        this.removeEventListener("added", this._onAdded);
    };
    CharacterBase.prototype._onHit = function (e) {
        this._hp = -1;
        if (this._hp >= 1) {
            this.hitEffect();
        }
        else {
            this.dispatchEvent("died");
        }
    };
    CharacterBase.prototype._onDied = function (e) {
        this.hitEffect();
    };
    return CharacterBase;
})(createjs.Container);
//# sourceMappingURL=CharacterBase.js.map
/// <reference path="../../typescript.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../jquery.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../greensock.d.ts" />
/// <reference path="../../createjs/createjs/createjs.d.ts" />
///
/// <reference path="../../classes/core/Main.ts" />
/// <reference path="../../classes/display/CharacterBase.ts" />
/// <reference path="../../classes/display/PlayerCharacter.ts" />
///
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//
// ==================== NormalBullet class ==================== 
//
var NormalBullet = (function (_super) {
    __extends(NormalBullet, _super);
    //
    // ---------- properties ---------- 
    //
    //
    // ---------- constructor ---------- 
    //
    function NormalBullet() {
        _super.call(this);
        this.x = Main.player.x;
        this.y = Main.player.y;
    }
    //
    // ---------- methods ---------- 
    //
    NormalBullet.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return NormalBullet;
})(BulletBase);
//# sourceMappingURL=NormalBullet.js.map
/// <reference path="../../typescript.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../jquery.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../greensock.d.ts" />
/// <reference path="../../createjs/createjs/createjs.d.ts" />
///
/// <reference path="../../classes/core/Main.ts" />
/// <reference path="../../classes/display/CharacterBase.ts" />
///
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//
// ==================== Player class ==================== 
//
var PlayerCharacter = (function (_super) {
    __extends(PlayerCharacter, _super);
    function PlayerCharacter() {
        _super.call(this);
        this._hp = 30;
        this._speed = 2;
        this._friendly = true;
        console.log("PlayerCharacter");
        //this.hp=GamaManager.;
        this.x = 0;
        this.y = 0;
        //this.addEventListener("added", this._onAdded);
    }
    PlayerCharacter.prototype.init = function () {
        _super.prototype.init.call(this);
        console.log("init", "PlayerCharacter");
        /*
        var _spriteSheetData={
            images: [Main.loadedBitmaps["player"]],
            frames: {width:137, height:50}
        };
        this._sprite=this.getSprite(_spriteSheetData);
        this.addChild(this._sprite);
        this._sprite.x=0;
        this._sprite.y=0;
        */
        this.addChild(Main.loadedBitmaps["player"]);
    };
    PlayerCharacter.prototype.move = function () {
        if (Main.pressedKeys[0]) {
            //left
            this.x -= this._speed;
        }
        if (Main.pressedKeys[1]) {
            //up
            this.y -= this._speed;
        }
        if (Main.pressedKeys[2]) {
            //right
            this.x += this._speed;
        }
        if (Main.pressedKeys[3]) {
            //down
            this.y += this._speed;
        }
    };
    PlayerCharacter.prototype.shoot = function () {
    };
    return PlayerCharacter;
})(CharacterBase);
//# sourceMappingURL=PlayerCharacter.js.map
/// <reference path="../../typescript.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../jquery.d.ts" />
/// <reference path="../../underscore.d.ts" />
/// <reference path="../../greensock.d.ts" />
/// <reference path="../../createjs/createjs/createjs.d.ts" />
///
/// <reference path="../../classes/display/BG.ts" />
/// <reference path="../../classes/display/CharacterBase.ts" />
/// <reference path="../../classes/display/PlayerCharacter.ts" />
/// <reference path="../../classes/display/PlayerCharacter.ts" />
///
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//
//
// ==================== Main class ==================== 
//
var Main = (function (_super) {
    __extends(Main, _super);
    //
    // ---------- constructor ---------- 
    //
    function Main() {
        _super.call(this);
        //
        // ---------- properties ---------- 
        //
        //loadQueue
        this._loadQueue = new createjs.LoadQueue();
        this._manifest = [
            { id: "bgImg", src: "img/bguchu.jpg", type: createjs.AbstractLoader.IMAGE },
            { id: "playerImg", src: "img/argama.png", type: createjs.AbstractLoader.IMAGE },
            { id: "bulletImg", src: "img/bullet.png", type: createjs.AbstractLoader.IMAGE }
        ];
        //ゲームのステータス
        this._status = "ready";
        console.log("Main");
        var stage = Main.stage;
        var _loadQueue = this._loadQueue;
        Main.main = this;
        //this.init();
        _loadQueue.addEventListener("fileload", this._onFileLoad);
        _loadQueue.addEventListener("complete", this._onFileLoadComplete);
        _loadQueue.addEventListener("progress", this._onFileLoadProgress);
        _loadQueue.addEventListener("error", this._onFileLoadError);
        //_loadQueue.loadFile("assets/preloadjs-bg-center.png");
        _loadQueue.loadManifest(this._manifest);
    }
    //
    // ---------- methods ---------- 
    //
    Main.prototype.init = function () {
        console.log("init", Main.main);
    };
    Main.prototype.show = function () {
    };
    Main.prototype.scroll = function () {
        var _main = Main.main;
        _main._bg.x -= 2;
        if (_main._bg.x <= -1200) {
            _main._bg.x = 0;
        }
    };
    //
    // ---------- eventHandlers ---------- 
    //
    Main.prototype._onFileLoad = function (e) {
        console.log(e.target, e.type, e.item.src);
        var _bmp = new createjs.Bitmap(e.item.src);
        var _id = e.item.id;
        Main.loadedResourse.push(_bmp);
        console.log(Main.loadedResourse, _bmp);
        //
        if (_id == "bgImg") {
            //console.log("]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]")
            Main.main._bg = Main.loadedBitmaps["bg"] = _bmp;
        }
        else if (_id == "playerImg") {
            Main.loadedBitmaps["player"] = _bmp;
        }
        else if (_id == "bulletImg") {
            Main.loadedBitmaps["bullet"] = _bmp;
        }
        console.log("/////////////", _bmp, Main.main._bg, _id);
        /*
        _bmp.addEventListener("added",function(){
            alert("_________________");
            //alert(_bmp);
            //Main.stage.update();
        });
        //alert(Main.stage);
        Main.stage.addChild(_bmp);
        */
    };
    Main.prototype._onFileLoadComplete = function (e) {
        console.log(e.target, e.type);
        Main.stage.update();
        var _main = Main.main;
        _main._loadQueue.removeEventListener("fileLoad", _main._onFileLoad);
        _main._loadQueue.removeEventListener("complete", _main._onFileLoadComplete);
        _main._loadQueue.removeEventListener("progress", _main._onFileLoadProgress);
        _main._loadQueue.removeEventListener("error", _main._onFileLoadError);
        //ゲーム起動
        _main.addEventListener("boot", _main._onBoot);
        _main.dispatchEvent("boot");
    };
    Main.prototype._onFileLoadProgress = function (e) {
        console.log(e.target, e.type);
    };
    Main.prototype._onFileLoadError = function (e) {
        console.log(e.target, e.type);
    };
    Main.prototype._onBoot = function (e) {
        console.log(e.target, e.type);
        console.log("___________ ゲーム起動　___________");
        var _main = Main.main;
        _main.removeEventListener("boot", _main._onBoot);
        //
        //ゲームスタートトリガー
        _main.addEventListener("gameStart", _main._onGameStart);
        _main.dispatchEvent("gameStart");
    };
    Main.prototype._onTick = function (e) {
        //console.log(e.target,e.type);
        //console.log("___________ ゲーム起動　___________");
        var _main = Main.main;
        //
        _main.scroll();
        Main.player.move();
        Main.stage.update();
    };
    Main.prototype._onGameStart = function (e) {
        console.log(e.target, e.type);
        console.log("___________ ゲームスタート　___________");
        var _main = Main.main;
        _main.removeEventListener("gameStart", _main._onGameStart);
        //
        //描画
        Main.stage.addChild(_main._bg);
        Main.player = new PlayerCharacter();
        Main.stage.addChild(Main.player);
        Main.player.init();
        console.log(Main.stage.children);
        /*
        var  _d=Main.stage.addChild(_main._bg);
        Main.stage.update();
        */
        console.log("+++++++++++++++++", Main.stage.children);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", _main._onTick);
        console.log("####################", createjs.Ticker.framerate);
        //
        //キー操作attach
        document.addEventListener("keydown", _main._onKeyDown);
        document.addEventListener("keyup", _main._onKeyUp);
    };
    Main.prototype._onKeyDown = function (event) {
        var _keyCode = event.keyCode;
        //event.preventDefault();
        if (_keyCode == undefined) {
            _keyCode = event.which;
        }
        //console.log([event.type,event.keyCode]);
        if ((_keyCode == 65) || (_keyCode == 87) || (_keyCode == 68) || (_keyCode == 83) || (_keyCode == 37) || (_keyCode == 38) || (_keyCode == 39) || (_keyCode == 40)) {
            Main.cursorkeyIsPressed = true;
        }
        /*
        switch(_keyCode){
            case 65:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[0]=true;
            case 37:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[0]=true;
            case 87:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[1]=true;
            case 38:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[1]=true;
            case 68:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[2]=true;
            case 39:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[2]=true;
            case 83:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[3]=true;
            case 40:
                Main.cursorkeyIsPressed=true;
                Main.pressedKeys[3]=true;
            case 75:
                _main._player.shoot();
        }
        
        */
        //pressedKeyCode=event.keyCode;
        if ((_keyCode == 65) || (_keyCode == 37)) {
            //left
            //pcX-=pcSpeed;
            Main.pressedKeys[0] = true;
        }
        else if ((_keyCode == 87) || (_keyCode == 38)) {
            //up
            //pcY-=pcSpeed;
            Main.pressedKeys[1] = true;
        }
        else if ((_keyCode == 68) || (_keyCode == 39)) {
            //right
            //pcX+=pcSpeed;
            Main.pressedKeys[2] = true;
        }
        else if ((_keyCode == 83) || (_keyCode == 40)) {
            //down
            //pcY+=pcSpeed;
            Main.pressedKeys[3] = true;
        }
        else if (_keyCode == 75) {
            //shoot			
            Main.player.shoot();
        }
        console.log([event.type, _keyCode]);
    };
    Main.prototype._onKeyUp = function (event) {
        var _keyCode = event.keyCode;
        Main.cursorkeyIsPressed = false;
        if (_keyCode == undefined) {
            _keyCode = event.which;
        }
        /*
        switch(_keyCode){
            case 65:
                Main.pressedKeys[0]=false;
            case 37:
                Main.pressedKeys[0]=false;
            case 87:
                Main.pressedKeys[1]=false;
            case 38:
                Main.pressedKeys[1]=false;
            case 68:
                Main.pressedKeys[2]=false;
            case 39:
                Main.pressedKeys[2]=false;
            case 83:
                Main.pressedKeys[3]=false;
            case 40:
                Main.pressedKeys[3]=false;
        }*/
        if ((_keyCode == 65) || (_keyCode == 37)) {
            //left
            //pcX-=pcSpeed;
            Main.pressedKeys[0] = false;
        }
        else if ((_keyCode == 87) || (_keyCode == 38)) {
            //up
            //pcY-=pcSpeed;
            Main.pressedKeys[1] = false;
        }
        else if ((_keyCode == 68) || (_keyCode == 39)) {
            //right
            //pcX+=pcSpeed;
            Main.pressedKeys[2] = false;
        }
        else if ((_keyCode == 83) || (_keyCode == 40)) {
            //down
            //pcY+=pcSpeed;
            Main.pressedKeys[3] = false;
        }
        console.log([event.type, _keyCode]);
    };
    //キー
    Main.cursorkeyIsPressed = false;
    Main.pressedKeys = [];
    //static
    Main.STAGE_WIDTH = 960;
    Main.STAGE_HEIGHT = 540;
    Main.stage = new createjs.Stage("canvas");
    Main.loadedResourse = [];
    Main.loadedBitmaps = {};
    return Main;
})(createjs.EventDispatcher);
;
(function ($) {
    var _main = new Main();
})(jQuery);
//# sourceMappingURL=Main.js.map