document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  let tasksList = document.querySelector('#tasks');

  // let inputVal = '';

  // input.addEventListener('input', function(e) {
  //   if (e.data == undefined) {
  //   } else if (e.data === null) {
  //     inputVal = inputVal.slice(0, -1);
  //   } else {
  //     inputVal += e.data;
  //   }
  //   console.log(inputVal);
  // });

  form.addEventListener('submit', function(e) {
    // TY Franchely
    let input = e.target.querySelector('#new-task-description').value;

    let li = document.createElement('li');
    li.innerText = input;
    tasksList.append(li);
    li.innerHTML +=
      '  <span class="delete-button" style="cursor:pointer;">❌</span>';
    event.preventDefault();
  });

  let dButton = document.querySelectorAll('.delete-button');

  
  function deleteTheButton(e) {
    console.log(e);
    console.log(e.target);
    // tasksList.remove(e.target);
  }

  dButton.forEach(button => {
    console.log(button);
    button.addEventListener('click', deleteTheButton);
  });
});
