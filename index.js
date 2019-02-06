// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markComplete: function(tsk) {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? "" : " not"} been completed`);
    }
  };
  return task;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? "" : " not"} been completed`);
}



// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Change the litter substrate");
const task2 = newTask("Do laundry", "Don't forget to fold it!");
const tasks = [task1, task2];

task2.logState();
task2.markComplete();
task2.logState();