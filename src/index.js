document.addEventListener("DOMContentLoaded", () => {
  // your code here

  
});

const form = document.querySelector("#create-task-form")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let task = event.target.querySelector("#new-task-description").value
  console.log(task)

  let list = document.createElement("li")
  list.innerText = task
  console.log(list)

  let tasks = document.querySelector("ul")
  tasks.appendChild(list)

})