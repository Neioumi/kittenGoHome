var Menu = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("Menu Scene", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        menuLabel.setColor(cc.c3b(255, 0, 0));
        this.addChild(menuLabel, 5);

        var sprite = cc.Sprite.create(res.s_HelloWorld);
        sprite.setPosition(winSize.width / 2, winSize.height / 2);
        this.addChild(sprite,1);

        this.setTouchEnabled(true);
        return true;
    },

    onTouchesBegan:function (touches, event) {
    },
    onTouchesMoved:function (touches, event) {
    },
    onTouchesEnded:function (touches, event) {
    },
    onTouchesCancelled:function (touches, event) {
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Menu();
        layer.init();
        this.addChild(layer);
    }
});

