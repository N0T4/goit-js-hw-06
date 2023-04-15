const ulMain = document.querySelector('#categories');
const li = ulMain.querySelectorAll('.item');

console.log(`Number of categories: ${li.length}`);

li.forEach(element => {
  const categori = element.querySelector('h2');
  const tCategort = categori.textContent;
  const ulInLi = element.querySelector('ul');
  const amountOfUlLi = ulInLi.querySelectorAll('li').length;
  console.log(`Category: ${tCategort}`);
  console.log(`Elements: ${amountOfUlLi}`);
});
