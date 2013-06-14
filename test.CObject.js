
with (col) {
	var subject = new CObject ();
	
	var results = test.run({
		on:subject,
		test:function () {
			return (this.on instanceof Object);
		},
		result:true
	});
	
	
	
}