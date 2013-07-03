
if (!col && !col.CObject) throw "Error referencing Client.js";

col.Client = function _Client () {
	var Client = this;
	
	Client.language = {main:"EN", sub:"US", toString:function () { return this.main+"-"+this.sub;}};
	with (col) {
		CObject.call(Client);
	}
	
	
	try { new CLOUD_OBJECT_STRUCTURE_ONLY } catch (not_abstract) {
		Client.states.add("loading", "completed");
	}
};

with (col) {
	Client.prototype = new CObject(CLOUD_OBJECT_STRUCTURE_ONLY);
	Client.prototype.constructor = Client;
}
