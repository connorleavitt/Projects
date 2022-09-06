export default loadAbout;

function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}



function createAbout() {
    const content = document.querySelector('.content')
    const footer = document.querySelector('.footer')

    const about = document.createElement('section')
    about.classList.add('contact')

    content.insertBefore(about, footer)

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    about.appendChild(contactInfo)

    const contactInfoTitle = document.createElement('h2')
    contactInfoTitle.classList.add('contact-info-title')
    contactInfoTitle.textContent = "About Us!"
    contactInfo.appendChild(contactInfoTitle)

    const contactInfoExtra = document.createElement('div')
    contactInfoExtra.classList.add('contact-info-extra')
    contactInfo.appendChild(contactInfoExtra)

        //address
        const contactAddress = document.createElement('div')
        contactAddress.classList.add('address')
            const contactAddressTitle = document.createElement('strong')
            contactAddressTitle.textContent = "Address:"
            contactAddressTitle.classList.add('address-title')

            const contactAddressContent = document.createElement('p')
            contactAddressContent.textContent = "123 Main St, City, State 12345"
            contactAddressContent.classList.add('address-content')

            contactAddress.appendChild(contactAddressTitle)
            contactAddress.appendChild(contactAddressContent)
        contactInfoExtra.appendChild(contactAddress)

        //phone
        const contactPhone = document.createElement('div')
        contactPhone.classList.add('address')
            const contactPhoneTitle = document.createElement('strong')
            contactPhoneTitle.textContent = "Phone:"
            contactPhoneTitle.classList.add('phone-title')

            const contactPhoneContent = document.createElement('p')
            contactPhoneContent.textContent = "(999) 654-148"
            contactPhoneContent.classList.add('phone-content')

            contactPhone.appendChild(contactPhoneTitle)
            contactPhone.appendChild(contactPhoneContent)
        contactInfoExtra.appendChild(contactPhone)


    // hours table
    const hoursTable = document.createElement('table')
    contactInfo.appendChild(hoursTable)

        //Sunday
        const tableRow1 = document.createElement('tr')
        hoursTable.appendChild(tableRow1)

        const tableDataSunday = document.createElement('td')
        tableDataSunday.classList.add('contact-day')
        tableDataSunday.textContent = 'Sunday'

        const tableDataSundayHours = document.createElement('td')
        tableDataSundayHours.classList.add('contact-hours')
        tableDataSundayHours.textContent = '12:00 PM - 9:00 PM PST'
        
        tableRow1.appendChild(tableDataSunday)
        tableRow1.appendChild(tableDataSundayHours)


        //Monday
        const tableRow2 = document.createElement('tr')
        hoursTable.appendChild(tableRow2)

        const tableDataMonday = document.createElement('td')
        tableDataMonday.classList.add('contact-day')
        tableDataMonday.textContent = 'Monday'

        const tableDataMondayHours = document.createElement('td')
        tableDataMondayHours.classList.add('contact-hours')
        tableDataMondayHours.textContent = '10:00 AM - 9:00 PM PST'
        
        tableRow2.appendChild(tableDataMonday)
        tableRow2.appendChild(tableDataMondayHours)


        //Tuesday
        const tableRow3 = document.createElement('tr')
        hoursTable.appendChild(tableRow3)

        const tableDataTuesday = document.createElement('td')
        tableDataTuesday.classList.add('contact-day')
        tableDataTuesday.textContent = 'Tuesday'

        const tableDataTuesdayHours = document.createElement('td')
        tableDataTuesdayHours.classList.add('contact-hours')
        tableDataTuesdayHours.textContent = '10:00 AM - 9:00 PM PST'
        
        tableRow3.appendChild(tableDataTuesday)
        tableRow3.appendChild(tableDataTuesdayHours)


        //Wednesday
        const tableRow4 = document.createElement('tr')
        hoursTable.appendChild(tableRow4)

        const tableDataWednesday = document.createElement('td')
        tableDataWednesday.classList.add('contact-day')
        tableDataWednesday.textContent = 'Wednesday'

        const tableDataWednesdayHours = document.createElement('td')
        tableDataWednesdayHours.classList.add('contact-hours')
        tableDataWednesdayHours.textContent = '10:00 AM - 9:00 PM PST'
        
        tableRow4.appendChild(tableDataWednesday)
        tableRow4.appendChild(tableDataWednesdayHours)


        //Thursday
        const tableRow5 = document.createElement('tr')
        hoursTable.appendChild(tableRow5)

        const tableDataThursday = document.createElement('td')
        tableDataThursday.classList.add('contact-day')
        tableDataThursday.textContent = 'Thursday'

        const tableDataThursdayHours = document.createElement('td')
        tableDataThursdayHours.classList.add('contact-hours')
        tableDataThursdayHours.textContent = '10:00 AM - 10:00 PM PST'
        
        tableRow5.appendChild(tableDataThursday)
        tableRow5.appendChild(tableDataThursdayHours)


        //Friday
        const tableRow6 = document.createElement('tr')
        hoursTable.appendChild(tableRow6)

        const tableDataFriday = document.createElement('td')
        tableDataFriday.classList.add('contact-day')
        tableDataFriday.textContent = 'Friday'

        const tableDataFridayHours = document.createElement('td')
        tableDataFridayHours.classList.add('contact-hours')
        tableDataFridayHours.textContent = '10:00 AM - 11:00 PM PST'
        
        tableRow6.appendChild(tableDataFriday)
        tableRow6.appendChild(tableDataFridayHours)


        //Saturday
        const tableRow7 = document.createElement('tr')
        hoursTable.appendChild(tableRow7)

        const tableDataSaturday = document.createElement('td')
        tableDataSaturday.classList.add('contact-day')
        tableDataSaturday.textContent = 'Saturday'

        const tableDataSaturdayHours = document.createElement('td')
        tableDataSaturdayHours.classList.add('contact-hours')
        tableDataSaturdayHours.textContent = '12:00 PM - 11:00 PM PST'
        
        tableRow7.appendChild(tableDataSaturday)
        tableRow7.appendChild(tableDataSaturdayHours)


    //map
    const map = document.createElement('div')
    map.classList.add('contact-map')
    contactInfo.appendChild(map)

    const mapImg = document.createElement('img')
    mapImg.src = '../dist/img/map.png' //placeholder for all items 
    map.appendChild(mapImg)

    return about
}