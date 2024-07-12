import './form.js';
import './filter.js';
import { loadTheme, loadData } from './storage.js';
import { page } from './constants.js';

(() => {
  loadData();
  loadTheme();
  page.interaction.buttons.select.value = 'All';
})();
