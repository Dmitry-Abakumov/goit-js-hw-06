let counterValue = 0;
const incrementBtnRef = document.querySelector('button[data-action = "increment"]');
const decrementBtnRef = document.querySelector('button[data-action = "decrement"]');
const valueRef = document.querySelector('#value');

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});
decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});