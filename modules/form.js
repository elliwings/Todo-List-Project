import { page } from './constants.js';
import { tasks, saveData } from './storage.js';
import { rerender } from './rerender.js';
import { listEmpty } from './listEmpty.js';

page.form.apply.addEventListener('click', submitForm);
page.addTaskButton.addEventListener('click', formAddNewTask);

export function formAddNewTask() {
  page.overlay.style.display = 'block';
  page.form.mainForm.style.display = 'block';
}

export function cancelForm(event) {
  event.preventDefault();
  page.overlay.style.display = 'none';
  page.form.mainForm.style.display = 'none';
}

export function submitForm(event) {
  event.preventDefault();
  if (page.form.textNewTask.value !== '') {
    let value = page.form.textNewTask.value;
    tasks.push({ text: value, marked: false, id: findMaxId() });
    page.form.textNewTask.value = '';
    saveData();
    listEmpty();
    page.form.mainForm.style.display = 'none';
    page.overlay.style.display = 'none';
  }
  rerender(tasks);
}

export function findMaxId() {
  let maxId = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id > maxId) {
      maxId = tasks[i].id;
    }
  }
  return maxId + 1;
}
