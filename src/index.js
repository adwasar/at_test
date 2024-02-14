import './scss/main.scss'

import pathOne from './assets/icon-1.png'
import pathTwo from './assets/icon-2.png'

const element = document.createElement('h2')
element.innerHTML = 'String from JS'
element.classList.add('greetings')
document.body.appendChild(element)

const imgOne = document.createElement('img')
imgOne.src = pathOne
document.body.appendChild(imgOne)

const imgTwo = document.createElement('img')
imgTwo.src = pathTwo
document.body.appendChild(imgTwo)
