
// Require col object
if (window && window.col) {

window.col.CObject = function _CObject () {
	var CObject = this;
	
	CObject.State = function _State (name) {
		if (!this instanceof _State)	return col.COError();
		var State = this;
		
	};
	
	CObject.states = new (function _state_mgmt () {
		var states = this;
		var current = null;
		
		// As long as myCloudObject.states.StateName isn't defined, create a state
		states.add = function _add (name) {
			for (var i = 0; arguments[i]; i++) {
				if (typeof states[arguments[i]] === "undefined") {
					states[arguments[i]] = new CObject.State(arguments[i]);
					
					/*if (!current) USE SELECT METHOD TO set current and invoke state handlers
						current = states[arguments[i]];*/
				}
				else return col.COError("Cannot use '"+arguments[i]+"' as a state-name.");
			}
			return true;
		};
		
		states.select = function _select (name) {
			if (typeof states[name] !== "undefined" && states[name] instanceof CObject.State) {
				current = states[name];
				return true;
			}
			else return col.COError("There is no state named '"+arguments[i]+"' on this Cloud Object.");
		};
		
		states.remove = function _remove (name, switchTo) {
			if (typeof states[name] !== "undefined" && states[name] instanceof CObject.State) {
				if (current === states[name]) {
					if (switchTo) switchTo = states.select(switchTo);
					if (!sitchTo) {
						// TODO: decide  a fault path for removing states etc.
					}
				}
				delete states[name];
				return true;
			} else col.COError("There is no state [to delete] named '"+arguments[i]+"' on this Cloud Object.");
		};
	})();
};

// Require col object
} else throw "!";