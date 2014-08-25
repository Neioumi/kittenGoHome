var About = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("About", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2 + 100));
        this.addChild(menuLabel, 5);

        var backBtn = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 60, 222, 60));
        backBtn.setAnchorPoint(0, 0);
        backBtn.setPosition(0, 0);
        var back = cc.MenuItemLabel.create(backBtn, this.onBackCallback);
        // this.addChild(backBtn);

        var menu = cc.Menu.create(back);
        menu.alignItemsVerticallyWithPadding(20);
        // menu.alignItemsInColumns(2, 2, 1);
        this.addChild(menu);

        this.setTouchEnabled(true);
        return true;
    },
    onBackCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(Menu.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
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

About.create = function () {
    var sg = new About();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

About.scene = function () {
    var scene = cc.Scene.create();
    var layer = About.create();
    scene.addChild(layer, 1);
    return scene;
};

