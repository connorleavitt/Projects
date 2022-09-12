import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';


export default initialize;


function initialize() {
    const content = document.querySelector('#content')

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    // FIX BELOW! 
    // set active tab as highlighted
    setActiveTab(document.querySelector(".nav-list"));
    
    
    // load home as default
    loadHome();

}

function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const headerTitle = document.createElement('h1')
    headerTitle.classList.add('header-title')
    headerTitle.textContent = "Connor's Corndogs"

    header.appendChild(headerTitle)
    return header
}

function createNav() {
    const nav = document.createElement('nav')
    nav.classList.add('nav')

    const list = document.createElement('ul')
    list.classList.add('nav-ul')

    const listItemHome = document.createElement('li')
    listItemHome.classList.add('nav-list')
    listItemHome.textContent = 'Home'
    listItemHome.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(listItemHome)
        loadHome();
    });

    const listItemMenu = document.createElement('li')
    listItemMenu.classList.add('nav-list')
    listItemMenu.textContent = 'Menu'
    listItemMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(listItemMenu)
        loadMenu();
    });

    const listItemAbout = document.createElement('li')
    listItemAbout.classList.add('nav-list')
    listItemAbout.textContent = 'About'
    listItemAbout.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(listItemAbout)
        loadAbout();
    });

    list.appendChild(listItemHome)
    list.appendChild(listItemMenu)
    list.appendChild(listItemAbout)

    nav.appendChild(list)
    return nav
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.classList.add('footer')

    const footerContent = document.createElement('p')
    footerContent.classList.add('footer-content')
    footerContent.textContent = "connorleavitt"

    footer.appendChild(footerContent)
    return footer
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

function setActiveTab(button) {
    const navActive = document.querySelectorAll('.nav-list')
    navActive.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active')
            console.log('pressed button');
        }
    });

    button.classList.add('active')
}

