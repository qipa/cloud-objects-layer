
start = function _start (window, col) {
	window.col = new (function _col (window, col){
		if (col && col.root)	this.root = col.root;
		else					this.root = "cloud-objects-layer";
	})(window, col);
};
