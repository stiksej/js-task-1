const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

let categoryCount = 0;

categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('ul li');
    let elementCount = categoryElements.length;
    categoryCount++;
    console.log(`Category: ${categoryTitle} Elements: ${elementCount}`);
});

console.log(`Number of categories: ${categoryCount}`);