let equalPress = 0;
let buttonInput = document.querySelectorAll('.input-button');
let input = document.getElementById('input');
let equal = document.getElementById('equal');
let clear = document.getElementById('acBtn');
let erase = document.getElementById('delBtn');

window.onload = () => {
  input.value = '';
};

buttonInput.forEach((button_class) => {
  button_class.addEventListener('click', () => {
    if (equalPress == 1) {
      input.value = '';
      equalPress = 0;
    } else {
      input.value += button_class.value;
    }
  });
});

equal.addEventListener('click', () => {
  equalPress = 1;
  let inputVal = input.value;
  try {
    let solution = eval(inputVal);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert('Incorrect Input');
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    equalPress = 1;
    let inputVal = input.value;
    try {
      let solution = eval(inputVal);
      if (Number.isInteger(solution)) {
        input.value = solution;
      } else {
        input.value = solution.toFixed(2);
      }
    } catch (err) {
      alert('Incorrect Input');
    }
  }
});

clear.addEventListener('click', () => {
  input.value = '';
});

erase.addEventListener('click', () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
