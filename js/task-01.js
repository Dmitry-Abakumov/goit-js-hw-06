// 1
const categoryArray = document.querySelectorAll(".item");
console.log("Number of categories:", categoryArray.length);
categoryArray.forEach(category => console.log);
// 2
const titleArray = document.querySelectorAll("h2");
const elementsArray = document.querySelectorAll("#categories ul")

console.log("Category:", titleArray[0].textContent)
console.log("Elements:", elementsArray[0].children.length)

console.log("Category:", titleArray[1].textContent)
console.log("Elements:", elementsArray[1].children.length)

console.log("Category:", titleArray[2].textContent)
console.log("Elements:", elementsArray[2].children.length)
