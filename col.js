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
	
	
	var lastDirIndex = window.location.pathname.lastIndexOf("/");
	if (lastDirIndex > (-1) ) {
		var filename = window.location.pathname.substr(lastDirIndex+1);
		if (filename === "") filename = "default";
		
		col.getData(filename+".xml", false,
			function ondone (xhr) {
				
			},
			function onerr (ehr) {
				
			}
		);

	}
	
	
	with (closure) {
		include(prefix+"CObject.js", function () {
			// Invoke CObject constructor
			col.CObject.call(this);
			col.prototype = new col.CObject(CLOUD_OBJECT_STRUCTURE_ONLY);
			
			include(prefix+"client/Addon.js")
		});
	}
	
};
