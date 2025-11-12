// Get elements
const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

// Greet button click event
greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello!";
  }
});

// Box click events
document.getElementById('redBox').addEventListener('click', () => {
  document.getElementById('redBox').style.backgroundColor = 'red';
  document.getElementById('redBox').style.color = 'white';
});

document.getElementById('blueBox').addEventListener('click', () => {
  document.getElementById('blueBox').style.backgroundColor = 'blue';
  document.getElementById('blueBox').style.color = 'white';
});

document.getElementById('greenBox').addEventListener('click', () => {
  document.getElementById('greenBox').style.backgroundColor = 'green';
  document.getElementById('greenBox').style.color = 'white';
});

document.getElementById('yellowBox').addEventListener('click', () => {
  document.getElementById('yellowBox').style.backgroundColor = 'yellow';
  document.getElementById('yellowBox').style.color = 'black';
});
