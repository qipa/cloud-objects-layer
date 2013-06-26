
with (col) {
	var subject = new CObject (CLOUD_OBJECT_STRUCTURE_ONLY);
	
	test.run({
		on:subject,
		description:"CLOUD_OBJECT_STRUCTURE_ONLY is a unique type",
		tests:[
		       function (on) {
		    	   var a = new CLOUD_OBJECT_STRUCTURE_ONLY;
		    	   return (a instanceof CLOUD_OBJECT_STRUCTURE_ONLY);
		       }
		],
		result:true
	});
	
	test.run({
		on:subject,
		description:"any CLOUD_OBJECT_STRUCTURE_ONLY throws an ABSTRACT message when instanced from a function scope invoked with an argument[0] referencing CLOUD_OBJECT_STRUCTURE_ONLY ()",
		tests:[

		       function (subj) {
		    	   function c (CLOUD_OBJECT_STRUCTURE_ONLY) {
		    		   try { new CLOUD_OBJECT_STRUCTURE_ONLY; } catch (res) {
		    			   if (res === "ABSTACT") return true;
		    			   else return false;
		    		   }
		    		   return false;
		    	   }
		    	   return c;
		       },
		       function (subj) {
		    	   function c (CLOUD_OBJECT_STRUCTURE_ONLY) {
		    		   try { new CLOUD_OBJECT_STRUCTURE_ONLY; } catch (res) {
		    			   if (res === "ABSTACT") return true;
		    			   else return false;
		    		   }
		    		   return false;
		    	   }
		    	   return c;
		       },
		       function (subj) {
		    	   function d (CLOUD_OBJECT_STRUCTURE_ONLY) {
		    		   try { CLOUD_OBJECT_STRUCTURE_ONLY; } catch (res) {
		    			   if (res === "ABSTACT") return true;
		    			   else return false;
		    		   }
		    		   return false;
		    	   }
		    	   return d;
		       }
		],
		result:true
	});	
	
	 
	
}