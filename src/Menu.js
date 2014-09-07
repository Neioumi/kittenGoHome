var Menu = cc.Layer.extend({
    // for sprite
    spriteSheet: null,
    catAnime: null,
    sprite: null,

    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var logo = cc.Sprite.create(res.s_Title);
        logo.setAnchorPoint(0, 0);
        logo.setPosition(80, 820);
        this.addChild(logo, 1);


        // ぬこスプライト
        // スプライトシートの作成
        cc.SpriteFrameCache.getInstance().addSpriteFrames(res.s_SpriteMenuPlist);
        this.spriteSheet = cc.SpriteBatchNode.create(res.s_SpriteMenu);
        this.addChild(this.spriteSheet);
        // アニメーションを配列に入れる
        var animFrames = [];
        for (var i = 1; i <= 3; i++ ) {
            var str = "cat_front" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }
        // アニメーション作成
        var animation = cc.Animation.create(animFrames, 0.2);
        // ぬこアニメ
        this.catAnime = cc.RepeatForever.create(cc.Animate.create(animation));
        // アニメーションを表示するSprite作成、そのspriteでぬこアニメをrun
        this.sprite = cc.Sprite.createWithSpriteFrameName("cat_front1.png");
        this.sprite.setPosition(winSize.width / 2, winSize.height / 2 + 130);
        this.sprite.runAction(this.catAnime);
        this.spriteSheet.addChild(this.sprite);


        // メニューのスプライト画像
        var newGameNormal = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 240, 222, 60));
        var newGameSelected = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 300, 222, 60));
        var newGameDisabled = cc.Sprite.create(res.s_SpriteBtn, cc.rect(0, 240, 222, 60));

        var collectionNormal = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 0, 74, 74));
        var collectionSelected = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 74, 74, 74));
        var collectionDisabled = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 148, 74, 74));

        var settingsNormal = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 222, 74, 74));
        var settingsSelected = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 296, 74, 74));
        var settingsDisabled = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 370, 74, 74));

        var aboutNormal = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 444, 74, 74));
        var aboutSelected = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 518, 74, 74));
        var aboutDisabled = cc.Sprite.create(res.s_SpriteIcon, cc.rect(0, 592, 74, 74));


        // CCMenuItemSpriteはCCNodeオブジェクトをアイテムとして受け付ける
        // 非選択時、選択時、不活性時の3つのステータスを持つ。
        var newGame = cc.MenuItemSprite.create(newGameNormal, newGameSelected, newGameDisabled,
            this.onNewGame, this);
        var collection = cc.MenuItemSprite.create(collectionNormal, collectionSelected, collectionDisabled, this.onCollection, this);
        var settings = cc.MenuItemSprite.create(settingsNormal, settingsSelected, settingsDisabled, this.onSettings, this);
        var about = cc.MenuItemSprite.create(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);


        // CCMenuはMenuItemオブジェクトをメニューにaddChildで追加できる
        var menu = cc.Menu.create(newGame, collection, settings, about);
        menu.alignItemsVerticallyWithPadding(20);
        this.addChild(menu, 1, 2); // addChild(child, zOrder, tag)
        menu.setPosition(winSize.width / 2, winSize.height / 2 - 250);


        this.setTouchEnabled(true);
        return true;
    },
    // ゲーム画面
    onNewGame:function (pSender) {
        //load resources
        cc.LoaderScene.preload(g_maingame, function () {
            var scene = cc.Scene.create();
            scene.addChild(GameLayer.create());
            cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
        }, this);
    },
    // コレクション画面
    onCollection:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(Collection.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
    },
    // 設定画面
    onSettings:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SettingsLayer.create());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
    },
    // ゲームについての説明画面
    onAbout:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(About.create());
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

Menu.create = function () {
    var sg = new Menu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

Menu.scene = function () {
    var scene = cc.Scene.create();
    var layer = Menu.create();
    scene.addChild(layer);
    return scene;
};
