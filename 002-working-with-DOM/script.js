// adding element to top and bottom of list

let list = document.getElementsByTagName('ul')[0]; // getting ul

let newItemLast = document.createElement('li');
let newTextItemLast = document.createTextNode('Meat');

newItemLast.appendChild(newTextItemLast);
newItemLast.className = 'list-group-item list-group-item-success';
list.appendChild(newItemLast);

// adding new element before first

let newItemFirst = document.createElement('li');
let newTextItemFirst = document.createTextNode('Buckwheat');

newItemFirst.appendChild(newTextItemFirst);
newItemFirst.className = 'list-group-item list-group-item-warning';

list.insertBefore(newItemFirst, list.firstChild);

// have to selec all li tags

let listItems = document.querySelectorAll('li');
let newClassItem;

for (let index = 0; index < listItems.length; index++) {
  newClassItem = listItems[index].getAttribute('class');
  newClassItem += ' cool';
  listItems[index].className = newClassItem;
}

// adding number of list items in the header

let heading = document.querySelector('h2');
let headingText = heading.firstChild.nodeValue;
let totalItems = listItems.length;
let addElementSpan = document.createElement('span');
let textIntoSpanElement = document.createTextNode(totalItems);
let spanElementText = addElementSpan.appendChild(textIntoSpanElement);
let newHeading = headingText + spanElementText;
heading.textContent = newHeading;
