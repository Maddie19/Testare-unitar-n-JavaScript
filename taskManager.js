class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  addTask(text) {
    if (!text || typeof text !== "string" || !text.trim()) {
      throw new Error("Task text invalid!");
    }
    const task = { text: text.trim(), completed: false };
    this.tasks.push(task);
    return task;
  }

  deleteTask(index) {
    if (typeof index !== 'number' || index < 0 || index >= this.tasks.length) {
      throw new Error("Index invalid!");
    }
    return this.tasks.splice(index, 1)[0];
  }

  toggleTask(index) {
    if (typeof index !== 'number' || index < 0 || index >= this.tasks.length) {
      throw new Error("Index invalid!");
    }
    this.tasks[index].completed = !this.tasks[index].completed;
    return this.tasks[index].completed;
  }

 getTasks() {
  // returnează o copie nouă a fiecărui task
  return this.tasks.map(task => ({ ...task }));
}


  clearTasks() {
    this.tasks = [];
  }
}

module.exports = TaskManager; // pentru Jest/testare unitară
