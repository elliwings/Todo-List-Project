import { loadTheme, loadData } from './storage.js';
import { page } from './constants.js';
import { formAddNewTask, submitForm } from './form.js';
import { filterTasks } from './filter.js';
import { changeTheme } from './theme.js';
import { changeItem, removeItem, toggleTaskMarked } from './actionsWithTask.js';

window.formAddNewTask = formAddNewTask;
window.submitForm = submitForm;
window.filterTasks = filterTasks;
window.changeTheme = changeTheme;
window.changeItem = changeItem;
window.removeItem = removeItem;
window.toggleTaskMarked = toggleTaskMarked;

(() => {
  loadData();
  loadTheme();
  page.interaction.buttons.select.value = 'All';
})();
