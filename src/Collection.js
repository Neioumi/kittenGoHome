var Collection = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("Collection", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2 + 100));
        this.addChild(menuLabel, 5);

        var backBtnNormal = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 60, 222, 60));
        var backBtnSelected = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 0, 222, 60));
        var backBtnDisabled = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 60, 222, 60));
        var backBtn = cc.MenuItemSprite.create(backBtnNormal, backBtnSelected, backBtnDisabled, this.onBackCallback, this);
        var backMenu = cc.Menu.create(backBtn);
        backMenu.alignItemsVerticallyWithPadding(20);
        this.addChild(backMenu, 1, 2);
        backMenu.setPosition(winSize.width / 2, winSize.height / 6);

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

Collection.create = function () {
    var sg = new Collection();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

Collection.scene = function () {
    var scene = cc.Scene.create();
    var layer = Collection.create();
    scene.addChild(layer, 1);
    return scene;
};
