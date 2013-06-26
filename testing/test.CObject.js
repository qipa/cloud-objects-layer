
with (col) {
	var subject = new CObject ();
	
	test.run({
		on:subject,
		description:"CObject is an ECMA Object",
		tests:[
		       function (on) {
		    	   return (on instanceof Object);
		       },
		       function (subj) {
		    	   return (typeof (subj.hasOwnProperty) === "function");
		       }
		],
		result:true
	});
	
	test.run({
		on:subject,
		description:"CObject.states.add",
		tests:[
		       function (on) {
		    	   return (on.states.add("A"));
		       },
		       function (subj) {
		    	   return (subj.states.add("B", "C", "D"));
		       },
		       function (obj) {
		    	   return (obj.states.select("A"));
		       },
		       function (obj) {
		    	   return (obj.states.select("A"));
		       },
		       function (obj) {
		    	   return (obj.states.select("B"));
		       },
		       function (obj) {
		    	   return (obj.states.select("D"));
		       }
		],
		result:true
	});
	
	
	
}