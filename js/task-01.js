// 1
const categoryArray = document.querySelectorAll('.item');

console.log('Number of categories:', categoryArray.length);
// 2
const titleArray = document.querySelectorAll('h2');
const elementsArray = document.querySelectorAll('#categories ul');

for (let i = 0; i < categoryArray.length; i += 1) {
    console.log('Category:', titleArray[i].textContent);
    console.log('Elements:', elementsArray[i].children.length);
}
