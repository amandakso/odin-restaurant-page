import Icon from './boba-tea.png';

const loadHomePage = () => {
    const element = document.createElement('div');

    const  shopName = document.createElement('h1');
    shopName.innerText = "Boba Tea Shop";
    element.appendChild(shopName);

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const blurb = document.createElement('p');
    blurb.innerText = "blurb about the shop";
    
    element.appendChild(blurb);

    return element;
};

export { loadHomePage };