const { count } = require("console");
const { get } = require("http");

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
  const task = tasks.find((task) => task.id === id);
  const index = tasks.indexOf(task);
  if (task) {
    tasks[index].done = !tasks[index].done;
    return task;
  }
  else {
    throw new Error('Task not found');
  }
}

const countDone = () => {
  const doneTasks = tasks.filter(task => task.done);
  return doneTasks.length;
}

const reset = () => {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, addTask, toggleTask, countDone };
