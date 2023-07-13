// Create a new h3 element using JavaScript
const h3 = document.createElement(`h3`);
// Add it to the body of the page.
const body = document.querySelector(`body`);
body.appendChild(h3);
// Have the h3 tag read out 'Color Changer';
h3.innerHTML = `Color Changer`

// Create button and attach button to the body
const button1 = document.createElement(`button`);
body.appendChild(button1);
// Put inside the button 'Change Color!'
button1.innerText = `Change Color!`;
// Change the background color of the body when a button is clicked.
button1.addEventListener(`click`, () =>{
  document.body.style.backgroundColor = `rebeccapurple`;
});

// How would you have the color flip between 2 colors? (tip: you'll need an addEventListener; don't use white, challenge yourself!)
const button2 = document.createElement(`button`);
// Extra Credit: How would you flip between 3 colors? ~~ rest of code should work if add/subtract colors from colors array
const colors = [`coral`, `navy`, `rosybrown`, `rebeccapurple`];
button2.innerText = `Switch Between ${colors.length} Colors!`
body.appendChild(button2);
let staticColorIdx = 0;
button2.addEventListener(`click`, () => {
  staticColorIdx = (staticColorIdx+1) % colors.length;
  button2.style.backgroundColor = colors[staticColorIdx];
});

// Harder Extra Credit: How would you randomize colors on each click? (tip: you'll need to use hex colors '#663399')
const button3 = document.createElement(`button`);
body.appendChild(button3);
button3.innerText = `Change to Random Color!`;
button3.addEventListener(`click`, () => {
  const randColorIdx = Math.floor(Math.random() * colors.length);
  console.log(randColorIdx);
  randDiv = document.querySelector(`#random-color`);
  randDiv.style.backgroundColor = colors[randColorIdx];
});