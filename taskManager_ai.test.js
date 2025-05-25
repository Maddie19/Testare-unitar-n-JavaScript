const TaskManager = require('./taskManager');

describe('TaskManager AI', () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  test('addTask should add a task', () => {
    manager.addTask('Test AI');
    expect(manager.getTasks().length).toBe(1);
    expect(manager.getTasks()[0].text).toBe('Test AI');
    expect(manager.getTasks()[0].completed).toBe(false);
  });

  test('toggleTask should toggle completion status', () => {
    manager.addTask('AI Task');
    expect(manager.getTasks()[0].completed).toBe(false);
    manager.toggleTask(0);
    expect(manager.getTasks()[0].completed).toBe(true);
  });
  // ... (alte teste generate)
});
