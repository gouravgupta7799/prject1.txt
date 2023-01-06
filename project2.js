let items = document.getElementsByClassName('list-group-item');

items[2].textContent = 'hello 2'

for (let i = 0; i < items.length; i++) {
  items[i].style.fontweight = 'bold'
}
items[2].style.background = 'green'