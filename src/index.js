document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  let toDoList = document.querySelector("#tasks");

  form.addEventListener('submit', function(){
    let input = document.querySelector("#new-task-description");
    let newItem = document.createElement('li');
    newItem.innerText = input.value;
    toDoList.append(newItem);
    newItem.innerHTML += "<span> ❌ </span>";
    newItem.addEventListener('click', function(){
      toDoList.removeChild(this);
    })
    event.preventDefault();

  });
});
 