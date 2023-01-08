let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'hello world';

let submit = document.querySelector('input[type ="submit"]');
submit.value = 'SUBMIT here';

// let items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// let lastItems = document.querySelector('.list-group-item:last-child');
// lastItems.style.color = 'blue';

// let secondItems = document.querySelector('.list-group-item:nth-child(2)');
// secondItems.style.color = 'coral';

let secondItems = document.querySelector('.list-group-item:nth-child(2)');
secondItems.style.background = 'green';

let thirdItems = document.querySelector('.list-group-item:nth-child(3)');
thirdItems.innerHTML = null;

// querySelectorall//

let title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent = 'Hello'

let odd = document.querySelectorAll('li:nth-child(odd');
for (let i = 0; i < odd.length; i++) {
  odd[i].style.background = "green";
}

let even = document.querySelectorAll('li:nth-child(even');
for (let i = 0; i < 1; i++) {
  even[i].style.color = "red";
}

