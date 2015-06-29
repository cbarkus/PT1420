function processForm () {
	var name;
	
	name = document.getElementById("name");
	content = document.getElementById("output");	
	content.innerText = "Hello " + name.value;
	}