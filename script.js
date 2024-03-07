const text = "Por favor, acesse pelo dispositivo móvel";
const textElement = document.querySelector('.animation-text');

let index = 0;

function showText() {
  if (index < text.length) {
    textElement.textContent += text[index];
    index++;
    setTimeout(showText, 200);
  } else {
    textElement.style.color = 'red'; 
  }
}

showText();
