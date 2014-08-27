var About = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("About", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2 + 360));
        this.addChild(menuLabel, 5);

        var iconsCopyright = cc.LabelTTF.create("Icons made by Elegant Themes, \n Freepik from Flaticon. \n http://www.flaticon.com", "Arial", 26, cc.size(winSize.width * 0.85, 100), cc.TEXT_ALIGNMENT_CENTER);
        iconsCopyright.setPosition(winSize.width / 2, winSize.height / 2 + 100);
        iconsCopyright.setAnchorPoint(0.5, 0.5);
        this.addChild(iconsCopyright);

        var musicCopyright = cc.LabelTTF.create("Music from 魔王魂. \n http://maoudamashii.jokersounds.com", "Arial", 26, cc.size(winSize.width * 0.85, 80), cc.TEXT_ALIGNMENT_CENTER);
        musicCopyright.setPosition(winSize.width / 2, winSize.height / 2 - 30);
        musicCopyright.setAnchorPoint(0.5, 0.5);
        this.addChild(musicCopyright);

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
    // onTouchesBegan:function (touches, event) {
    // },
    // onTouchesMoved:function (touches, event) {
    // },
    // onTouchesEnded:function (touches, event) {
    // },
    // onTouchesCancelled:function (touches, event) {
    // }
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

