console.log('Hello World')

let count = 0;
let counter = document.getElementById('counter')

function increase() {
  count++;
  counter.innerText = count;
};

function decrease() {
  count--;
  counter.innerText = count
};

function reset() {
  count = 0;
  counter.innerHTML = "<mark>" + count + "</mark>"
};

// Change classes

function selectTheme(theme) {

  let body = document.getElementsByTagName('body')
  body[0].className = theme;

  let main = document.querySelector('main');
  main.className = theme;

  let buttons = document.getElementsByTagName('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme
  }
}

