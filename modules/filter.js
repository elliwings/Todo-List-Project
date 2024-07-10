import { page } from './constants.js';
import { rerender } from './rerender.js';
import { tasks } from './storage.js';

page.interaction.buttons.select.addEventListener('change', filterTasks);

page.input.addEventListener('input', (event) => {
  let val = event.target.value.trim().toLowerCase();
  let listItems = document.querySelectorAll('.list li.item');
  listItems.forEach(function (elem) {
    let text = elem.querySelector('.item__text').textContent.toLowerCase();
    let listItem = elem;
    if (text.includes(val)) {
      listItem.classList.remove('hide');
    } else {
      listItem.classList.add('hide');
    }
  });
});

export function filterTasks() {
  let complete = [];
  let uncomplete = [];
  let typeTasks = page.interaction.buttons.select.value;
  if (typeTasks === 'All') {
    rerender(tasks);
  }
  if (typeTasks === 'Complete') {
    for (const task of tasks) {
      if (task.marked === true) {
        complete.push(task);
      }
    }
    rerender(complete);
  }
  if (typeTasks === 'Incomplete') {
    for (const task of tasks) {
      if (task.marked === false) {
        uncomplete.push(task);
      }
    }
    rerender(uncomplete);
  }
}
