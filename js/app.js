let counter = 0

document.addEventListener('DOMContentLoaded', () => {



  console.log('JavaScript loaded');

const form = document.querySelector("#new-item-form")
form = addEventListener('submit', handleForm)


})

const handleForm = function(event) {
  event.preventDefault();
  
  counter += 1 
  stringCounter ="hello"+counter

  const newListElement = document.createElement('ul')
  newListElement.classList.add(`${stringCounter}`)

  const outerlist = document.querySelector('#reading-list');
  outerlist.appendChild(newListElement)



  const newFormElement1 = document.createElement('li')
  newFormElement1.classList.add('f1')
  const newFormElement2 = document.createElement('li')
  newFormElement2.classList.add('f2')
  const newFormElement3 = document.createElement('li')
  newFormElement3.classList.add('f3')

  const result1 = document.querySelector('li.f1')
  newFormElement1.textContent = `${event.target.title.value}`
  class1 = `${event.target.title.value}`
 
  const result2 = document.querySelector('li.f2')
  newFormElement2.textContent = `${event.target.author.value}`
 
  const result3 = document.querySelector('li.f3')
  newFormElement3.textContent = `${event.target.category.value}`

  const innerlist = document.querySelector(`.${stringCounter}`);
  
  
  innerlist.appendChild(newFormElement1)
  innerlist.appendChild(newFormElement2)
  innerlist.appendChild(newFormElement3)
}