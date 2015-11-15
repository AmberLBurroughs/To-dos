//user interaction doesn't provide desired results
//add user interactivity to manage daily task

var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; //first button
var IncompleteTasksHolder = document.getElementById("incomplete-tasks"); // #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // #completed-tasks

//add task
var addTask = function{
  console.log("Add Task...");
  //when button clicked
  //create task- new li with input from #newTask:
    //input (check box)
    //label
    //input (text) for editing mode
    //button.edit
    //button.delete
    //each element, needs modified and appended
}

//edit task
var editTask = function{
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
var deleteTask = function{
  console.log("delete task...");
  //when delete button is clicked
    //remove parent li from ul
}

//complete task
var taskComplete = function{
  console.log("Task complete...");
  //when checkbox is checked
  //appened task li to #completed-tasks
}

//mark as incomplete
Var taskIncomplete = function{
  console.log("Task incomplete...");
  //when checkbox is unchecked
    //append to #incomplete-tasks
}



//set the click handler to the addTask function
addButton.onclick = addTask;







