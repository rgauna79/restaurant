const createContactPage = () =>{    
    const content = document.querySelector("#content");
    const pageContent =  document.createElement('div');
    pageContent.classList.add('contact-content');
    
    //create and append header
    const header = document.createElement('div')
    const title = document.createElement('h1');
    header.classList.add('contact-header');
    title.classList.add('contact-title');
    pageContent.appendChild(header);
    header.appendChild(title);
    title.innerHTML = 'Contact Us';

    //create and append contact container
    const contactContent = document.createElement('div');
    const contactName = document.createElement('h4');
    const contactPhone = document.createElement('p');
    const contactImage = document.createElement('img');
    pageContent.appendChild(contactContent);
    contactContent.appendChild(contactName);
    contactContent.appendChild(contactPhone);
    contactContent.appendChild(contactImage);
    contactContent.classList.add('contact-info');
    contactName.classList.add('contact-name');
    contactPhone.classList.add('contact-phone');
    contactImage.classList.add('contact-img');

    //add data to contact info
    contactName.innerHTML = 'Roberto Gauna';
    contactPhone.innerHTML = '555-55-5555';
    

    content.appendChild(pageContent);
}

export default createContactPage;