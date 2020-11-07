var scriptName = "AAC4HighJump"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var cnt = 0;
function AAC4HighJump() {
    this.getName = function() {
        return "AAC4HighJump";
    };

    this.getDescription = function() {
        return "AAC 4 Highjump";
    };
	
    this.getCategory = function() {
        return "Fun";
    };
    this.onUpdate = function() {
	if (mc.thePlayer.onGround) cnt = mc.thePlayer.posY;
	if (mc.gameSettings.keyBindJump.isKeyDown() && mc.thePlayer.posY - cnt <= 8) {
		mc.thePlayer.motionY = 0.5;
		mc.timer.timerSpeed = 0.15;
	}
	else {
		mc.timer.timerSpeed = 1;
	}
    };
    this.onEnable = function() {
    };
    this.onDisable = function() {
	mc.timer.timerSpeed = 1;
    };
}

var AAC4HighJump = new AAC4HighJump();
var AAC4HighJumpClient;
function onEnable() {
    moduleManager.registerModule(AAC4HighJump);
};

function onDisable() {
    moduleManager.unregisterModule(AAC4HighJumpClient);
};
