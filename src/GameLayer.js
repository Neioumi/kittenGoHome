var GameLayer = cc.Layer.extend({
    // for sprite
    spriteSheet: null,
    catAnime: null,
    sprite: null,

    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("Game Scene", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        this.addChild(menuLabel, 5);


        // ぬこスプライト
        // スプライトシートの作成
        cc.SpriteFrameCache.getInstance().addSpriteFrames(res.s_SpriteCatPlist);
        this.spriteSheet = cc.SpriteBatchNode.create(res.s_SpriteCat);
        this.addChild(this.spriteSheet);
        // アニメーションを配列に入れる
        var animFrames = [];
        for (var i = 1; i <= 5; i++ ) {
            var str = "cat_walk" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }
        // アニメーション作成
        var animation = cc.Animation.create(animFrames, 0.2);
        // ぬこアニメ
        this.catAnime = cc.RepeatForever.create(cc.Animate.create(animation));
        // アニメーションを表示するSprite作成、そのspriteでぬこアニメをrun
        this.sprite = cc.Sprite.createWithSpriteFrameName("cat_walk1.png");
        this.sprite.setPosition(90, winSize.height / 2);
        this.sprite.runAction(this.catAnime);
        this.spriteSheet.addChild(this.sprite);


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
