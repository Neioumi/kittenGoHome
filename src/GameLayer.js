var GameLayer = cc.Layer.extend({
    // for cat sprite
    catSpriteSheet: null,
    catAnime: null,
    catSprite: null,
    // for enemy sprite
    enemySpriteSheet: null,
    enemyAnime: null,
    enemySprite: null,
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("Game Scene", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, 800));
        this.addChild(menuLabel, 5);


        // ぬこスプライト
        // スプライトシートの作成
        cc.SpriteFrameCache.getInstance().addSpriteFrames(res.s_SpriteCatPlist);
        this.catSpriteSheet = cc.SpriteBatchNode.create(res.s_SpriteCat);
        this.addChild(this.catSpriteSheet);
        // アニメーションを配列に入れる
        var catAnimFrames = [];
        for (var i = 1; i <= 12; i++ ) {
            var str = "cat_walk" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            catAnimFrames.push(frame);
        }
        // アニメーション作成
        var catAnimation = cc.Animation.create(catAnimFrames, 0.1);
        // ぬこアニメ
        this.catAnime = cc.RepeatForever.create(cc.Animate.create(catAnimation));
        // アニメーションを表示するSprite作成、そのspriteでぬこアニメをrun
        this.catSprite = cc.Sprite.createWithSpriteFrameName("cat_walk1.png");
        this.catSprite.setPosition(90, winSize.height / 2);
        this.catSprite.runAction(this.catAnime);
        this.catSpriteSheet.addChild(this.catSprite);


        // 敵スプライト
        // スプライトシートの作成
        cc.SpriteFrameCache.getInstance().addSpriteFrames(res.s_SpriteEnemyPlist);
        this.enemySpriteSheet = cc.SpriteBatchNode.create(res.s_SpriteEnemy);
        this.addChild(this.enemySpriteSheet);
        // アニメーションを配列に入れる
        var enemyAnimFrames = [];
        for (var j = 1; j <= 2; j++ ) {
            var enemyStr = "ghost1_" + j + ".png";
            var enemyFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame(enemyStr);
            enemyAnimFrames.push(enemyFrame);
        }
        // アニメーション作成
        var enemyAnimation = cc.Animation.create(enemyAnimFrames, 0.3);
        // 敵アニメ
        this.enemyAnime = cc.RepeatForever.create(cc.Animate.create(enemyAnimation));
        // アニメーションを表示するSprite作成、そのspriteで敵アニメをrun
        this.enemySprite = cc.Sprite.createWithSpriteFrameName("ghost1_1.png");
        this.enemySprite.setPosition(400, winSize.height / 2 + 100);
        this.enemySprite.runAction(this.enemyAnime);
        this.enemySpriteSheet.addChild(this.enemySprite);



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
