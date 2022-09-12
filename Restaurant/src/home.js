export default loadHome;

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

function createHome() {
    const content = document.querySelector('.content')
    const footer = document.querySelector('.footer')

    const mainHome = document.createElement('section')
    mainHome.classList.add('home')
    content.insertBefore(mainHome, footer)

    const hero = document.createElement('div')
    hero.classList.add('hero')

    mainHome.appendChild(hero)

    const textFill = document.createElement('div')
    textFill.classList.add('textFill')

    hero.appendChild(textFill)

    const heroTitle = document.createElement('h2')
    heroTitle.classList.add('hero-title')
    heroTitle.textContent = "Welcome to Connor's Corndogs!"

    const heroSubtitle = document.createElement('h3')
    heroSubtitle.classList.add('hero-subtitle')
    heroSubtitle.textContent = '100% corn | 0% dog'

    textFill.appendChild(heroTitle)
    textFill.appendChild(heroSubtitle)



    const blurb = document.createElement('div')
    blurb.classList.add('blurb')

    mainHome.appendChild(blurb)

    const blurbTitle = document.createElement('h3')
    blurbTitle.classList.add('blurb-title')
    blurbTitle.textContent = "Did you know?"

    const blurbContent = document.createElement('p')
    blurbContent.classList.add('blurb-content')
    blurbContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas provident quis doloribus pariatur accusamus exercitationem explicabo non ab debitis atque esse repellendus officiis, iste ratione quisquam voluptatum culpa velit!'

    blurb.appendChild(blurbTitle)
    blurb.appendChild(blurbContent)

    return mainHome
}