/*:
 * @plugindesc 设置物品场景样式
 * @author 随喜赞叹
 * 
 * 
 * 
 * 
 * @param --itemSence--
 * @desc  ---主窗体控制---
 * 
 * @default 
 * @param ItemSence_BackgroundImage
 * @parent --itemSence--
 * @text 物品栏背景图片
 * @desc 设置背景图片.路径img/itemSence
 * @default itemSenceBG
 * @dir img/itemSence/
 * @type file
 * 
 * 
 * 
 * @help
 * ============================================================================
 *         功能介绍
 * ============================================================================
 *
 * 设置物品栏网游式UI。
 */

var Imported = Imported || {};
Imported.SE_MapSence = true;
var SimpleEngine = SimpleEngine || {};
SimpleEngine.parameters = PluginManager.parameters('SE_ItemSence');
SimpleEngine.ItemSence_BackgroundImage = String(SimpleEngine.parameters['ItemSence_BackgroundImage']);

//SE001 添加自定义图片载入接口
ImageManager.loadItemSence = function(filename) {
    return this.loadBitmap('img/itemSence/', filename, 0, true);
};
//SE001 END

//SE002 物品场景设置背景图片
var itemSence_createBackground = Scene_Item.prototype.createBackground;
Scene_Item.prototype.createBackground = function() {
	itemSence_createBackground.call(this);
	this.ItemSence_BackgroundImage = new Sprite(ImageManager.loadItemSence(SimpleEngine.ItemSence_BackgroundImage));
	this.addChild(this.ItemSence_BackgroundImage);	
}
//SE002 END

//SE003 物品场景创建初始化
var itemSence_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function() {
    itemSence_create.call(this);
    this.setItemWindowStyle();
    this.setCategoryWindowStyle();
    //需要关掉之前的角色栏
};
//SE003 END

//SE004 设置物品栏样式
Scene_Item.prototype.setItemWindowStyle = function() {
    this._itemWindow.contents.fontSize = 15;
	this._itemWindow.x = 599;
	this._itemWindow.y = 176;
    this._itemWindow.width = 400;
    this._itemWindow.height = 420;
};
//SE004 END

//SE005 设置分类栏样式
Scene_Item.prototype.setCategoryWindowStyle = function() {
	this._categoryWindow.opacity = 255;
	this._categoryWindow.visible = true;
	this._categoryWindow.x = 599;
	this._categoryWindow.y = 122;
	this._categoryWindow.width = 400;
	this._categoryWindow.height = 45;
};
//SE005 END


//SE004 系统命令窗口初始化
function CategoryWindow() 
{
    this.initialize.apply(this, arguments);
}
CategoryWindow.prototype = Object.create(Window_Base.prototype);
CategoryWindow.prototype.constructor = CategoryWindow;
CategoryWindow.prototype.initialize = function(x, y, width, height) 
{
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    //------------------自定义样式配置------------------------
    this.imageCache = {};
    this.InitBackGroundImage();
    this.InitCommendGroups();
    //------------------------------------------------------
};
//SE004 END

//SE005 添加背景图片
CategoryWindow.prototype.InitBackGroundImage = function() 
{
    //设置边框/背景透明度
    this._windowFrameSprite.opacity = 0;
	this.opacity = 0;
};
//SE005 END

//SE006 设置图片缓冲区
CategoryWindow.prototype.loadCachedImage = function(imageKey) 
{
    if (!this.imageCache[imageKey]) {
        // 如果缓存中没有该图片，加载并缓存它
        this.imageCache[imageKey] = ImageManager.loadItemSence(imageKey);
      }
      return this.imageCache[imageKey];
}; 
//SE006 END

//SE006 添加命令按钮(任务还没做)
CategoryWindow.prototype.InitCommendGroups = function() 
{
    this.itemCommand = new Sprite_Button();
    this.weaponCommand = new Sprite_Button();
    this.armorCommand = new Sprite_Button();
    this.keyItemCommand = new Sprite_Button();
    this.itemCommand.bitmap = this.loadCachedImage('btn_item'); 
    this.weaponCommand.bitmap = this.loadCachedImage('btn_weapon'); 
    this.armorCommand.bitmap = this.loadCachedImage('btn_armor'); 
    this.keyItemCommand.bitmap = this.loadCachedImage('btn_keyItem'); 
    this.itemCommand.setClickHandler(this.onItemButtonClicked.bind(this));
    this.weaponCommand.setClickHandler(this.onWeaponButtonClicked.bind(this));
    this.armorCommand.setClickHandler(this.onArmorButtonClicked.bind(this));
    this.keyItemCommand.setClickHandler(this.onKeyItemButtonClicked.bind(this));
    this.itemCommand.x = 10;
    this.weaponCommand.x = 110;
    this.armorCommand.x = 210;
    this.keyItemCommand.x = 310;
    this.itemCommand.y = 2;
    this.weaponCommand.y = 2;
    this.armorCommand.y = 2;
    this.keyItemCommand.y = 2;
    this.addChild(this.itemCommand);
    this.addChild(this.weaponCommand);
    this.addChild(this.armorCommand);
    this.addChild(this.keyItemCommand);
};

CategoryWindow.prototype.onItemButtonClicked = function() 
{
    const itemListWindow = Scene_Item.prototype._itemWindow;
    
    // 切换到 Key Item 分类
    itemListWindow.select(1);
    
    // 激活物品列表窗口
    itemListWindow.activate();
    
    // 设置物品列表窗口的处理程序（可选，如果需要处理键盘输入等）
    itemListWindow.setHandler('ok', this.onItemOk.bind(this));
    itemListWindow.setHandler('cancel', this.popScene.bind(this));
};
CategoryWindow.prototype.onWeaponButtonClicked = function() 
{
    const itemListWindow = Scene_Item.prototype._itemWindow;
    
    // 切换到 Key Item 分类
    itemListWindow.select(1);
    
    // 激活物品列表窗口
    itemListWindow.activate();
    
    // 设置物品列表窗口的处理程序（可选，如果需要处理键盘输入等）
    itemListWindow.setHandler('ok', this.onItemOk.bind(this));
    itemListWindow.setHandler('cancel', this.popScene.bind(this));
};
CategoryWindow.prototype.onArmorButtonClicked = function() 
{
    const itemListWindow = Scene_Item.prototype._itemWindow;
    
    // 切换到 Key Item 分类
    itemListWindow.select(2);
    
    // 激活物品列表窗口
    itemListWindow.activate();
    
    // 设置物品列表窗口的处理程序（可选，如果需要处理键盘输入等）
    itemListWindow.setHandler('ok', this.onItemOk.bind(this));
    itemListWindow.setHandler('cancel', this.popScene.bind(this));
};
CategoryWindow.prototype.onKeyItemButtonClicked = function() 
{
    const itemListWindow = Scene_Item.prototype._itemWindow;
    
    // 切换到 Key Item 分类
    itemListWindow.select(3);
    
    // 激活物品列表窗口
    itemListWindow.activate();
    
    // 设置物品列表窗口的处理程序（可选，如果需要处理键盘输入等）
    itemListWindow.setHandler('ok', this.onItemOk.bind(this));
    itemListWindow.setHandler('cancel', this.popScene.bind(this));
};