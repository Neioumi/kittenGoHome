var GameLayer = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("Game Scene", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        this.addChild(menuLabel, 5);

        this.setTouchEnabled(true);
        return true;
    },

    // onTouchesBegan:function (touches, event) {
    // },
    // onTouchesMoved:function (touches, event) {
    // },
    // onTouchesEnded:function (touches, event) {
    // },
    // onTouchesCancelled:function (touches, event) {
    // }
});

// GameLayer.scene = cc.Scene.extend({
//     onEnter:function () {
//         this._super();
//         var layer = new GameLayer();
//         layer.init();
//         this.addChild(layer);
//     }
// });

GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameLayer.create();
    scene.addChild(layer, 1);
    return scene;
};
