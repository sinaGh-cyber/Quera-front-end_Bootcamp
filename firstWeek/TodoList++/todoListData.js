import { doUndoHandler } from './doUndoHandler';
import { editHandler } from './editHandler';
import { removeHandler } from './removeHandler';

class TodoData {
  data = [];

  set data(val) {
    if (val instanceof Array) {
      this.data = val;
    }
  }
  add(val) {
    this.data.push(val);
    const taskTemplate = document.getElementById('task-template');

    const task = taskTemplate.content.cloneNode(true).children[0];
    const taskTitle = task.querySelector('.task-title');
    const taskDescription = task.querySelector('.task-description');
    task.querySelector('.task-do-btn').addEventListener('click', doUndoHandler);
    task
      .querySelector('.task-undo-btn')
      .addEventListener('click', doUndoHandler);
    task.querySelector('.task-edit-btn').addEventListener('click', editHandler);
    task
      .querySelector('.task-remove-btn')
      .addEventListener('click', removeHandler);

    task.id = val.id;
    taskTitle.innerText = val.title;
    taskDescription.innerText = val.description;

    document
      .getElementById('todo-list')
      .insertAdjacentElement('afterbegin', task);
  }

  render() {
    this.data.forEach((prod) => {
      const taskTemplate = document.getElementById('task-template');

      const task = taskTemplate.content.cloneNode(true).children[0];
      const taskTitle = task.querySelector('.task-title');
      const taskDescription = task.querySelector('.task-description');
      task
        .querySelector('.task-do-btn')
        .addEventListener('click', doUndoHandler);
      task
        .querySelector('.task-undo-btn')
        .addEventListener('click', doUndoHandler);
      task
        .querySelector('.task-edit-btn')
        .addEventListener('click', editHandler);
      task
        .querySelector('.task-remove-btn')
        .addEventListener('click', removeHandler);

      task.id = prod.id;
      taskTitle.innerText = prod.title;
      taskDescription.innerText = prod.description;

      document
        .getElementById('todo-list')
        .insertAdjacentElement('afterbegin', task);

      if (prod.isCompleted) {
        task.querySelector('.task-is-done').classList.toggle('hidden');
        task.querySelector('.task-do-btn').classList.toggle('hidden');
        task.querySelector('.task-undo-btn').classList.toggle('hidden');
      }
    });
  }
}

export const todoListData = new TodoData();
