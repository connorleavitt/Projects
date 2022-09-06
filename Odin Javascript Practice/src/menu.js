export default loadMenu;

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

function createMenu() {
    const content = document.querySelector('.content')
    const footer = document.querySelector('.footer')

    const menu = document.createElement('section')
    menu.classList.add('menu')

    content.insertBefore(menu, footer)

    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())
    menu.appendChild(createMenuItem())

    return menu
}

function createMenuItem() {
    const menuItem = document.createElement('menu-item')
    menuItem.classList.add('menu-item')

    const itemImg = document.createElement('img')
    itemImg.src = '../dist/img/mustard.jpg' //placeholder for all items 
    menuItem.appendChild(itemImg)

    const menuTitle  = document.createElement('h3')
    menuTitle.classList.add('menu-title')
    menuTitle.textContent = 'Mustard!'
    menuItem.appendChild(menuTitle)

    const menuBlurb  = document.createElement('p')
    menuBlurb.classList.add('menu-item-blurb')
    menuBlurb.textContent = 'Corndog, mustard. Yum!'
    menuItem.appendChild(menuBlurb)

    return menuItem
}