//Define Global
var toDoList = [];

function loadToDoList() {
	if(localStorage.toDoList) {
	toDoList = JSON.parse(localStorage.toDoList);
	changeDisplay();
	}

}

function changeDisplay() {
	var list = document.getElementById("todolist");
	list.innerHTML = "";
	for(var i=0; i<toDoList.length; i++){
		list.innerHTML += '<li class="list-group-item">' + toDoList[i] + 
		'<div class="btn-group-xs pull-right">' +
		'<button class="btn btn-warning delete" onclick="javascript:removeToDo(' + i +')">' + 
		'Delete</button>' + 
		'<button class="btn btn-default edit" onclick="javascript:editToDo(' + i +')">' +
		'Edit</button>' +
		'</div>' +
		'</li>';
		}	
		localStorage.toDoList = JSON.stringify(toDoList);
}

function editToDo(itemToEdit) {
	var newList = [];
	for(var i=0;i<toDoList.length;i++) {
		if(i === itemToEdit) {
			var editedToDo = prompt (toDoList[i]);
			newList.push(editedToDo);
		}else{
			newList.push(toDoList[i]);
		}
	}
	toDoList = newList;
	changeDisplay();
}

function removeToDo(itemToRemove) {
	var newList = [];
	for(var i=0;i<toDoList.length;i++) {
		if( i !== itemToRemove) {
			newList.push(toDoList[i]);
		}
		
	}

}


function addToDo() {
	var tmpItem;
	var newToDo = document.getElementById("todonew");	tmpItem = newToDo.value;
	if(tmpItem === "") {
		alert("You didn't put anything in to add");
		return;
		
	}

	toDoList.push(tmpItem);
	
	changeDisplay();

	newToDo.value = "";
	newToDo.select();
}