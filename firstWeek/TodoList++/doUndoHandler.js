import { todoListData } from './todoListData';

export function doUndoHandler() {
  const task = this.parentElement.parentElement;
  const taskData = todoListData.data.find((item) => item.id === task.id);
  taskData.isCompleted = !taskData.isCompleted;
  localStorage.setItem(
    'todo-list-local-storage',
    JSON.stringify(todoListData.data)
  );
  task.querySelector('.task-is-done').classList.toggle('hidden');
  task.querySelector('.task-do-btn').classList.toggle('hidden');
  task.querySelector('.task-undo-btn').classList.toggle('hidden');
}
