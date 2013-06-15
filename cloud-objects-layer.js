
(function _cloudObjectsLayer (window) {
var closure = this;
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
// A simple function that includes a script, and 
function include (uri, callback) {
	
	// <script ... >
	var insertion = document.createElement("SCRIPT");
	insertion.setAttribute("language", "javascript");
	insertion.setAttribute("type", "text/javascript");
	insertion.setAttribute("src", uri);
	
	function imdone () {
		if (typeof callback === "function")	callback();
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

/* 3	*/
var where = "cloud-objects-layer";	// Probably here
if (typeof col !== "undefined") {
	if (typeof col.root === "string" && col.root !== "")
		where = col.root + "/" + where;
	if (typeof col.dirname === "string")
		where = col.root?(col.root+"/"):""+ col.dirname;
}
// Include col.js and wait for completion...
include(where?where+"/":""+"col.js", function yay () {alert("Yay! ur a dipshit");});

})(window);