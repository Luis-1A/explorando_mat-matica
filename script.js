const buttonsComponent = document.querySelector('.buttons');
const buttonsToggle = document.querySelector('.buttons__toggle');
const allButton = document.querySelector('.allbtns');

buttonsToggle.addEventListener('click', toggleButtons);

function toggleButtons() {
    buttonsToggle.classList.toggle('buttons__toggle--active');
    buttonsComponent.classList.toggle('buttons--active');
    document.activeElement.blur();

    const currentPosition = allButton.getAttribute('data-position');

    if (currentPosition === 'original' || !currentPosition) {
        moveAllButton('90%', '51%');
        allButton.setAttribute('data-position', 'moved');
    } else {
        setTimeout(function () {
            moveAllButton('75%', '50%');
            allButton.setAttribute('data-position', 'original');

            setTimeout(function () {
                allButton.style.zIndex = '-1';
                allButton.style.opacity = '0';
            }, 500);
        }, 920);
    }
}

function moveAllButton(top, left) {
    allButton.style.zIndex = '1';
    allButton.style.opacity = '1';
    allButton.style.transition = 'top 0.5s, left 0.5s';
    allButton.style.top = top;
    allButton.style.left = left;

  
    buttonsToggle.style.top = '75%';
    buttonsToggle.style.left = '50%';

    setTimeout(() => {
        allButton.style.transition = ''; 
    }, 500);
}
