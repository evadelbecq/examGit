const { getTasks, reset, addTask, toggleTask, countDone } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('addTask adds a new task', () => {
  addTask('Test task');
  expect(getTasks()).toEqual([{ id: 1, name: 'Test task', done: false }]);
});

test('addTask increments task IDs', () => {
  addTask('First task');
  addTask('Second task');
  expect(getTasks()).toEqual([
    { id: 1, name: 'First task', done: false },
    { id: 2, name: 'Second task', done: false }
  ]);
});

test('toggleTask() toggles a task', () => {
  addTask('Test task');
  toggleTask(1);
  expect(getTasks()).toEqual([{ id: 1, name: 'Test task', done: true }]);
});

test('reset clears the task list', () => {
  addTask('Task to be cleared');
  reset();
  expect(getTasks()).toEqual([]);
});

test ('countDone counts completed tasks', () => {
  addTask('Task 1');
  addTask('Task 2');
  addTask('Task 3');
  toggleTask(1);
  toggleTask(2);
  expect(countDone()).toBe(2);
});