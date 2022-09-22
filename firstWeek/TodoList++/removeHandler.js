import { toastGenerator } from './toastGenerator';
import { todoListData } from './todoListData';

export function removeHandler() {
  const task = this.parentElement.parentElement;
  const newTaskArray = todoListData.data.filter((item) => item.id !== task.id);
  todoListData.data = newTaskArray;
  localStorage.setItem('todo-list-local-storage', JSON.stringify(newTaskArray));
   task.remove();
   toastGenerator('remove')
}