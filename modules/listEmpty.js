import { page } from './constants.js';
import { tasks } from './storage.js';

export function listEmpty() {
  page.emptyImage.style.display = tasks.length > 0 ? 'none' : 'block';
}
