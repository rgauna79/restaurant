const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent =  document.createElement('div');
    pageContent.classList.add('page-content');
    
    //create and append an image
    const image = document.createElement('img');
    image.src = "https://t3.ftcdn.net/jpg/02/38/10/52/360_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg";
    image.style.width = '100%';
    image.style.maxWidth = '600px';
    pageContent.appendChild(image);

    //create and append a copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town';
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
    
}

export default createRestaurantHomePage;
