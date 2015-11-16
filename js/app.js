//user interaction doesn't provide desired results
//add user interactivity to manage daily task

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; //first button , add ID this is brittle
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); // #incomplete-tasks
var completeTasksHolder = document.getElementById("completed-tasks"); // #completed-tasks

//new task list item
var creatNewTaskElement = function(taskString) {

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
  //each element, needs modified and appended
  return listItem;
}
//add task
var addTask = function() {
  console.log("Add Task...");
  //create task- new li with input from #newTask:
  var listItem = creatNewTaskElement("some new task");

  //append listItem to incompleteTasksHolder
}

//edit task
var editTask = function() {
  console.log("Edit task...");
  //when the edit button is clicked
    //if the class of parent is .editMode
      //switch from .editMode
      //label text becomes the input's value
    //else
      //switch to .editMode
       //input value becomes the label's txt
  //toggle .editMode on parent
}

//delete task
var deleteTask = function() {
  console.log("delete task...");
  //when delete button is clicked
    //remove parent li from ul
}

//complete task
var taskComplete = function() {
  console.log("Task complete...");
  //when checkbox is checked
  //appened task li to #completed-tasks
}

//mark as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  //when checkbox is unchecked
    //append to #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events...");
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

//set the click handler to the addTask function
addButton.onclick = addTask;

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







