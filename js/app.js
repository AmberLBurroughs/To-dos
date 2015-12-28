//user interaction doesn't provide desired results
//add user interactivity to manage daily task

var pageLoad = function(){

  //create nodes
  var addButton = document.getElementById("addIt"); //first button
  var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // #incomplete-tasks
  var completeTasksHolder = document.getElementById("completed-tasks"); // #completed-tasks

  //create page load function
  //set the click handler to the addTask function
  addButton.addEventListener("click", addTask);
  addButton.addEventListener("click", ajaxRequest);

  //cycle over inCompleteTasksHolder ul li
  for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to li's children
    bindTaskEvents(incompleteTasksHolder.children[i], taskComplete);
  }

  //cycle over completeTasksHolder ul li
  for(var i = 0; i < completeTasksHolder.children.length; i++) {
      //bind events to li's children (taskIncomplete)
      bindTaskEvents(completeTasksHolder.children[i], taskIncomplete);
  }

}

//new task list item
var creatNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");
  //input (check box)
  var checkBox = document.createElement("input"); //checkbox
  //label
  var label = document.createElement("label");
  //input (text) for editing mode
  var editInput = document.createElement("input"); //text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");
  //each element needs modified

  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //each element needs appended
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//add task
var addTask = function() {
  var taskInput = document.getElementById("new-task"); // new task
  var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // #incomplete-tasks
  //create task- new li with input from #newTask:
  var listItem = creatNewTaskElement(taskInput.value);
  //append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);

  taskInput.value = "";
}

//edit task
var editTask = function() {

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");

  //when the edit button is clicked
  //if the class of parent is .editMode
  if(containsClass) {
      //switch from .editMode
      //label text becomes the input's value
    label.innerText = editInput.value;
  } else {
      //switch to .editMode
       //input value becomes the label's txt
    editInput.value = label.innerText;
  }
  //toggle .editMode on parent
  listItem.classList.toggle("editMode");

}

//delete task
var deleteTask = function() {

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //remove parent li from ul
  ul.removeChild(listItem);
}

//complete task
var taskComplete = function() {
  //when checkbox is checked
  //appened task li to #completed-tasks
  var listItem = this.parentNode;
  var completeTasksHolder = document.getElementById("completed-tasks"); // #completed-tasks
  completeTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//mark as incomplete
var taskIncomplete = function() {
  //append to #incomplete-tasks
  var listItem = this.parentNode;
  var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // #incomplete-tasks
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind delete task to delete button
  deleteButton.onclick = deleteTask;
  //bind checkBoxEventHandler to checkbox (taskComplete)
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log("AJAX request");
}

// run this on page load to bind these functions to
// elements that are already on the page!
pageLoad();
