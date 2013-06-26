

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
						group.tests[t] = group.tests[t](group.on);		// Do the test.
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
		var dtID = "dt"+String(log.length);
		log.push(group);
		
		var x = document.getElementById("inPageTestResults");
		var y = document.createElement("DIV");
		var z = {
				headline:document.createElement("DIV"),
				details:document.createElement("DIV")
		};
		
		// A handy more details button
		function toggleDetails (id) {
			var x = document.getElementById(id);
			if (x) {
				if (x.style.visibility === "hidden") {
					x.style.visibility = "visible";
					x.style.display = "inherit";
				}
				else if (x.style.visibility === "visible") {
					x.style.visibility = "hidden";
					x.style.display = "none";
				}
			}
		};
		z.toggleDetails = document.createElement("DIV");
		z.toggleDetails.onmouseup = function () { toggleDetails (dtID); };
		z.toggleDetails.innerText = "+ / - Details";
		z.toggleDetails.style.cursor = "pointer";
		z.toggleDetails.className = "toggle";
		
		// Organize the test a bit
		var pass = true;
		for (var t = 0; group.tests[t]; t ++) {
			if (!group.tests[t]) pass = false;
		}
		y.className = "test "+(pass?"passed":"failed");
		
		z.headline.className = "headline";
		z.headline.innerHTML = (group.description.length > 40 ? group.description.substr(0, 40)+ "..." : group.description) + " <b>"+(pass?"passed":"failed")+"</b>";
		z.headline.alt = z.headline.title = group.description;
		
		if (pass)
			z.details.innerText = String(group.tests.length)+" test (s) passed.";
		else
			z.details.innerText = String(group.tests.length)+" test (s) ran, not all passed";
		z.details.id = dtID;
		z.details.className = "details";
		z.details.style.visibility = "hidden";
		z.details.style.display = "none";
		
		// Print to screen
		x.appendChild(y);
		y.appendChild(z.headline);
		y.appendChild(z.details);
		y.appendChild(z.toggleDetails);
	};
	
	test.list = {};
	for (var item in col) {
		col.include("test."+item+".js", function (uri) {
			var testing = uri.substr(5, uri.length - 8);
			
			test.list[testing] = uri;
			
		});
	}
	
})();


}

