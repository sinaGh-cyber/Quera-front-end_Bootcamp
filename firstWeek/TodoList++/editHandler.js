import { toastGenerator } from './toastGenerator';
import { todoListData } from './todoListData';

export function editHandler() {
  const task = this.parentElement.parentElement;
  const taskData = todoListData.data.find((item) => item.id === task.id);

  const taskTemplate = document.getElementById('modal-template');
  const modal = taskTemplate.content.cloneNode(true).children[0];

  document.documentElement.insertAdjacentElement('afterbegin', modal);

  const descriptionInput = document.getElementById('modal-description-input');
  const titleInput = document.getElementById('modal-title-input');

  descriptionInput.value = taskData.description;
  titleInput.value = taskData.title;

  modal.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'modal-cancel-todo-form-btn': {
        modal.remove();
        return;
      }

      case 'modal-edit': {
        modal.remove();
        return;
      }
      case 'modal-save-todo-form-btn': {
        if (
          !(
            descriptionInput.value === taskData.description &&
            titleInput.value === taskData.title
          )
        ) {
          taskData.description = descriptionInput.value;
          taskData.title = titleInput.value;
        
          task.querySelector('.task-title').innerText = taskData.title;
          task.querySelector('.task-description').innerText =
            taskData.description;
          localStorage.setItem(
            'todo-list-local-storage',
            JSON.stringify(todoListData.data)
          );
          toastGenerator('edit')
        }
        modal.remove();

        return;
      }
      default:
        break;
    }
  });
}
