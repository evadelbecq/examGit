
// Simple in-memory task list
let tasks = [];
let nextId = 1;


const getTasks = () => {
  return tasks;
}

const addTask = (task) => {
  tasks.push({ id: nextId++, name: task, done: false });
}

function toggleTask(id){
  tasks[tasks.indexOf(tasks.find((task) => task.id = id))].done = true;
}

const reset = () => {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask, toggleTask };
