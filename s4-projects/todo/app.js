// DEFINE UI
const form = document.querySelector('form'); //form
const filter = document.getElementById('filter') //filter: ;
const taskList = document.querySelector('.collection') //task list
const taskInput = document.getElementById('task'); //user input
const clearButton = document.querySelector('.clear-tasks '); // clear button
const deleteItem = document.querySelector('.delete-item'); // delete task

function loadEventListeners() {
  // loadInItemsFromLocalStorage
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click', removeTask);

  // clear ALL task events
  clearButton.addEventListener('click', clearAllTasks);

  // filter task events
  filter.addEventListener('keyup', filterTasks);
}

// Ran when page/app is loaded up
function getTasks() {
  let tasks;
  // Check to see if there are any tasks in local storage.
  if (localStorage.getItem('tasks') === null) {
    tasks = []; //initialize an empty array since user has an empty task list.
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(task => {

    // Create li element
    const li = document.createElement('li');
    const link = document.createElement('a');

    // Add class to li
    li.className = 'collection-item';

    // creating text node and append to child
    li.appendChild(document.createTextNode(task));

    // Add class to a
    link.className = 'delete-item secondary-content';

    //Append icon to link(a)
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Add attribute to a
    link.setAttribute('href', "#");

    //Append link(a) to li 
    li.appendChild(link);

    // Add li to the collection of tasks
    taskList.appendChild(li);
  });
}

function addTaskToLocalStorage(task) {
  let tasks;
  // Check to see if there are any tasks in local storage.
  if (localStorage.getItem('tasks') === null) {
    tasks = []; //initialize an empty array since user has an empty task list.
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('You didn\'t enter anything..');
  } else {
    // Create li element
    const li = document.createElement('li');
    const link = document.createElement('a');

    // Add class to li
    li.className = 'collection-item';

    // creating text node and append to child
    li.appendChild(document.createTextNode(taskInput.value));

    // Add class to a
    link.className = 'delete-item secondary-content';

    //Append icon to link(a)
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Add attribute to a
    link.setAttribute('href', "#");

    //Append link(a) to li 
    li.appendChild(link);

    // Add li to the collection of tasks
    taskList.appendChild(li);

    addTaskToLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';
  }
  e.preventDefault();
}

function removeTaskFromLocalStorage(passedInTask) {
  let tasks;
  if (localStorage.getItem('tasks') === null) tasks = [];
  else tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.forEach((task, index) => {
    if (passedInTask.textContent === task) {
      tasks.splice(index, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    };
  }
  e.preventDefault();
}

function clearAllTasksFromLocalStorage() {
  localStorage.clear();
}

function clearAllTasks() {
  if (confirm('Removing ALL tasks, are you sure?\n(No turning back..)')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    clearAllTasksFromLocalStorage();
  }
}

// Come back to do this one.
function filterTasks(e) {
  const search = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(task => {
    const item = task.firstChild.textContent.toLowerCase();
    if (item.indexOf(search) > -1) task.style.display = 'block';
    else task.style.display = 'none';
  });
}

loadEventListeners();