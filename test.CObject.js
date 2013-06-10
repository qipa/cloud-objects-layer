
with (col) {
	var subject = new CObject ();
	
	test.run({
		on:subject,
		test:function () {
			return (this.on instanceof Object);
		},
		result:true
	});
	
}