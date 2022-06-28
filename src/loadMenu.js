const loadMenu = () => {
    const element = document.createElement('div');

    const menuTitle = document.createElement('h1');
    menuTitle.innerText = "Menu";
    element.appendChild(menuTitle);

    const milktea = document.createElement('ul');
    milktea.innerText = "Milk Tea";

    const milkteaDrinks = [
        "Classic Milk Tea",
        "Jasmine Milk Tea",
        "Oolong Milk Tea", 
        "Taro Milk Tea",
        "Thai Milk Tea",
    ];

    const fruittea = document.createElement('ul');
    fruittea.innerText = "Fruit Tea";

    const fruitteaDrinks = [
        "Lychee Green Tea",
        "Mango Green Tea",
        "Passion Fruit Green Tea",
        "Pineapple Green Tea",

    ];

    const toppings = document.createElement('ul');
    toppings.innerText = "Toppings";

    const toppingItems = [
        "Aloe Vera",
        "Grass Jelly",
        "Lychee Jelly",
        "Tapioca Pearl",
        "Red Bean",
    ];

    const createList = (items, group) => {
        for (let i = 0; i < items.length; i++) {
            let item = document.createElement('li');
            item.innerText =items[i];
            group.appendChild(item);
        }

    }

    createList(milkteaDrinks, milktea);
    element.appendChild(milktea);

    createList(fruitteaDrinks, fruittea);
    element.appendChild(fruittea);

    createList(toppingItems, toppings);
    element.appendChild(toppings);

    return element;
}

export { loadMenu };