import { page } from './constants.js';
import { listEmpty } from './listEmpty.js';

export function rerender(list) {
  page.taskList.list.innerHTML = ``;
  for (const task of list) {
    const element = document.createElement('li');
    element.classList.add('item');
    element.innerHTML = `<label>
      <input class="item__checkbox" type="checkbox" ${
        task.marked ? 'checked' : ''
      } onchange="toggleTaskMarked(${list.indexOf(task)})"/>
      <div class="item__fake-checkmark"></div>
      <span class="item__text ${task.marked ? 'marked' : ''}">${
      task.text
    }</span>
    </label>
    <div class="item__change">
      <button onclick="changeItem(${list.indexOf(task)})">
        <img src="./images/change.svg" alt="change" class="change"/>
      </button>
      <button onclick="removeItem(${list.indexOf(task)})">
        <img src="./images/remove.svg" alt="remove" class="remove"/>
      </button>
    </div>`;
    page.taskList.list.appendChild(element);
    listEmpty();
  }
}
