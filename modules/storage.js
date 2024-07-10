import { changeToDarkTheme } from './theme.js';
import { theme, THEME_KEY } from './theme.js';
import { rerender } from './rerender.js';

const TASK_KEY = 'TASK_KEY';

export let tasks = [];

export function saveTheme() {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme() {
  if (theme === 'dark') {
    changeToDarkTheme();
  }
}

export function saveData() {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

export function loadData() {
  let tasksString = localStorage.getItem(TASK_KEY);
  if (tasksString) {
    tasks = JSON.parse(tasksString);
    rerender(tasks);
  }
}
