export const page = {
  body: document.querySelector('body'),
  emptyImage: document.querySelector('.empty'),
  overlay: document.querySelector('.overlay'),
  input: document.querySelector('.input'),
  searchInputBtn: document.querySelector('.input__button'),
  interaction: {
    buttons: {
      select: document.querySelector('.interaction__select'),
    },
    themeBtn: document.querySelector('.interaction__theme'),
    themeBtnSvg: document.querySelector('.interaction__theme--svg'),
  },
  form: {
    mainForm: document.querySelector('.form'),
    cancel: document.querySelector('.button__cancel'),
    apply: document.querySelector('.button__apply'),
    textNewTask: document.querySelector('.form__new-note'),
  },
  taskList: {
    list: document.querySelector('.list'),
  },
};
