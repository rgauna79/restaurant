import Plate1 from './images/carbonara.jpg'
import Plate2 from './images/cheese-ravioli.jpg'
import Plate3 from './images/lasagna.jpg'

const menuItems = {
    plate1: {
        name: 'Pasta Carbonara',
        image: Plate1,
        price: '$15.99'
    },
    plate2: {
        name: 'Raviolis four cheese',
        image: Plate2,
        price: '$11.99'
    },
    plate3: {
        name: 'Lasagna',
        image: Plate3,
        price: '$8.99'
    },
}

const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent =  document.createElement('div');
    pageContent.classList.add('menu-content');

    content.appendChild(pageContent)

    //Create divs for each plates
    Object.values(menuItems).forEach((element,index) => {
        let card = document.createElement('div')
        let name = document.createElement('p')
        let image = document.createElement('img')
        let price = document.createElement('p')

        card.setAttribute('key', index)
        card.classList.add('menu-plate')

        name.textContent = element.name
        image.setAttribute('src', element.image)
        image.setAttribute('alt', element.name)
        price.textContent = element.price

        card.appendChild(name)
        card.appendChild(image)
        card.appendChild(price)

        pageContent.appendChild(card)

    });

    

}

export default createMenuPage;