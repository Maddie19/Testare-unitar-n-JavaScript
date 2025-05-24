const TaskManager = require('./taskManager');

describe('TaskManager', () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  test('addTask adaugă corect', () => {
    manager.addTask("Test");
    expect(manager.getTasks().length).toBe(1);
    expect(manager.getTasks()[0].text).toBe("Test");
    expect(manager.getTasks()[0].completed).toBe(false);
  });

  test('addTask nu acceptă text gol', () => {
    expect(() => manager.addTask("")).toThrow("Task text invalid!");
    expect(() => manager.addTask("   ")).toThrow("Task text invalid!");
  });

  test('deleteTask șterge corect', () => {
    manager.addTask("A");
    manager.addTask("B");
    const deleted = manager.deleteTask(0);
    expect(deleted.text).toBe("A");
    expect(manager.getTasks().length).toBe(1);
  });

  test('deleteTask aruncă eroare la index greșit', () => {
    expect(() => manager.deleteTask(3)).toThrow("Index invalid!");
  });

  test('toggleTask schimbă statusul', () => {
    manager.addTask("A");
    expect(manager.toggleTask(0)).toBe(true);
    expect(manager.toggleTask(0)).toBe(false);
  });

  test('toggleTask aruncă eroare la index greșit', () => {
    expect(() => manager.toggleTask(2)).toThrow("Index invalid!");
  });

  test('clearTasks golește lista', () => {
    manager.addTask("A");
    manager.clearTasks();
    expect(manager.getTasks().length).toBe(0);
  });

  test('test simplu: 2+2=4', () => {
  expect(2 + 2).toBe(4);
});

test('getTasks returnează o copie, nu referința originală', () => {
  manager.addTask("A");
  const tasksCopy = manager.getTasks();
  tasksCopy[0].text = "MODIFIED";
  // Task-ul original nu se modifică!
  expect(manager.getTasks()[0].text).toBe("A");
});

test('addTask elimină spațiile la început/sfârșit', () => {
  manager.addTask("  ceva   ");
  expect(manager.getTasks()[0].text).toBe("ceva");
});

test('deleteTask returnează taskul șters', () => {
  manager.addTask("A");
  const deleted = manager.deleteTask(0);
  expect(deleted).toEqual({ text: "A", completed: false });
});

test('constructor primește o listă de taskuri', () => {
  const initial = [{ text: "X", completed: true }];
  const newManager = new TaskManager(initial);
  expect(newManager.getTasks().length).toBe(1);
  expect(newManager.getTasks()[0].text).toBe("X");
  expect(newManager.getTasks()[0].completed).toBe(true);
});

test('clearTasks poate fi apelată pe o listă deja goală', () => {
  manager.clearTasks();
  expect(manager.getTasks()).toEqual([]);
});


});
