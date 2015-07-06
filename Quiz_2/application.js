function processForm () {
	var firstname;
	var lastname;
	var city;
	var state;
	var webcomment;
	
	firstname = document.getElementById("firstname");
	lastname = document.getElementById("lastname");
	city = document.getElementById("city");
	state = document.getElementById("state");
	managementskill1 = document.getElementById("webcomments");
	content = document.getElementById("output");
	
	
	content.innerText = "Hello " + firstname.value + " your lastname is: " + lastname.value + " Your from " + city.value + ", " + state.value + " Comments " + webcomments.value;
}