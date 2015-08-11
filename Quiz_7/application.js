function printText () {
	var Input1 = document.getElementById("Input1");	var Input2 = document.getElementById("Input2");	var Input3 = document.getElementById("Input3");	var content = document.getElementById("output");
	content.innerHTML = "";
	for(var i = Input1.value; i < Input2.value; i++) {
		if(i % Input3.value == 0) {
		content.innerHTML += "<div>" + i + "</div>";
		}
		
	}
}
