//Define Global
var toDoList = [];

function changeDisplay() {
	var list = document.getElementById("todolist");	//ONLY PLACE WE CHANGE THE SCREEN
	list.innerHTML = "";
	for(var i=0; i<toDoList.length; i++) {
		list.innerHTML += '<div class="item">' + toDoList[i] + '</div>';
	}	
}

function addToDo() {
	var tmpItem;
	var newToDo = document.getElementById("todonew");	tmpItem = newToDo.value;
	
	toDoList.push(tmpItem);
	changeDisplay()
	
	newToDo.value = "";
	newToDo.select();
}