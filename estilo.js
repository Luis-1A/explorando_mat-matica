const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');

buttonsToggle.addEventListener('click', toggleButtons);

function toggleButtons() {
	buttonsToggle.classList.toggle('buttons__toggle--active');
	buttonsComponent.classList.toggle('buttons--active');
	document.activeElement.blur();
}

//tudo daqui pra baixo pode apaga


const toggleButton = document.querySelector('.buttons__toggle');
const allButton = document.querySelector('.allbtns');
let clicked = false;

toggleButton.addEventListener('click', function() {
    if (!clicked) {
        allButton.style.display = 'block'; 
        setTimeout(function() {
            toggleButton.setAttribute('data-clicked', 'true'); 
        }, 1000);
        clicked = true;
    } else {
        setTimeout(function() {
            allButton.style.display = 'none'; 
            toggleButton.removeAttribute('data-clicked'); 
            clicked = false;
        }, 4000);
    }
});
