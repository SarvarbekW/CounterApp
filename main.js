
let value = 5;
const row = document.getElementById('row');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');


if (plusBtn) {
    plusBtn.addEventListener('click', () => {
        value += 1;
        render();
    });
}


if (minusBtn) {
    minusBtn.addEventListener('click', () => {
        value -= 1;
        render();
    });
}

function render() {
    if (display) {
        display.textContent = value;
    }
}


render();