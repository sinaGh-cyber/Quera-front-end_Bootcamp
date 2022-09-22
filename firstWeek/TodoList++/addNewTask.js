import { toastGenerator } from './toastGenerator';
import { todoListData } from './todoListData';

export const addNewTaskSetup = (htmlForm, htmlTitle, htmlDescription) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const titleVal = htmlTitle.value.trim();
    const descriptionVal = htmlDescription.value.trim();
    

    if (titleVal) {
      const task = {
        title: titleVal,
        description: descriptionVal,
        isCompleted: false,
        id: `${todoListData.data.length}${new Date().getTime()}`,
      };

      todoListData.add(task);
      localStorage.setItem(
        'todo-list-local-storage',
        JSON.stringify(todoListData.data)
      );
      toastGenerator('add')
    } else {
      toastGenerator('fail')
    }
  };
  htmlForm.addEventListener('submit', submitHandler);
};
