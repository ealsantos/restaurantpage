
import mainImage from './img/frontimg.jpg'
export function createMenu(){
    const h1 = document.createElement('h1')
    h1.textContent = "This is our Menu"
    mainContent.appendChild(h1)
    
    const p = document.createElement('p')
    p.textContent = "French onion soup"
    mainContent.appendChild(p)

    const p2 = document.createElement('p')
    p2.textContent = "Cheese burger"
    mainContent.appendChild(p2)

    const p3 = document.createElement('p')
    p3.textContent = "Chicken sandwich"
    mainContent.appendChild(p3)

    const p4 = document.createElement('p')
    p4.textContent = "Vegetables salad"
    mainContent.appendChild(p4)
    
    let img = document.createElement('img')
    img.src = mainImage
    mainContent.appendChild(img)
}