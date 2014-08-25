var GameOver = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("Game Over", "Arial", 38);
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

GameOver.create = function () {
    var sg = new GameOver();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameOver.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameOver.create();
    scene.addChild(layer, 1);
    return scene;
};