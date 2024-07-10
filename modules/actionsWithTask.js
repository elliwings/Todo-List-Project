import { tasks, saveData } from './storage.js';
import { rerender } from './rerender.js';
import { listEmpty } from './listEmpty.js';

export function changeItem(index) {
  let newTaskText = prompt('Enter new task');
  if (newTaskText) {
    tasks[index].text = newTaskText;
    saveData();
    rerender(tasks);
  }
}

export function removeItem(index) {
  if (index !== -1) {
    tasks.splice(index, 1);
    rerender(tasks);
    saveData();
    listEmpty();
  }
}

export function toggleTaskMarked(index) {
  if (tasks[index]) {
    tasks[index].marked = true;
    saveData();
    rerender(tasks);
  }
}
