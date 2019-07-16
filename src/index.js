document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

let button = document.querySelector('input[type = submit]');

let form = document.querySelector('#create-task-form');

let newTask = document.querySelector('#new-task-description');

let tasks = document.querySelector('#tasks');

form.addEventListener("submit", e => {
	let newLi = document.createElement('li');
	newLi.innerHTML = newTask.value;
	tasks.appendChild(newLi);
	e.preventDefault();
});
