document.getElementById('title')
{/* <h1 id=​"title" class=​"heading">​DOM Learning with Javascript​</h1>​ */}
document.getElementById('title').id
// 'title'
document.getElementById('title').class
// undefined
document.getElementById('title').className
// 'heading'
document.getElementById('title').getAttribute('id')
// 'title'
document.getElementById('title').getAttribute('class')
// 'heading'
document.getElementById('title').setAttribute('class','test')
// undefined
title = document.getElementById('title')
{/* <h1 id=​"title" class=​"test">​DOM Learning with Javascript​</h1>​ */}
title
{/* <h1 id=​"title" class=​"test">​DOM Learning with Javascript​</h1>​ */}
title.style.backgroundColor='green'
// 'green'
title.style.padding = "15px"
// '15px'
title.style.borderRadius="15px"
// '15px'


/* inner text returns the only text which is visible to user
    textContent returns the complete text of the element
    innerHTML returns the complete HTML return inside the element*/

title.textContent
// 'DOM Learning with Javascript'
title.innerHTML
// 'DOM Learning with Javascript'
title.innerText
// 'DOM Learning with Javascript'

title
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
title.innerText
// 'DOM Learning with Javascript'
title.textContent
// 'DOM Learning with Javascript test text'
title.innerHTML
// 'DOM Learning with Javascript<span style="display: none;"> test text</span>'


document.getElementsByClassName('heading')
// HTMLCollection [h1#title.heading, title: h1#title.heading]


/* querySelector() is used to return the first element that matches the given id, class, etc.*/

document.querySelector('h1')
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
document.querySelector('h2')
{/* <h2>​Lorem ipsum h2​</h2>​ */}
document.querySelector("#title")
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
document.querySelector(".heading")
{/* <h1 id=​"title" class=​"heading">​…​</h1>​ */}
document.querySelector("input[type='password]'")
// null

document.querySelector("input[type='password']")
{/* <input type=​"password" name id>​ */}
document.querySelector('p:first-child')
// null

document.querySelector('ul')
{/* <ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​ */}
const myul = document.querySelector('ul')
// undefined
myul.querySelector('li')
{/* <li>​…​</li>​ */}
const turnGreen = myul.querySelector('li')
// undefined
turnGreen.style.backgroundColor="green"
// 'green'
turnGreen.style.padding = "15px"
// '15px'
turnGreen.innerText
// 'one'
turnGreen.innerText = 'five'
// 'five'


/* querySelectorAll() return a NodeList which is like an array but not an array 
    it does not have map function unlike array but forEach function */

document.querySelectorAll('li')
// NodeList(3) [li, li, li]
temp = document.querySelectorAll('li')
// NodeList(3) [li, li, li]
temp[0].style.color='green'
// 'green'
const myh1 = document.querySelectorAll('h1')
// undefined
myh1
// NodeList [h1#title.heading]
myh1[0].style.color='red'
// 'red'
temp.forEach(function(l) {
    l.style.backgroundColor='green'
})
// undefined


/* getElementsByClassName returns a HTMLCollection which is also like a array
    but it has no iterative functions like map, forEach
    to iterate over it, it has to be converted to a array*/

document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const tempList = document.getElementsByClassName('list-item')
// undefined
tempList
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const arr = Array.from(tempList)
// undefined
arr
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
arr.forEach(function(li){
    li.style.color = 'orange'
})
// undefined