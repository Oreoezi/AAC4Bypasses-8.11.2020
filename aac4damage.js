var scriptName = "AAC4Damage"; 
var scriptVersion = 1.0;
var scriptAuthor = "Oreoezi"; 
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
function AAC4Damage() {
    this.getName = function() {
        return "AAC4Damage";
    };
    this.getDescription = function() {
        return "AAC Damage";
    };
    this.getCategory = function() {
        return "Fun";
    };
    this.onPacket = function(event) {	
	var packet = event.getPacket();
	if (packet instanceof C03PacketPlayer) packet.onGround = false;
    }
    this.onUpdate = function() { 
	if(mc.thePlayer.onGround) {
		mc.thePlayer.jump();
	}
	
    };
    this.onEnable = function () {
    };
    this.onDisable = function() {
    };
}

var aac4Damage = new AAC4Damage();
var aac4DamageClient;
function onEnable() {
    moduleManager.registerModule(aac4Damage);
};

function onDisable() {
    moduleManager.unregisterModule(aac4DamageClient);
};

