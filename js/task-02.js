const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const elements = ingredients.map(el => {
    const liRef = document.createElement('li');
    liRef.textContent = el;
    liRef.classList.add('item');
    return liRef;
});

ulRef.append(...elements);

console.log(ulRef);
