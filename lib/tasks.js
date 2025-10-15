
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

const createTask = (task) => {
  tasks.push({ id: nextId, name: task, done: false });
  nextId++;
}


function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset, createTask };
