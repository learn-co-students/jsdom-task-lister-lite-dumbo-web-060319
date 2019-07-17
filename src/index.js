const input = document.querySelector('#submit_form');
const text = document.querySelector('#new-task-description');
const list = document.querySelector('#list');

document.addEventListener("DOMContentLoaded", () => {
  console.log(input);
});

function taskDeleter(li) {
  taskDeleteButton = document.createElement('input');
  taskDeleteButton.type = 'submit';
  taskDeleteButton.value = 'x';
  taskDeleteButton.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });

  li.append(taskDeleteButton);
}

function prioritySetter(li) {
  dropdownDiv = document.createElement('div');
  dropdownDiv.className = 'dropdown';

  dropdownButton = document.createElement('button');

}

// <div class="dropdown">
//  <button class="dropbtn">Dropdown</button>
//  <div class="dropdown-content">
//    <a href="#">Link 1</a>
//    <a href="#">Link 2</a>
//    <a href="#">Link 3</a>
//  </div>
// </div>

input.addEventListener('click', function(e) {
  li = document.createElement('li');
  li.textContent = text.value;
  text.value = '';
  taskDeleter(li);
  list.append(li);
  text.focus();
  e.preventDefault();
});
