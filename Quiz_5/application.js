function printText () {
	var Input;
		
		Input = document.getElementById("Input");	var content = document.getElementById("output");
	content.innerHTML = "";
	for(var i = 0; i<100; i++) {
		content.innerHTML += "<div>" + Input.value + "</div>";
	}
}
