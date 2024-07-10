import { loadTheme, loadData } from './storage.js';
import { page } from './constants.js';
import { formAddNewTask, submitForm } from './form.js';
import { filterTasks } from './filter.js';

(() => {
  loadData();
  loadTheme();
  page.interaction.buttons.select.value = 'All';
})();
