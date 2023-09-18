// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"《功能核心》","status":true,"description":"","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 [v1.0]  系统 - 引擎核心","parameters":{"---屏幕---":"","屏幕宽度":"1280","屏幕高度":"720","屏幕重置-战斗背景":"true","屏幕重置-标题":"true","屏幕重置-游戏结束":"true","控制台":"false","是否重置角色战斗位置":"false","游戏字体加载延时":"0","是否锁定实际比例":"false","是否自动释放缓存":"true","---金钱---":"","金钱最大值":"99999999","金钱字体大小":"20","金钱图标":"832","金钱超出消息":"数不尽","---物品---":"","物品最大值":"999","物品字体大小":"20","---能力值---":"","角色等级最大值":"99","角色生命最大值":"9999","角色魔法最大值":"9999","角色属性最大值":"999","敌人生命最大值":"999999","敌人魔法最大值":"9999","敌人属性最大值":"999","---战斗---":"","动画速度":"4","是否闪烁选中目标":"false","遇敌动画是否显示角色":"true","战斗结束是否显示角色":"true","---地图优化---":"","角色生命变化时是否刷新":"true","角色魔法变化时是否刷新":"true","角色怒气变化时是否刷新":"false","---字体---":"","中文模式的字体":"SimHei, Heiti TC, sans-serif","日韩模式的字体":"Dotum, AppleGothic, sans-serif","默认模式的字体":"GameFont, Verdana, Arial, Courier New","默认字体大小":"28","默认对齐方式":"left","---窗口---":"","是否使用数字逗号分割":"true","默认行高":"36","默认图标大小":"32","默认图标高度":"32","默认脸图宽度":"144","默认脸图高度":"144","默认窗口内边距":"18","默认文本内边距":"6","默认窗口透明度":"192","YEP条是否描边":"true","默认YEP条行高":"6","是否绘制YEP怒气条":"true","---窗口颜色---":"","颜色-普通文本":"0","颜色-系统文本":"16","颜色-角色垂死":"17","颜色-角色死亡":"18","颜色-YEP条背景色":"19","颜色-生命条左":"20","颜色-生命条右":"21","颜色-魔法条左":"22","颜色-魔法条右":"23","颜色-魔法消耗":"23","颜色-强化":"24","颜色-弱化":"25","颜色-怒气条左":"28","颜色-怒气条右":"29","颜色-怒气消耗":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a 战斗引擎核心☁️","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"1","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"true","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"用户","Ally Help Text":"队友","Allies Help Text":"全体队友","Enemy Help Text":"敌人","Enemies Help Text":"全体敌人","All Help Text":"%1","Random Help Text":"%2 随机 %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"《界面设置》","status":true,"description":"","parameters":{}},
{"name":"MadeWithMv","status":true,"description":"显示游戏引擎厂商","parameters":{"Show Made With MV":"false","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"MOG_MenuCursor","status":true,"description":"鼠标指针样式","parameters":{"Slide Animation":"true","Cursor X-axis":"0","Cursor Y-axis":"0","Frames Animation":"false","Max Frames":"4","Animation Speed":"7"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.01 按键设置☁️","parameters":{"---General---":"","Command Name":"键盘配置","Button Events":"1 2 3","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"《功能优化》","status":true,"description":"","parameters":{}},
{"name":"Galv_NewItemIndication","status":true,"description":"获取新物品时标记出来","parameters":{"New Icon Image":"newIcon","Icon X Offset":"0","Icon Y Offset":"0"}},
{"name":"LiuYue_AutoSave","status":false,"description":"v1.03 liuYue_AutoSave 自动存档","parameters":{"---设置---":"","IsSetUp":"true","---游戏设置---":"","AutoSaveId":"1","IsOverLoad":"false","SaveText":"自动存档","TextColor":"#ffff66","BorderColor":"rgba(0,0,0,0.5)","---音效---":"","NotSaveSound":"Buzzer1","NotSaveVolume":"100","NotSavePitch":"100","NotSavePan":"0","AutoSaveSound":"Decision1","AutoSaveVolume":"100","AutoSavePitch":"100","AutoSavePan":"0","---存储类型---":"","IsFrameSave":"true","FrameSave":"3600","IsInMapSave":"false","IsOutMenuSave":"false","IsOutBattleSave":"false","IsSVValueSave":"false","SwitchCheckArr":"","VariableCheckArr":"","---存档限制---":"","SaveOnceMaxFrame":"0","---界面---":"","SavePicture":"","PicPosition":"right-down","PicPosOfx":"0","PicPosOfy":"0","PicOp":"255","PicFadeIn":"10","PicWait":"60","PicFadeOut":"10"}},
{"name":"YEP_MessageCore","status":true,"description":"文本自动换行","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"《战斗界面优化》","status":false,"description":"","parameters":{}},
{"name":"YEP_EnemyLevels","status":true,"description":"v1.08 敌人等级☁️","parameters":{"---General---":"","Show Level":"true","Level Format":"Lv%1 %2","Minimum Level":"1","Maximum Level":"9999","Maximum Cap":"9999","Preserve Rate":"true","---Level Setup---":"","Default Type":"5","Positive Fluctuation":"0","Negative Fluctuation":"0","---MaxHP Growth---":"","MaxHP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxHP Rate Growth":"0.15","MaxHP Flat Growth":"50.0","---MaxMP Growth---":"","MaxMP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MaxMP Rate Growth":"0.10","MaxMP Flat Growth":"10.0","---ATK Growth---":"","ATK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","ATK Rate Growth":"0.05","ATK Flat Growth":"2.5","---DEF Growth---":"","DEF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","DEF Rate Growth":"0.05","DEF Flat Growth":"2.5","---MAT Growth---":"","MAT Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MAT Rate Growth":"0.05","MAT Flat Growth":"2.5","---MDF Growth---":"","MDF Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","MDF Rate Growth":"0.05","MDF Flat Growth":"2.5","---AGI Growth---":"","AGI Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","AGI Rate Growth":"0.05","AGI Flat Growth":"2.5","---LUK Growth---":"","LUK Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","LUK Rate Growth":"0.05","LUK Flat Growth":"2.5","---EXP Growth---":"","EXP Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","EXP Rate Growth":"0.15","EXP Flat Growth":"10.0","---Gold Growth---":"","Gold Formula":"base * (1 + (level - 1) * rate) + (flat * (level - 1))","Gold Rate Growth":"0.15","Gold Flat Growth":"10.0"}},
{"name":"YEP_X_MapEnemyLevels","status":true,"description":"v1.00 地图敌方等级★","parameters":{}},
{"name":"YEP_ExtraEnemyDrops","status":true,"description":"v1.08 额外敌群掉落★","parameters":{}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.16 敌群侧视战斗图☁️","parameters":{"---全局---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---阴影---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---呼吸---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.04","HP Link Breathing":"false","---浮动---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---运动---":"","Attack Motion":"thrust","Weapon Image Index":"0","空闲动作":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---武器---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"Olivia_BattleSysOTB","status":true,"description":"<BattleSysOTB> for RPG Maker MV version 1.6.1.","parameters":{"":"","ATTENTION!!!":"READ THE HELP FILE","Warning OTB":"Requires YEP_BattleEngineCore","OTB Force Battle System":"true","OTB Mechancs":"","OTB Mechanics Action Speed Convert":"true","OTB Mechanics Buff Debuff AGI Convert":"true","OTB Mechanics Added Action Times":"true","OTB Mechanics Action Time Order Randomize":"true","OTB Mechanics Enable Party Window":"false","OTB Mechanics Escape Actor Window":"true","OTB Mechanics Remove Restrict Current":"true","OTB Mechanics Remove Restrict Next":"true","OTB Mechanics Static AGI Calculation":"true","OTB Mechanics Stun Wakeup First":"true","OTB Mechanics Stun Wakeup Clamp":"true","OTB Visuals":"","OTB Sprite Background Colors":"","OTB Background Actor Color":"rgba(128, 160, 255, 0.6)","OTB Background Enemy Color":"rgba(255, 100, 80, 0.6)","OTB Turn Order Display":"","OTB Display X":"48","OTB Display Y":"618","OTB Display Help Window Move Y":"618","OTB Display Help Window Move Speed":"16","OTB Display Current Text":"CURRENT","OTB Display Current Size":"20","OTB Display Next Text":"NEXT","OTB Display Next Size":"20","OTB Sprite Properties":"","OTB Sprite Move Duration":"20","OTB Sprite Opacity Speed":"16","OTB Battle Scene Properties":"","OTB Help Window Y":"92","OTB Log Window Y":"92"}},
{"name":"Olivia_SideBattleUI","status":true,"description":"<SideBattleUI> for RPG Maker MV version 1.6.1.","parameters":{"":"","ATTENTION!!!":"READ THE HELP FILE","Warning Side Battle UI":"Requires YEP_BattleEngineCore","Side Battle Position Actors":"true","Side Battle Actor X":"Graphics.boxWidth * 0.5 + 128 + index * 64","Side Battle Actor Y":"Graphics.boxHeight * 0.7 - ($gameParty.maxBattleMembers() - index - 1) * 48","Side Battle Position Enemies":"true","Side Battle Enemy X":"x+200","Side Battle Enemy Y":"Graphics.boxHeight * 0.2 - 64 + y","Side UI Status Window":"","Side Battle Ceiling Distance":"0","Side Battle Gauge Height":"6","Side Battle Gauge Width":"160","Side Battle Status Move Active":"48","Side Battle Status Move Selected":"24","Side Battle Status Move Speed":"4","Side Battle Status States Max":"4","Side Battle Status Scale":"0.6","Side Battle Status Width":"200","Side UI Window Settings":"","Side Battle Dim Help Window":"true","Side Battle Command Window Width":"160","Side Battle List Window Max":"8","Side Battle List Window Width":"320","Side Battle Command Window Scale":"0.8","Side Battle Window Masking":"false"}},
{"name":"Olivia_WeaknessDisplay","status":true,"description":"<WeaknessDisplay> for RPG Maker MV version 1.6.1.","parameters":{"":"","ATTENTION!!!":"READ THE HELP FILE","Weakness Element Data":"","Shown Elements":"[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\"]","Element Icons":"[\"97\",\"107\",\"96\",\"99\",\"102\",\"101\",\"64\",\"65\",\"66\",\"69\",\"70\",\"71\"]","Unknown Weakness Icon":"14","Weakness Window Data":"","Weakness Always Show":"true","Weakness Hide Duration":"180","Weakness Show Break Shield":"true","Weakness Stun Duration":"false","Weakness Show HP Gauge":"true","HP Gauge Minimum Width":"80","HP Gauge Padding":"25","Weakness Show Name":"true","Name Font Size":"18","50% HP Color":"17","25% HP Color":"2","Weakness Show States":"true","Small Weakness Icons":"true","Weak Icon Size":"0.6"}},
{"name":"Olivia_VictorySequenceUI","status":true,"description":"<VictorySequenceUI> for RPG Maker MV version 1.6.1.","parameters":{"":"","ATTENTION!!!":"READ THE HELP FILE","Victory Screen Audio":"","Victory Screen Level Sound":"Skill2","Victory Screen Level Sound Volume":"90","Victory Screen Level Sound Pitch":"100","Victory Screen Level Sound Pan":"0","Victory Screen BGM":"Ship3","Victory Screen BGM Volume":"90","Victory Screen BGM Pitch":"100","Victory Screen BGM Pan":"0","Victory Screen Transition":"","Victory Screen Transition Power":"8","Victory Screen Hide Window Delay":"500","Victory Screen Display Delay":"1000","Victory Screen Zoom":"true","Victory Screen Zoom X":"700","Victory Screen Zoom Y":"460","Victory Screen Zoom Scale":"2.0","Victory Screen Zoom Duration":"300","Victory Screen Background":"","Victory Screen Background Dimmer Height":"0.2","Victory Screen Background Side Thickness":"96","Victory Screen Background Middle Thickness":"96","Victory Screen Background Text Items":"Items Obtained","Victory Screen Background Text Items Font Size":"36","Victory Screen Background Text Victory":"Victory!","Victory Screen Background Text Victory Font Size":"60","Victory Screen Rewards":"","Victory Screen Rewards Category Font Size":"20","Victory Screen Rewards Category Font Color":"8","Victory Screen Rewards Results Font Size":"28","Victory Screen Rewards Results Font Color":"0","Victory Screen Status Windows":"","Victory Screen Status Actor Font Size":"20","Victory Screen Status Level Font Size":"20","Victory Screen Status Level Format":"Lv.%1","Victory Screen Status JP Font Size":"16","Victory Screen Status EXP Font Size":"16","Victory Screen Status Update Duration":"180","Victory Screen Status Current EXP Font Size":"20","Victory Screen Status Current EXP Font Color":"0","Victory Screen Status Next EXP Font Size":"18","Victory Screen Status Next EXP Font Color":"8","Victory Screen Status Exp Gauge Height":"18","Victory Screen Status Exp Gauge Color 1":"30","Victory Screen Status Exp Gauge Color 2":"31","Victory Screen Status Level Up Text":"Level Up!","Victory Screen Status Level Up Font Size":"36","Victory Screen Status Level Up Color":"17","Victory Screen Continue Button":"","Victory Screen Continue Duration":"180","Victory Screen Continue Text":"Press \\c[27]Z\\c[0] or \\c[27]X\\c[0] to continue"}},
{"name":"MOG_BossHP","status":true,"description":"(v1.4) Displays an HP meter for the bosses.为BOSS增加顶部HP血条","parameters":{"BHP Shake Effect":"true","BHP HP Number Visible":"true","BHP Name Font Size":"18","BHP Layout X-Axis":"40","BHP Layout Y-Axis":"30","BHP Meter X-Axis":"3","BHP Meter Y-Axis":"3","BHP Number X-Axis":"460","BHP Number Y-Axis":"32","BHP Name X-Axis":"32","BHP Name Y-Axis":"-5"}},
{"name":"《商店拓展》","status":true,"description":"","parameters":{}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.05 商店菜单核心☁️","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","Status Window":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"YEP_X_MoreCurrencies","status":true,"description":"v1.04 多货币系统☁️","parameters":{"---全局---":"","Currency Padding":"10","Font Size":"20","---代理---":"","Copy Name":"true","Copy Icon":"true","Copy Help":"true","Copy Traits":"true","Copy Parameters":"true","---后果---":"","Gold as Item":"true","Gold Icon":"314"}},
{"name":"LiuYue_GainItemTips","status":true,"description":"v1.03 LiuYue_GainItemTips 获取道具显示","parameters":{"---插件---":"","IsPluginEnable":"true","---窗口---":"","BasePos":"left","WindowOfx":"0","WindowOfy":"200","WindowW":"400","LineNum":"3","WindowShowFrame":"60","WindowOpacity":"255","WindowFontSize":"20","WindowOpenSpeed":"32","WindowBkPic":"","BkOpFollowOpenSpeed":"true","---金币---":"","IsGoldShow":"true","AddGFormat":"获得金币","SubGFormat":"失去金币","GTextColor":"#ffffff","GIconID":"313","GSERank":"0","GLRank":"0","---图标---":"","IconScale":"1","IsIconFlash":"true","IconFlashFrame":"10","---文本---":"","AddFormat":"获得 [\"%1\"]","SubFormat":"失去 [\"%1\"]","NumberFormat":"x %1","---音效---":"","EarnSound":"Sound1","EarnVolume":"100","EarnPitch":"100","EarnBGSPan":"0","GSound":"Coin","GVolume":"100","GPitch":"100","GBGSPan":"0"}},
{"name":"SE_MapSence","status":true,"description":"设置地图场景样式","parameters":{"--SysCommandWindow--":"","SysCommandWindow_BackgroundImage":"sysCommandBG","SysCommandWindow_X":"780","SysCommandWindow_Y":"620","SysCommandWindow_W":"500","SysCommandWindow_H":"100"}},
{"name":"SE_ItemSence","status":true,"description":"设置物品场景样式","parameters":{"--itemSence--":"","ItemSence_BackgroundImage":"itemSenceBG","ItemSence_X":"200","ItemSence_Y":"200","ItemSence_W":"600","ItemSence_H":"600"}}
];
