const TASK_KEY = 'TASK_KEY';
const THEME_KEY = 'THEME_KEY';

let tasks = [];
let theme = localStorage.getItem(THEME_KEY);

const page = {
  body: document.querySelector('body'),
  emptyImage: document.querySelector('.empty'),
  overlay: document.querySelector('.overlay'),
  input: document.querySelector('.input'),
  searchInputBtn: document.querySelector('.input__button'),
  interaction: {
    buttons: {
      select: document.querySelector('.interaction__select'),
    },
    themeBtn: document.querySelector('.interaction__theme'),
    themeBtnSvg: document.querySelector('.interaction__theme--svg'),
  },
  form: {
    mainForm: document.querySelector('.form'),
    cancel: document.querySelector('.button__cancel'),
    apply: document.querySelector('.button__apply'),
    textNewTask: document.querySelector('.form__new-note'),
  },
  taskList: {
    list: document.querySelector('.list'),
  },
};

function saveTheme() {
  localStorage.setItem(THEME_KEY, theme);
}

function changeToDarkTheme() {
  page.body.classList.add('dark-theme');
  page.input.classList.add('dark-theme__input');
  page.searchInputBtn.classList.add('dark-theme__input-button');
  page.interaction.themeBtnSvg.src = './images/light.svg';
}

function changeToLightTheme() {
  page.body.classList.remove('dark-theme');
  page.input.classList.remove('dark-theme__input');
  page.searchInputBtn.classList.remove('dark-theme__input-button');
  page.interaction.themeBtnSvg.src = './images/dark.svg';
}

function changeTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  if (theme === 'dark') {
    changeToDarkTheme();
  } else {
    changeToLightTheme();
  }
  saveTheme();
}

function loadTheme() {
  if (theme === 'dark') {
    changeToDarkTheme();
  }
}

function saveData() {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

function loadData() {
  let tasksString = localStorage.getItem(TASK_KEY);
  if (tasksString) {
    tasks = JSON.parse(tasksString);
    rerender(tasks);
  }
}

function formAddNewTask() {
  page.overlay.style.display = 'block';
  page.form.mainForm.style.display = 'block';
}

function cancelForm(event) {
  event.preventDefault();
  page.overlay.style.display = 'none';
  page.form.mainForm.style.display = 'none';
}

function listEmpty() {
  page.emptyImage.style.display = tasks.length > 0 ? 'none' : 'block';
}

function findMaxId() {
  let maxId = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id > maxId) {
      maxId = tasks[i].id;
    }
  }
  return maxId + 1;
}

function rerender(list) {
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

function submitForm(event) {
  event.preventDefault();
  if (page.form.textNewTask.value !== '') {
    let value = page.form.textNewTask.value;
    tasks.push({ text: value, marked: false, id: findMaxId() });
    page.form.textNewTask.value = '';
    saveData();
    listEmpty();
    page.form.mainForm.style.display = 'none';
    page.overlay.style.display = 'none';
  }
  rerender(tasks);
}

function changeItem(index) {
  newTaskText = prompt('Enter new task');
  if (newTaskText) {
    tasks[index].text = newTaskText;
    saveData();
    rerender(tasks);
  }
}

function removeItem(index) {
  if (index !== -1) {
    tasks.splice(index, 1);
    rerender(tasks);
    saveData();
    listEmpty();
  }
}

function toggleTaskMarked(index) {
  if (tasks[index]) {
    tasks[index].marked = true;
    saveData();
    rerender(tasks);
  }
}

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

function filterTasks() {
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

(() => {
  loadData();
  loadTheme();
  page.interaction.buttons.select.value = 'All';
})();
