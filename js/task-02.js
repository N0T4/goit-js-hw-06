const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainUl = document.querySelector('#ingredients')


for(const ingredient of ingredients){
    const li = document.createElement('li')
    li.textContent = ingredient;
    li.setAttribute('class', 'item');
    mainUl.appendChild(li)
}