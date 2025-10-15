const { getTasks, reset, createTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('createTask adds a new task', () => {
  createTask('Test task');
  expect(getTasks()).toEqual([{ id: 1, name: 'Test task', done: false }]);
});

test('createTask increments task IDs', () => {
  createTask('First task');
  createTask('Second task');
  expect(getTasks()).toEqual([
    { id: 1, name: 'First task', done: false },
    { id: 2, name: 'Second task', done: false }
  ]);
});

test('reset clears the task list', () => {
  createTask('Task to be cleared');
  reset();
  expect(getTasks()).toEqual([]);
});
