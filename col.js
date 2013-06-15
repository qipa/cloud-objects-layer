
function start (window, col) {
	window.col = new (function _col (window, col){
		if (col && col.root)	this.root = col.root;
		else					this.root = "";
		if (col && col.dirname)	this.dirname = col.dirname;
		else					this.dirname = "cloud-objects-layer";		
		var col = this;
		
		col.COError = function _Error (descr) {
			if (!this instanceof _Error) return new _Error(descr);
			
			alert(descr);
			return false;
		};
		
	})(window, col);
};
