//  DOMmanipulation

// GetElementById()

/* gets the id of elements*/

//GetElementByClassName()

/*gets the class*/

//getElementByTagName()

/*gets the tag name eg: div*/ 

//querySelector()

/*gets the first tag / class / id named in the html tag*/

/*EG OF USING querySeletor()*/

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements

ul.append(li)

//Modifying the text

li.innerText = 'Chibuife';

// Modifying Attributes

li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

//Modifying Classes

li.classList.add('list-items');
//add the mention class property to the list item
// to remove it 

li.classList.remove('list-items');

//Remove Elements

li.remove();

// const firstListItem = document.querySelector('list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
//querySelectorAll()
//Styling Element
/*get all the tag/class/id named in the html tag*/


/*EG OF USING querySeletorAll()

const listItems = document.querySelectorAll('.list-items');

for( i = 0; i < listItems.lenght; i++){
    listItems[i].style.fontSize = '5rem';
}*/