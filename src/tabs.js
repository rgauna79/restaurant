import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {

    const content = document.querySelector('#content');

    //create div header-content
    const headerContent = document.createElement('div');
    headerContent.setAttribute('class','header-content');
    content.appendChild(headerContent);

    //create and append a headline
    const headline = document.createElement('h1');
    headline.innerHTML = 'Welcome to my Restaurant';
    headerContent.appendChild(headline);

    //create div group tabs 
    const btnTab = document.createElement('div');
    btnTab.setAttribute('class','btn-tab');
    headerContent.appendChild(btnTab);

    
    //create divs for each content
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    
    //set #id for divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //set class for divs
    div1.setAttribute('class', 'btn');
    div2.setAttribute('class', 'btn');
    div3.setAttribute('class', 'btn');


    //Set text content for tabs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //append to div #content
    btnTab.appendChild(div1);
    btnTab.appendChild(div2);
    btnTab.appendChild(div3);

    //add event listener
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })

    
}

function clearContent() {
    const content =  document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    const menuContent = document.querySelector('.menu-content');
    const contactContent = document.querySelector('.contact-content');


    if (pageContent) {
        content.removeChild(pageContent);
    } else if (menuContent) {
        content.removeChild(menuContent);
    } else {
        content.removeChild(contactContent);
    }

}

export default createTabs;