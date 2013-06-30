
if (!col && !col.CObject) throw "Error referencing Addon.js";

col.Addon = function _Addon () {
	var Addon = this;
	
	with (col) {
		CObject.call(Addon);
	}
	
	try { new CLOUD_OBJECT_STRUCTURE_ONLY } catch (abstract) {
		Addon.states.add("refernced", "loading", "starting", "completed");
	}
};

with (col) {
	Addon.prototype = new CObject(CLOUD_OBJECT_STRUCTURE_ONLY);
	Addon.prototype.constructor = Addon;
}
