
with (col) {
	var subject = new CObject ();
	
	var results = test.run({
		on:subject,
		description:"CObject is an ECMA Object",
		tests:[function () {
			return (this.on instanceof Object);
		}],
		result:true
	});
	
	
	
}