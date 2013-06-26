

new (function _cloudObjectsLayer (window) {
	
	var closure = this;
	
	var where ="";
	if (col) {
		if (col.root && col.root !== "") {
			where = col.root;
			this.root = col.root;
		}
		if (col.dirname && col.dirname !== "") {
			where = (where !== "" ? where + "/":"") + col.dirname;
			this.dirname = col.dirname;
		}
	}
	
	closure.prefix = (where?where+"/":"");

/* 1	*/
// Organize existing webpage data for strap-in
//	any load event handlers need to be captured and executed after col is ready
//	additionally, a structure named col might exist already with important startup
//	parameters like the root of the library
	var existing = {onloads:(new Array()),col:window.col};

	if (typeof window.onload === "function")
		existing.onloads.push(window.onload);

	/* The world's not ready for this yet:
	if (typeof document.body.onload === "function" ||
			(typeof document.body.onload === "text" && document.body.onload !== "")
		) {
		existing.onloads.push(document.body.onload);
		document.body.onload = "";
	}
	*/

/* 2	*/
// A simple function that inserts a script into the page head and executes a function on its completion
	closure.include = function _include (uri, callback, errback) {
		
		// <script ... >
		var insertion = document.createElement("SCRIPT");
		insertion.setAttribute("language", "javascript");
		insertion.setAttribute("type", "text/javascript");
		insertion.setAttribute("src", uri);
		insertion.onerror = errback;
		
		function imdone () {
			if (typeof callback === "function")	callback(uri);
		};
		
		// Map this callback into Internet Exploder
		if (navigator.userAgent.indexOf("MSIE") >= 0) {
			if (navigator.userAgent.indexOf("MSIE 9") >= 0) {
				insertion.onactivate = imdone;	// [?]	This seems to work
			}
			else {
				insertion.onreadystatechange = imdone;	// [!] <= IE 8 
			}
		}
		else insertion.onload = imdone;
		
		// <head>
		//   + <script>   <---- put
		document.head.appendChild(insertion);
	};



/* 4	*/
/*
 * This closure exists at an uncertain point between after cloud-objects-layer.js is loaded and before window.onload
 * If the implementation webpage hasn't set a col.root or .dirname we'll have to make assumptions.
 */

	// Include col.js and wait for completion...
	with (closure) {
		include(prefix+"col.js",
			function () {
				start(window, closure);
		});
	}
})(window);