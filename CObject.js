// Require col object
if (window && window.col) {

window.col.CObject = function _CObject () {
	var CObject = this;
	
	CObject.State = function _State (name) {
		if (!this instanceof _State)	return col.COError();
		var State = this;
		
		State.getName = function _getName () { return name; };
	};
	
	CObject.states = new (function _state_mgmt () {
		var states = this;
		var current = null;
		
		var listeners = {};
		
		function handleState () {
			var st = current.getName();
			if (listeners[st]) {
				for (var i = 0; listeners[st][i]; i ++) {
					listeners[st][i]();
				}
			}
		};
		// State 'name' exists?
		states.hasState = function _hasState (name) {
			if (typeof states[name] !== "undefined" && states[name] instanceof CObject.State) {
				return true;
			}
			else return false;
		};
		
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
			if (states.hasState(name)) {
				current = states[name];
				handleState();
				return true;
			}
			else return col.COError("There is no state named '"+arguments[i]+"' on this Cloud Object.");
		};
		
		states.remove = function _remove (name, switchTo) {
			if (states.hasState(name)) {
				if (current === states[name]) {
					if (switchTo) switchTo = states.select(switchTo);
					if (!switchTo) {
						// TODO: decide  a fault path for removing states etc.
					}
				}
				delete states[name];
				return true;
			} else col.COError("There is no state [to delete] named '"+arguments[i]+"' on this Cloud Object.");
		};
		
		states.addListener = function _addListener (state, onState) {
			if (states.hasState(state)) {
				if (!listeners[state]) listeners[state] = new Array();
				
				if (typeof onState === "function") {
					listeners[state].push(onState);
					return onState;
				}
			}
			else return false;
		};
		
		
		states.removeListener = function _removeListener (state, onState) {
			if (state) {
				if (typeof onState === "function") {
					for (var l = 0; listeners[state][l]; l ++) {
						if (listeners[state][l] === onState) listeners[state].slice(l);
					}
					return true;
				}
				else {
					delete listeners[state];
					return true;
				}
			}
			return false;
		};
	})();
	
	try {new CLOUD_OBJECT_STRUCTURE_ONLY;} catch (error) {
		
	}
};

// Require col object
} else throw "!";
