var scriptName = "AAC4LongJump"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var speedyjump = false;
var counter = 0;
function AAC4LongJump() {
    this.getName = function() {
        return "AAC4LongJump";
    };
    this.getDescription = function() {
        return "AAC LongJump";
    };
    this.getCategory = function() {
        return "Fun";
    };
    this.onPacket = function(event) {	
    }
    this.onUpdate = function() { 
	if (!mc.thePlayer.onGround) {
		counter++;
		mc.thePlayer.speedInAir = 0.02035 * (1/(mc.timer.timerSpeed));
		mc.thePlayer.motionY *= mc.thePlayer.motionY > 0 ? 1.01 : 0.98;
		mc.timer.timerSpeed = 0.15 + counter % 50 / 100;
	}
	else {
		counter = 0;
		mc.timer.timerSpeed = 1;
	}
    };
    this.onEnable = function () {
    };
    this.onDisable = function() {
	mc.thePlayer.speedInAir = 0.02;
	mc.timer.timerSpeed = 1;
    };
}

var aac4LongJump = new AAC4LongJump();
var aac4LongJumpClient;
function onEnable() {
    moduleManager.registerModule(aac4LongJump);
};

function onDisable() {
    moduleManager.unregisterModule(aac4LongJumpClient);
};

