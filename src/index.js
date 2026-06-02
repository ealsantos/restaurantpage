import mainImage from './img/frontimg.jpg'
import { createMenu } from './menu'
import { createAbout } from './about'
import './styles.css'

const mainContent = document.getElementById('mainContent')

function createHome(){
    const h1 = document.createElement('h1')
    h1.textContent = "Welcome to E Restaurant!"
    mainContent.appendChild(h1)

    const p = document.createElement('p')
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    mainContent.appendChild(p)

    let img = document.createElement('img')
    img.src = mainImage
    mainContent.appendChild(img)
}

createHome()

const buttonHome = document.getElementById('homeBtn')
const buttonMenu = document.getElementById('menuBtn')
const buttonAbout = document.getElementById('aboutBtn')

buttonMenu.addEventListener("click", function() {
  mainContent.innerHTML = ""
  createMenu()
});

buttonAbout.addEventListener("click", function() {
  mainContent.innerHTML = ""
  createAbout()
});

buttonHome.addEventListener("click", function() {
  mainContent.innerHTML = ""
  createHome()
});
