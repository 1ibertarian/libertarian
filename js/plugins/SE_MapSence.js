/*:
 * @plugindesc 设置地图场景样式
 * @author 随喜赞叹
 * 
 * 
 * 
 * 
 * @param --SysCommandWindow--
 * @desc  ---系统命令窗口---
 * 
 * 
 * 
 * @default 
 * @param SysCommandWindow_BackgroundImage
 * @parent --SysCommandWindow--
 * @text 系统指令窗口背景图片
 * @desc 设置【物品/保存/设置/...】系统指令窗口背景图片.路径img/mapSence
 * @default sysCommandBG
 * @dir img/mapSence/
 * @type file
 * 
 * @param SysCommandWindow_X
 * @parent --SysCommandWindow--
 * @desc 设置命令窗口起始坐标X
 * @default 780
 * 
 * @param SysCommandWindow_Y
 * @parent --SysCommandWindow--
 * @desc 设置命令窗口起始坐标Y
 * @default 620
 * 
 * @param SysCommandWindow_W
 * @parent --SysCommandWindow--
 * @desc 设置命令窗口起始大小W
 * @default 500
 * 
 * @param SysCommandWindow_H
 * @parent --SysCommandWindow--
 * @desc 设置命令窗口起始大小H
 * @default 100
 * 
 * 
 * @help
 * ============================================================================
 *         功能介绍
 * ============================================================================
 *
 * 为地图场景添加更加便捷的系统功能选项。
 */

var Imported = Imported || {};
Imported.SE_MapSence = true;
var SimpleEngine = SimpleEngine || {};
SimpleEngine.parameters = PluginManager.parameters('SE_MapSence');
SimpleEngine.SysCommandWindow_BackgroundImage = String(SimpleEngine.parameters['SysCommandWindow_BackgroundImage']);
SimpleEngine.SysCommandWindow_X = Number(SimpleEngine.parameters['SysCommandWindow_X'] || 780);
SimpleEngine.SysCommandWindow_Y = Number(SimpleEngine.parameters['SysCommandWindow_Y'] || 620);
SimpleEngine.SysCommandWindow_W = Number(SimpleEngine.parameters['SysCommandWindow_W'] || 500);
SimpleEngine.SysCommandWindow_H = Number(SimpleEngine.parameters['SysCommandWindow_H'] || 100);
// SimpleEngine.bosshp_hp_number_visible = String(SimpleEngine.parameters['BHP HP Number Visible'] || true);

//SE001 添加自定义图片载入接口
ImageManager.loadMapSence = function(filename) {
    return this.loadBitmap('img/mapSence/', filename, 0, true);
};
//SE001 END

//SE002 地图场景添加系统命令窗口
SimpleEngine.MapSence_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
    SimpleEngine.MapSence_createAllWindows.call(this);

    this.sysCommandWindow = new SysCommandWindow(SimpleEngine.SysCommandWindow_X, SimpleEngine.SysCommandWindow_Y, SimpleEngine.SysCommandWindow_W, SimpleEngine.SysCommandWindow_H);
    this.addChild(this.sysCommandWindow);
};
//SE002 END

//SE003 鼠标点击图标时防止移动&&按下抬起时切换图片
SimpleEngine.MapSence_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
    SimpleEngine.MapSence_processMapTouch.call(this);
    this.updatePictureEvents();
};
Scene_Map.prototype.updatePictureEvents = function() {
    if (TouchInput.isTriggered()) {
    this.updatePictureEventCheck(1);
    }
    if (TouchInput.isRepeated()) {
        this.updatePictureEventCheck(-1);
    }
    if (TouchInput.isPressed()) {
        this.updatePictureEventCheck(-1);
    }
    if (TouchInput.isReleased()) {
    this.updatePictureEventCheck(0);
    }
};
Scene_Map.prototype.updatePictureEventCheck = function(enable) {
    if (SceneManager.isSceneChanging()) return;
    if ($gameMap.isEventRunning()) return;

    if(!enable)
    {
        //$gameTemp.clearDestination();//清空移动路线
        switch (this.pressStatus) {
            case 0:
            break;
            case 1:
            this.sysCommandWindow.itemCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_item'); 
            break;
            case 2:
            this.sysCommandWindow.skillCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_skill'); 
            break;
            case 3:
            this.sysCommandWindow.statusCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_status'); 
            break;
            case 4:
            this.sysCommandWindow.taskCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_task'); 
            break;
            case 5:
            this.sysCommandWindow.saveCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_save'); 
            break;
            case 6:
            this.sysCommandWindow.optionsCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_options'); 
            break;
            case 7:
            this.sysCommandWindow.exitCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_exit'); 
            break;
            default:
                break;
        }
    }
    if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.itemCommand))
    {//物品按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=1;
            this.sysCommandWindow.itemCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_item_Click'); 
        }
    }
    else if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.skillCommand))
    {//技能按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=2;
            this.sysCommandWindow.skillCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_skill_Click'); 
        }
    }
    else if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.statusCommand))
    {//状态按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=3;
            this.sysCommandWindow.statusCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_status_Click'); 
        }
    }
    else if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.taskCommand))
    {//任务按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=4;
            this.sysCommandWindow.taskCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_task_Click'); 
        }
    }
    else if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.saveCommand))
    {//保存按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=5;
            this.sysCommandWindow.saveCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_save_Click'); 
        }
    }
    else if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.optionsCommand))
    {//选项按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=6;
            this.sysCommandWindow.optionsCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_options_Click'); 
        }
    }
    else if(this.sysCommandWindow.isTriggered(this.sysCommandWindow.exitCommand))
    {//登出按钮被点击
        $gameTemp.clearDestination();//清空移动路线
        if(enable > 0)
        {
            this.pressStatus=7;
            this.sysCommandWindow.exitCommand.bitmap = this.sysCommandWindow.loadCachedImage('btn_exit_Click'); 
        }
    }
};
//SE003 END

//SE004 系统命令窗口初始化
function SysCommandWindow() 
{
    this.initialize.apply(this, arguments);
}
SysCommandWindow.prototype = Object.create(Window_Base.prototype);
SysCommandWindow.prototype.constructor = SysCommandWindow;
SysCommandWindow.prototype.initialize = function(x, y, width, height) 
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
SysCommandWindow.prototype.InitBackGroundImage = function() 
{
    //设置边框/背景透明度
    this._windowFrameSprite.opacity = 0;
	this.opacity = 0;
    this._backgroundSprite = new Sprite(this.loadCachedImage(SimpleEngine.SysCommandWindow_BackgroundImage));
    this.addChildToBack(this._backgroundSprite);
};
//SE005 END

//SE006 添加命令按钮(任务还没做)
SysCommandWindow.prototype.InitCommendGroups = function() 
{
    this.pressStatus=0;
    this.itemCommand = new Sprite_Button();
    this.skillCommand = new Sprite_Button();
    this.statusCommand = new Sprite_Button();
    this.taskCommand = new Sprite_Button();
    this.saveCommand = new Sprite_Button();
    this.optionsCommand = new Sprite_Button();
    this.exitCommand = new Sprite_Button();
    this.itemCommand.bitmap = this.loadCachedImage('btn_item'); 
    this.skillCommand.bitmap = this.loadCachedImage('btn_skill'); 
    this.statusCommand.bitmap = this.loadCachedImage('btn_status'); 
    this.taskCommand.bitmap = this.loadCachedImage('btn_task'); 
    this.saveCommand.bitmap = this.loadCachedImage('btn_save'); 
    this.optionsCommand.bitmap = this.loadCachedImage('btn_options'); 
    this.exitCommand.bitmap = this.loadCachedImage('btn_exit'); 
    this.itemCommand.setClickHandler(this.onItemButtonClicked.bind(this));
    this.skillCommand.setClickHandler(this.onSkillButtonClicked.bind(this));
    this.statusCommand.setClickHandler(this.onStatusButtonClicked.bind(this));
    this.taskCommand.setClickHandler(this.onTaskButtonClicked.bind(this));
    this.saveCommand.setClickHandler(this.onSaveButtonClicked.bind(this));
    this.optionsCommand.setClickHandler(this.onOptionsButtonClicked.bind(this));
    this.exitCommand.setClickHandler(this.onExitButtonClicked.bind(this));
    this.itemCommand.x = 5;
    this.skillCommand.x = 76;
    this.statusCommand.x = 147;
    this.taskCommand.x = 218;
    this.saveCommand.x = 289;
    this.optionsCommand.x = 360;
    this.exitCommand.x = 431;
    this.itemCommand.y = 30;
    this.skillCommand.y = 30;
    this.statusCommand.y = 30;
    this.taskCommand.y = 30;
    this.saveCommand.y = 30;
    this.optionsCommand.y = 30;
    this.exitCommand.y = 30;
    this.addChild(this.itemCommand);
    this.addChild(this.skillCommand);
    this.addChild(this.statusCommand);
    this.addChild(this.taskCommand);
    this.addChild(this.saveCommand);
    this.addChild(this.optionsCommand);
    this.addChild(this.exitCommand);
};
SysCommandWindow.prototype.loadCachedImage = function(imageKey) 
{
    if (!this.imageCache[imageKey]) {
        // 如果缓存中没有该图片，加载并缓存它
        this.imageCache[imageKey] = ImageManager.loadMapSence(imageKey);
      }
      return this.imageCache[imageKey];
};
SysCommandWindow.prototype.onItemButtonClicked = function() 
{
    SceneManager.push(Scene_Item);
};
SysCommandWindow.prototype.onSkillButtonClicked = function() 
{
    SceneManager.push(Scene_Skill);
};
SysCommandWindow.prototype.onStatusButtonClicked = function() 
{
    SceneManager.push(Scene_Status);
};
SysCommandWindow.prototype.onTaskButtonClicked = function() 
{
    SceneManager.push(Scene_Save);
};
SysCommandWindow.prototype.onSaveButtonClicked = function() 
{
    SceneManager.push(Scene_Save);
};
SysCommandWindow.prototype.onOptionsButtonClicked = function() 
{
    SceneManager.push(Scene_Options);
};
SysCommandWindow.prototype.onExitButtonClicked = function() 
{
    SceneManager.push(Scene_GameEnd);
};
//SE006 END

//SE007 sprite按钮是否被点击
SysCommandWindow.prototype.isTriggered = function(sprite) 
{
    var width = sprite.width;
    var height = sprite.height;
    var x = sprite.x+SimpleEngine.SysCommandWindow_X;
    var y = sprite.y+SimpleEngine.SysCommandWindow_Y;

    var mx =TouchInput.x;
    var my = TouchInput.y;
    return mx >= x && my >= y && mx < (x + width) && my < (y + height);
};
//SE007 END