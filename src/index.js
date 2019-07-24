const selectForm = document.querySelector("#create-task-form")
const selectList = document.querySelector("#tasks") // this is a 'ul' element

document.addEventListener("DOMContentLoaded", () => {
  grabFormInput(selectForm)
});

function grabFormInput(form){
  form.addEventListener('submit', event => {
    event.preventDefault()
    let newTask = event.target["new-task-description"].value
    renderTask(newTask);
  });
};

  let taskId = 0 // so janky, and so hilarious
function renderTask(task){
  let li = document.createElement('li');
  selectList.append(li);
  li.classList = 'task-card';
  li.innerHTML = `
  <p id = '${taskId}'> ${task} <p>
  `;
  taskId += 1;
};
