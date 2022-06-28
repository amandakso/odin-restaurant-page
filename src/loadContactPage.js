const loadContactPage = () => {
    const element = document.createElement('div');

    const contactName = document.createElement('h1');
    contactName.innerText = "Contact Us";
    element.appendChild(contactName);

    const phoneNumber = document.createElement('h4');
    phoneNumber.innerText = "Phone Number: 1-(800)-BOBATEA";
    element.appendChild(phoneNumber);

    const emailAddress = document.createElement('h4');
    emailAddress.innerText = "Email: info@bobatea.com";
    element.appendChild(emailAddress);

    return element;
}

export { loadContactPage };