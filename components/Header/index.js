// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

function Header() {

    const header = document.createElement('div')
    const date = document.createElement('span')
    const lambda = document.createElement('h1')
    const temperture = document.createElement('span')

    headerContainer.appendChild(header)
    header.appendChild(date)
    header.appendChild(lambda)
    header.appendChild(temperture)

    header.classList.add('header')
    date.classList.add('date')
    temperture.classList.add('temp')

    date.textContent = 'SMARCH 28, 2019'
    lambda.textContent = 'Lambda Times'
    temperture.textContent = '98°'
 
    return header
}

Header()