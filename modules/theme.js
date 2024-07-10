import { saveTheme } from './storage.js';
import { page } from './constants.js';

export const THEME_KEY = 'THEME_KEY';
export let theme = localStorage.getItem(THEME_KEY);

page.interaction.themeBtn.addEventListener('click', changeTheme);

export function changeToDarkTheme() {
  page.body.classList.add('dark-theme');
  page.input.classList.add('dark-theme__input');
  page.searchInputBtn.classList.add('dark-theme__input-button');
  page.interaction.themeBtnSvg.src = './images/light.svg';
}

export function changeToLightTheme() {
  page.body.classList.remove('dark-theme');
  page.input.classList.remove('dark-theme__input');
  page.searchInputBtn.classList.remove('dark-theme__input-button');
  page.interaction.themeBtnSvg.src = './images/dark.svg';
}

export function changeTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  if (theme === 'dark') {
    changeToDarkTheme();
  } else {
    changeToLightTheme();
  }
  saveTheme();
}
