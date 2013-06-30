function start (window, closure) {
	window.col = closure;
	

	col.COError = function _Error (descr) {
		if (!this instanceof _Error) return new _Error(descr);
		
		alert(descr);
		return false;
	};
	
	col.CLOUD_OBJECT_STRUCTURE_ONLY = function _CLOUD_OBJECT_STRUCTURE_ONLY () {
		if (arguments.callee.caller.arguments[0] === _CLOUD_OBJECT_STRUCTURE_ONLY)
			throw ("ABSTRACT");
	};
	
	
		
	
	with (closure) {
		include(prefix+"CObject.js", function () {
			// Invoke CObject constructor
			col.CObject.call(this);
			col.prototype = new col.CObject(CLOUD_OBJECT_STRUCTURE_ONLY);
			
			include(prefix+"client/Addon.js")
		});
	}
	
};
