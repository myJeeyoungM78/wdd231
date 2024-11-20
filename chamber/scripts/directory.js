// header code

// Burger code
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Update aria-expanded attribute
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    
    // Optionally prevent scrolling when menu is open
    document.body.style.overflow = isExpanded ? 'hidden' : '';
})

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

// header way finding code
// const home = document.getElementById('Home');
// const directory = document.getElementById('directory');
// const join = document.getElementById('join');
// const discover = document.getElementById('discover');
// const mainHeader = document.getElementById('main-header');


// home.addEventListener("click", () => {
//     home.classList.add('active');
//     directory.classList.remove('active');
//     join.classList.remove('active');
//     discover.classList.remove('active');
//     mainHeader.textContent = 'Home';
// })

// directory.addEventListener("click", () => {
//     directory.classList.add('active');
//     home.classList.remove('active');
//     join.classList.remove('active');
//     discover.classList.remove('active');
//     mainHeader.textContent = 'Directory';
// })

// join.addEventListener("click", () => {
//     join.classList.add('active');
//     home.classList.remove('active');
//     directory.classList.remove('active');
//     discover.classList.remove('active');
//     mainHeader.textContent = 'Join';
// })

// discover.addEventListener("click", () => {
//     discover.classList.add('active');
//     home.classList.remove('active');
//     directory.classList.remove('active');
//     join.classList.remove('active');
//     mainHeader.textContent = 'Discover';
// })


// Main code
// const cards = document.getElementById('card');
// const gridCards = document.getElementById('article');
// const listCards = document.getElementById('list');
const cards = document.querySelector('#cards')
const url = "data/members.json";

async function getMemberData() {

    // try {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //       throw new Error(`Response status: ${response.status}`);
    //     }
    
    //     const json = await response.json();
    //     console.log(json);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // const members = await fetch(url, {
    //     body: JSON.stringify({}),
    // });
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.members);
    displayMembers(data.members);
    // displayListMembers(data.members);
}

getMemberData();

// Display memebers

// document.body.onload = addElement;

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('article');        

        let businessName = document.createElement('h3');
        let industry = document.createElement('p');
        let logo = document.createElement('img');
        let address = document.createElement('ul');
        let email = document.createElement('li');
        let phone = document.createElement('li');
        let website = document.createElement('li');


        businessName.textContent = `${member.businessName}`;
        industry.textContent = `${member.industry}`
        address.textContent = ``
        email.innerHTML = `<strong>Email</strong>: ${member.email}`;
        phone.innerHTML = `<strong>Phone</strong>: ${member.phone}`;
        website.innerHTML = `<strong>Url</strong>: ${member.website}`;
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `logo of ${member.businessName}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(businessName);
        card.appendChild(industry)
        card.appendChild(logo);
        address.appendChild(email);
        address.appendChild(phone);
        address.appendChild(website);
        card.appendChild(address);

        cards.appendChild(card);

    });
}

// const membertable = document.createElement('table');

// const displayListMembers = (members) => {
//     members.forEach((member) => {
//         let card = document.createElement('section');
            
//         let row = membertable.insertRow(0);

//         let cell1 = row.insertCell(0);
//         cell1.innerHTML= `${member.businessName}`;
//         cell1.setAttribute('colspan', 2);
//         let cell2 = row.insertCell(1);
//         cell2.innerHTML = `${member.industry}`;
    
//         card.appendChild(membertable);

//         gridCards.appendChild(card);

//     });
// }


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// Footer code

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Initial load of all courses
//displayCourses();
