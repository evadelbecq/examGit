
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}

const addTake = (task) => {
  tasks.push({ id: nextId++, name: task, done: false });
}
function reset() {
  tasks = [];
  nextId = 1;
}

module.exports = { getTasks, reset };
