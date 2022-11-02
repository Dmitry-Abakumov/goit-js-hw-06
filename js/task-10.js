function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    boxes: document.querySelector('#boxes'),
    input: document.querySelector('input[type = "number"]'),
};

const createBoxes = amount => {
    const newElArray = [];

    for (let i = 0; i < amount * 10; i += 10) {
        const newEl = document.createElement('div');
        newEl.style.width = `${30 + i}px`;
        newEl.style.height = `${30 + i}px`;
        newEl.style.backgroundColor = getRandomHexColor();
        newElArray.push(newEl);

        console.log(newEl);
    }

    refs.boxes.append(...newElArray);
};

const destroyBoxes = () => {
    refs.boxes.innerHTML = '';
};

refs.createBtn.addEventListener('click', () => {
    createBoxes(refs.input.valueAsNumber);
});

refs.destroyBtn.addEventListener('click', destroyBoxes);
