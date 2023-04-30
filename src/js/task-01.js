const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}\n`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').innerText;
  const categoryElementsCount = item.querySelector('ul').childElementCount;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}\n`);
});