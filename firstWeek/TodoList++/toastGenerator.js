import { removeToast } from './removeToast';

export const toastGenerator = (type) => {
  let containerToast;
  const app = document.getElementById('app');
  if (!document.getElementById('toast-container')) {
    const toastContainerTemplate = document.getElementById(
      'toast-container-template'
    );
    containerToast = toastContainerTemplate.content.cloneNode(true).children[0];
  } else {
    containerToast = document.getElementById('toast-container');
  }

  app.insertAdjacentElement('afterbegin', containerToast);

  switch (type) {
    case 'add': {
      const toastSuccessTemplate = document.getElementById(
        'toast-success-template'
      );
      const successToast =
        toastSuccessTemplate.content.cloneNode(true).children[0];
      successToast.addEventListener(
        'click',
        removeToast.bind(null, containerToast, successToast)
      );
      containerToast.insertAdjacentElement('beforeend', successToast);
      setTimeout(removeToast.bind(null, containerToast, successToast), 3000);

      return;
    }
    case 'fail': {
      const toastFailTemplate = document.getElementById('toast-fail-template');
      const failToast = toastFailTemplate.content.cloneNode(true).children[0];
      failToast.addEventListener(
        'click',
        removeToast.bind(null, containerToast, failToast)
      );
      containerToast.insertAdjacentElement('beforeend', failToast);
      setTimeout(removeToast.bind(null, containerToast, failToast), 3000);
      return;
    }
    case 'remove': {
      const toastRemoveTemplate = document.getElementById(
        'toast-remove-success-template'
      );
      const RemoveToast =
        toastRemoveTemplate.content.cloneNode(true).children[0];
      RemoveToast.addEventListener(
        'click',
        removeToast.bind(null, containerToast, RemoveToast)
      );
      containerToast.insertAdjacentElement('beforeend', RemoveToast);
      setTimeout(removeToast.bind(null, containerToast, RemoveToast), 3000);
      return;
    }
    case 'edit': {
      const toastEditTemplate = document.getElementById(
        'toast-edit-success-template'
      );
      const EditToast = toastEditTemplate.content.cloneNode(true).children[0];
      EditToast.addEventListener(
        'click',
        removeToast.bind(null, containerToast, EditToast)
      );
      containerToast.insertAdjacentElement('beforeend', EditToast);
      setTimeout(removeToast.bind(null, containerToast, EditToast), 3000);
      return;
    }

    default:
      throw new Error('unknown type in toast generator.');
  }
};
