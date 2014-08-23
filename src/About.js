var About = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("About", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        this.addChild(menuLabel, 5);

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

var AboutScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new About();
        layer.init();
        this.addChild(layer);
    }
});

