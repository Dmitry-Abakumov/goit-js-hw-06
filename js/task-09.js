function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const spanWithColorRref = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', event => {
    document.body.style.backgroundColor = getRandomHexColor();
    spanWithColorRref.textContent = document.body.style.backgroundColor;
});
