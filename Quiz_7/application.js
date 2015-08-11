function printText () {
	var start = document.getElementById("start");	var end = document.getElementById("end");	
	var divisible = document.getElementById("divisible");	var content = document.getElementById("output");
	content.innerHTML = "";
	for(var i = start.value; i < end.value; i++) {
		if(i % divisible.value == 0) {
		content.innerHTML += "<div>" + i + "</div>";
		}
		
	}
}
