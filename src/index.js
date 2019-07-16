document.addEventListener('DOMContentLoaded', () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  let tasksList = document.querySelector('#tasks');
  let input = document.querySelector('#new-task-description');

  let inputVal = '';

  input.addEventListener('input', function(e) {
    if (e.data == undefined) {
      // console.log(e.data);
    } else if (e.data === null) {
      inputVal = inputVal.slice(0, -1);
    } else {
      inputVal += e.data;
    }
    // console.log(inputVal);
  });

  form.addEventListener('submit', function(e) {
    console.log(e);
    console.log(e.srcElement);
    let li = document.createElement('li');
    li.innerText = inputVal;
    tasksList.append(li);
    li.innerHTML += '  <span>❌</span>';
    inputVal = '';
    event.preventDefault();
  });
});
