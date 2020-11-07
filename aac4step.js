var scriptName = "AAC4Step"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var ticks = 0;
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var cacheY;
var shouldstep = false;
function AAC4Step() {
    this.getName = function() {
        return "AAC4Step";
    };

    this.getDescription = function() {
        return "AAC4Step";
    };
	
    this.getCategory = function() {
        return "Fun";
    };
    this.onPacket = function(event) {
    };
    this.onDisable = function() {
	mc.timer.timerSpeed = 1;
	mc.thePlayer.speedInAir = 0.02;
    }
    this.onUpdate = function() {
	if (shouldstep) {
		mc.timer.timerSpeed = 0.9 + mc.thePlayer.ticksExisted % 4 / 20;
	}
	if (mc.thePlayer.onGround) {
		shouldstep = false;
		mc.timer.timerSpeed = 1;
	}
	if (mc.thePlayer.isCollidedHorizontally && MovementUtils.isMoving() && mc.thePlayer.onGround) {
		cacheY = mc.thePlayer.posY;
		mc.thePlayer.isAirBorne = true;
		shouldstep = true;
		mc.timer.timerSpeed = 4;
		mc.thePlayer.motionY += 0.47;
		//mc.thePlayer.motionY += 0.55; //for 1.5 block step
	}
    };
}

var aac4step = new AAC4Step();
var aac4stepClient;
function onEnable() {
    moduleManager.registerModule(aac4step);
};

function onDisable() {
    moduleManager.unregisterModule(aac4stepClient);
};
