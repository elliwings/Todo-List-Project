import { page } from './constants.js';
import { listEmpty } from './listEmpty.js';
import { changeItem, removeItem, toggleTaskMarked } from './actionsWithTask.js';

export function rerender(list) {
  page.taskList.list.innerHTML = ``;
  for (const task of list) {
    const element = document.createElement('li');
    element.classList.add('item');
    element.innerHTML = `<label>
      <input class="item__checkbox" type="checkbox" ${
        task.marked ? 'checked' : ''
      } />
      <div class="item__fake-checkmark"></div>
      <span class="item__text ${task.marked ? 'marked' : ''}">${
      task.text
    }</span>
    </label>
    <div class="item__change">
      <button class="item__edit">
        <img src="./images/change.svg" alt="change" class="change"/>
      </button>
      <button class="item__delete">
        <img src="./images/remove.svg" alt="remove" class="remove"/>
      </button>
    </div>`;
    page.taskList.list.appendChild(element);

    element.querySelector('.item__edit').addEventListener('click', () => {
      changeItem(list.indexOf(task));
    });

    element.querySelector('.item__delete').addEventListener('click', () => {
      removeItem(list.indexOf(task));
    });

    element.querySelector('.item__checkbox').addEventListener('click', () => {
      toggleTaskMarked(list.indexOf(task));
    });

    listEmpty();
  }
}
