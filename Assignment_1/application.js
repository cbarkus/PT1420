function processForm () {
	var firstname;
	var lastname;
	var city;
	var state;
	var managementskill1;
	var managementskill2;
	var technicalskill1;
	var technicalskill2;
	var communicationskill1;
	var discriptiveword;
	var content
	
	firstname = document.getElementById("firstname");
	lastname = document.getElementById("lastname");
	city = document.getElementById("city");
	state = document.getElementById("state");
	managementskill1 = document.getElementById("managementskill1");
	managementskill2 = document.getElementById("managementskill2");
	technicalskill1 = document.getElementById("technicalskill1");
	technicalskill2 = document.getElementById("technicalskill2");
	communicationskill1 = document.getElementById("communicationskill1");
	discriptiveword = document.getElementById("discriptiveword");
	content = document.getElementById("output");
	
	
	content.innerText = "Hello " + firstname.value + " your lastname is: " + lastname.value + " Your from " + city.value + ", " + state.value + " Your job skills are " + managementskill1.value + ", " + managementskill2.value + ", " + technicalskill1.value + ", " + technicalskill2.value + ", " + communicationskill1.value + " A word to discribe you is "
+ discriptiveword.value;
}