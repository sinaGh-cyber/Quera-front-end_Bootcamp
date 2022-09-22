export const removeToast = (containerToast, ...toastArray) => {
  toastArray.forEach((toast) => {
    if (toast.remove) {
      toast?.remove();
    }
  });
  if (!containerToast.children.length) {
    containerToast?.remove();
  }
};
