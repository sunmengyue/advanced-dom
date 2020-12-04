/* Add Todos */
const form = document.querySelector('#new-todo-form');
const list = document.querySelector('#list');
const todoInput = document.querySelector('#todo-input');
const button = document.querySelector('button');
const template = document.querySelector('#list-item-template');
const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODOLIST-';
const TODO_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
let todos = loadTodos();
todos.forEach(renderTodo);

// 1. type in todos and click the todo button to submit the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 2. render todos
  const todoName = todoInput.value;
  if (todoName === '') return;
  const todo = {
    id: new Date().valueOf().toString(),
    name: todoName,
    isCompleted: false,
  };
  todos.push(todo);
  saveTodos();
  renderTodo(todo);
  todoInput.value = '';
});

list.addEventListener('change', (e) => {
  if (!e.target.matches('[data-list-item-checkbox]')) return;
  // 1. get the todo to click on
  const parent = e.target.closest('.list-item');
  const todoId = parent.dataset.todoId;
  const todo = todos.find((t) => t.id === todoId);
  todo.isCompleted = e.target.checked;
  saveTodos();
});

list.addEventListener('click', (e) => {
  if (!e.target.matches('[data-button-delete]')) return;
  const parent = e.target.closest('.list-item');
  const todoId = parent.dataset.todoId;
  // Remove the todo from the screen
  parent.remove();
  // Remove the todo from the list
  todos = todos.filter((todo) => todo.id !== todoId);
  // Save new todos
  saveTodos();
});

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector('.list-item');
  listItem.dataset.todoId = todo.id;
  const textElement = templateClone.querySelector('[data-list-item-text]');
  const checkBox = templateClone.querySelector('[data-list-item-checkbox]');
  checkBox.checked = todo.isCompleted;
  textElement.innerText = todo.name;
  list.appendChild(templateClone);
}

// Load Todos
function loadTodos() {
  const todosStrings = localStorage.getItem(TODO_STORAGE_KEY);
  return JSON.parse(todosStrings) || [];
}

// Save Todos
function saveTodos() {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
}
// Delete Todos
// Complete Todos
// Save Todos
// Load Todos
