

window.onload = function () {
	
test = new (function _test () {
	var test = this;
	
	test.error = new (function _badtest () {var error = this; error.toString = function () {return "this test could not be performed";};} )();
	
	test.run = function _run (group) {
		/* Where tests is an object in this vague form:
		*	{on:[ref], tests:[func,..], result:[ref]}
		*	You can run multiple TESTs ON an object.  Those tests must satisfy the same RESULT.
		*	If no RESULT is specified, true is assumed.
		*/
		if (group && typeof group === "object") {
			if (typeof group.result === "undefined") group.result = true;
			if (group.on && typeof group.tests === "object") {
				for (var t in group.tests) {	// Look at the tests
					if (typeof group.tests[t] === "function") {	// Is it a test?
						group.tests[t] = group.tests[t]();		// Do the test.
						group.tests[t] = (group.tests[t] === group.result);	// Pass or fail
					}
					else { // In the tests list, but who knows why or what
						group.tests[t] = test.error;
						if (!group.errors)
							group.errors = new Array();
						group.errors.push(group.tests.splice(t))
					}
				}
				test.log(group);
				return group;
			}
		}
	};
	var log = new Array();
	
	test.log = function _log (group) {
		log.push(group);
		var x = document.getElementById("inPageTestResults");
		var y = document.createElement("DIV");
		y.innerText = group.tests.toString();
		x.appendChild(y);
	};
	
	for (var item in col) {
		try {
			col.include("test."+item+".js");
		}
		catch (e) {
			
		}
	}
	
})();


}

