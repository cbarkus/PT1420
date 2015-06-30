function addToDo() {
	var toDoList = [];
	var list
	list = document.getElementById("todolist");	
	toDoList[0] = document.getElementById("todonew").value;
	
	list.innerHTML += '<div class="item">' + toDoList[0] + '</div>';
	

	
}