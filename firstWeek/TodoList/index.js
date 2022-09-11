// ul
const todos = document.querySelector('.todos');

// form
const todoForm = document.querySelector('.todoForm');
const titleInput = document.querySelector('.titleInput');
const descriptionInput = document.querySelector('.descriptionInput');

// Toasts
const toastSuccess = document.getElementById('toastSuccess');
const toastWarningForm = document.getElementById('toastWarningForm');
const toastInfo = document.getElementById('toastInfo');
const toastEdited = document.getElementById('toastEdited');

let counter = todos.children.length;

const updateTaskContent = (
  titleTodo,
  descriptionTodo,
  titleName,
  descriptionText,
  modalClosingBtn
) => {
  if (
    (!(titleTodo.innerText === titleName.value) ||
      !(descriptionTodo.innerText === descriptionText.value)) &&
    titleName.value
  ) {
    titleTodo.innerText = titleName.value;
    descriptionTodo.innerText = descriptionText.value;

    const toast = new bootstrap.Toast(toastEdited);
    toast.show();
  }
  modalClosingBtn.click();
};

const addTaskToList = (data) => {
  const id = ++counter;
  let newTodo = `


    <li
         id="${id}" class="list-group-item d-flex gap-2 justify-content-between align-items-center"
        >
          <span class="w-25 titleTodo">${data.title}</span>
          <span class="w-50 descriptionTodo">${
            data.description || 'without description'
          }</span>
          <div class=" w-25 btn-group">
            <button class="border-0 bg-transparent text-light">
              <i class="far fa-trash-alt delete p-1"></i>
            </button>
            <button class="border-0 bg-transparent text-light">
            <i class="fa-solid fa-check toggle done p-1"></i>
            <i class="fa-sharp fa-solid fa-rotate-left toggle undo visually-hidden p-1"></i>
        </button>
        <button
        class="border-0 bg-transparent text-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-pen-to-square edit p-1"></i>
      </button>
          </div>
        </li>
    `;

  todos.innerHTML += newTodo;
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (titleInput.value.trim()) {
    addTaskToList({
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim(),
    });

    titleInput.value = '';
    descriptionInput.value = '';
    const toast = new bootstrap.Toast(toastSuccess);
    toast.show();
  } else {
    const toast = new bootstrap.Toast(toastWarningForm);
    toast.show();
  }
});

todos.addEventListener('click', (e) => {
  switch (true) {
    case e.target.classList.contains('delete'): {
      e.target.parentElement.parentElement.parentElement.remove();
      const toast = new bootstrap.Toast(toastInfo);
      toast.show();
      return;
    }

    case e.target.classList.contains('toggle'): {
      e.target.parentElement.parentElement.parentElement.classList.toggle(
        'completed'
      );

      e.target?.nextElementSibling?.classList.toggle('visually-hidden');
      e.target?.previousElementSibling?.classList.toggle('visually-hidden');
      e.target.classList.toggle('visually-hidden');
      return;
    }

    case e.target.classList.contains('edit'): {
      let titleName,
        descriptionText,
        modalClosingBtn,
        modalSaveChangesBtn,
        liTag,
        titleTodo,
        descriptionTodo = undefined;

      titleName = document.getElementById('title-name');
      descriptionText = document.getElementById('description-text');
      modalClosingBtn = document.getElementById('modalClosingBtn');
      modalSaveChangesBtn = document.getElementById('modalSaveChangesBtn');
      liTag = e.target.parentElement.parentElement.parentElement;
      titleTodo = liTag.querySelector('.titleTodo');
      descriptionTodo = liTag.querySelector('.descriptionTodo');
      titleName.value = titleTodo.innerText;
      descriptionText.value = descriptionTodo.innerText;

      const modalSaveChangesBtnClone = modalSaveChangesBtn.cloneNode(true);
      modalSaveChangesBtn.parentNode.replaceChild(
        modalSaveChangesBtnClone,
        modalSaveChangesBtn
      );

      modalSaveChangesBtnClone.addEventListener(
        'click',
        updateTaskContent.bind(
          null,
          titleTodo,
          descriptionTodo,
          titleName,
          descriptionText,
          modalClosingBtn
        )
      );

      return;
    }
    default:
      return;
  }
});
