// Require col object
if (window && window.col) {
	
window.col.test = new (function _test () {
	var test = this;
	
	test.run = function _run (tests) {
		/* Where tests is an object in this vague form:
		*	{on:[ref], test:[func] [,test:[func],...], result:[ref][, on:[ref], test:[func] [,test:[func],...], result:[ref]]}
		*	You can run multiple TESTs ON an object.  Those tests must satisfy the same result.
		*/
		if (tests && typeof tests === "object") {
			
		}
	};
})();
// Require col object
} else throw "!";
