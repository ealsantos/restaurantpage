import mainImage from './img/frontimg.jpg'
export function createAbout(){
    const h1 = document.createElement('h1')
        h1.textContent = "About Us"
        mainContent.appendChild(h1)
        
        const p = document.createElement('p')
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        mainContent.appendChild(p)
        
        let img = document.createElement('img')
        img.src = mainImage
        mainContent.appendChild(img)
}