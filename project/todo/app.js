// DEFINE UI
const form = document.querySelector('form'); //form
const filter = document.getElementById('filter') //filter: ;
const taskList = document.querySelector('.collection') //task list
const taskInput = document.getElementById('task'); //user input
const clearButton = document.querySelector('.clear-tasks '); // clear button
const deleteItem = document.querySelector('.delete-item'); // delete task

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  //remove task event
  taskList.addEventListener('click', removeTask);

  // clear ALL task events
  clearButton.addEventListener('click', clearAllTasks);

  // filter task events
  filter.addEventListener('keyup', filterTasks);
}

// 
function putTaskInLocalStorage(taskList) {
  console.log(taskList.children);
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('You didn\'t enter anything..');
  } else {
    // Create li element
    const li = document.createElement('li');
    const link = document.createElement('a');

    // Add li to the collection of tasks
    taskList.appendChild(li);

    // Add class to li
    li.className = 'collection-item';

    // creating text node and append to child
    li.appendChild(document.createTextNode(taskInput.value));

    // Add class to a
    link.className = 'delete-item secondary-content';

    // Add attribute to a
    link.setAttribute('href', "#");

    //Append link(a) to li 
    li.appendChild(link);

    //Append icon to link(a)
    link.innerHTML = '<i class="fa fa-remove"></i>';

    putTaskInLocalStorage(taskList);

    // CLear input
    taskInput.value = '';
  }
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    };
  }
  e.preventDefault();
}

function clearAllTasks() {
  if (confirm('Removing ALL tasks, are you sure?\n(No turning back..)')) {
    // taskList.innerHTML = ''; // METHOD 1

    // METHOD 2 (Faster)
    // While there's something still wi
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
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