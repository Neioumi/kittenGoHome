var SettingsLayer = cc.Layer.extend({
    init:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();

        var menuLabel = cc.LabelTTF.create("SettingsLayer", "Arial", 38);
        menuLabel.setPosition(cc.p(winSize.width / 2, winSize.height / 2 + 100));
        this.addChild(menuLabel, 5);

        // cc.MenuItemFont.setFontName("Arial");
        // cc.MenuItemFont.setFontSize(38);
        // var title1 = cc.MenuItemFont.create("Sound");
        // title1.setEnabled(false);

        // cc.MenuItemFont.setFontName("Arial");
        // cc.MenuItemFont.setFontSize(26);
        // var item1 = cc.MenuItemToggle.create(
        //     cc.MenuItemFont.create("On"),
        //     cc.MenuItemFont.create("Off") );
        // item1.setCallback(this.onSoundControl );
        // var state = MW.SOUND ? 0 : 1;
        // item1.setSelectedIndex(state);

        // cc.MenuItemFont.setFontName("Arial");
        // cc.MenuItemFont.setFontSize(18);
        // var title2 = cc.MenuItemFont.create("Mode");
        // title2.setEnabled(false);

        // cc.MenuItemFont.setFontName("Arial");
        // cc.MenuItemFont.setFontSize(26);
        // var item2 = cc.MenuItemToggle.create(
        //     cc.MenuItemFont.create("Easy"),
        //     cc.MenuItemFont.create("Normal"),
        //     cc.MenuItemFont.create("Hard"));
        // item2.setCallback( this.onModeControl );

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
    onSoundControl:function(){
        // MW.SOUND = !MW.SOUND;
        // var audioEngine = cc.AudioEngine.getInstance();
        // if(MW.SOUND){
        //     audioEngine.playMusic(res.mainMainMusic_mp3);
        // }
        // else{
        //     audioEngine.stopMusic();
        // }
    },
    // onModeControl:function(){
    // }
    // onTouchesBegan:function (touches, event) {
    // },
    // onTouchesMoved:function (touches, event) {
    // },
    // onTouchesEnded:function (touches, event) {
    // },
    // onTouchesCancelled:function (touches, event) {
    // }
});

SettingsLayer.create = function () {
    var sg = new SettingsLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SettingsLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = SettingsLayer.create();
    scene.addChild(layer, 1);
    return scene;
};
