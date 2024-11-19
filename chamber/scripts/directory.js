// header code

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById('navigation');

ham.addEventListener('click', () => {
    list.classList.toggle('show');
    ham.classList.toggle('show');
})


// header way finding code
const home = document.getElementById('home');
const directory = document.getElementById('directory');
const join = document.getElementById('join');
const discover = document.getElementById('discover');
const mainHeader = document.getElementById('main-header');

home.classList.add('active');
home.addEventListener("click", () => {
    home.classList.add('active');
    directory.classList.remove('active');
    join.classList.remove('active');
    discover.classList.remove('active');
    mainHeader.textContent = 'Home';
})

directory.addEventListener("click", () => {
    directory.classList.add('active');
    home.classList.remove('active');
    join.classList.remove('active');
    discover.classList.remove('active');
    mainHeader.textContent = 'Directory';
})

join.addEventListener("click", () => {
    join.classList.add('active');
    home.classList.remove('active');
    directory.classList.remove('active');
    discover.classList.remove('active');
    mainHeader.textContent = 'Join';
})

discover.addEventListener("click", () => {
    discover.classList.add('active');
    home.classList.remove('active');
    directory.classList.remove('active');
    join.classList.remove('active');
    mainHeader.textContent = 'Discover';
})


// Main code
// const cards = document.getElementById('cards');
// const gridCards = document.getElementById('grid');
// const listCards = document.getElementById('list');
// const url = "../chamber/data/members.json"

async function getMemberData() {
    const members = await fetch(url);
    const data = await members.json();
    console.log(data);
    displayMembers(data);
}

getMemberData();

// Display memebers

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let card1 = document.createElement('section');
        let card2 = document.createElement('section');
        let card3 = document.createElement('section');
        let card4 = document.createElement('section');
        

        let businessName = document.createElement('h3');
        let industry = document.createElement('p');
        let logo = document.createElement('img');
        let address = document.createElement('ul');
        let email = document.createElement('li');
        let phone = document.createElement('li');
        let website = document.createElement('li');


        businessName.textContent = `${member.name}`;
        industry.textContent = `${member.industry}`
        email.innerHTML = `<strong>email</strong>: ${member.email}`;
        phone.innerHTML = `<strong>Phone</strong>: ${member.phone_number}`;
        website.innerHTML = `<strong>Url</strong>: ${member.website_url}`;
        logo.setAttribute('src', member.image_file);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        card.classList.add('card-container');
        card1.classList.add('card-1');
        card2.classList.add('card-2');
        card3.classList.add('card-3');
        card4.classList.add('card-4');


        card1.appendChild(businessName);
        card1.appendChild(industry)
        card2.appendChild(logo);
        address.appendChild(email);
        address.appendChild(phone);
        address.appendChild(website);
        card3.appendChild(address);

        card4.appendChild(card2);
        card4.appendChild(card3);

        card.appendChild(card1);
        card.appendChild(card4);
        cards.appendChild(card);
    });
}

// cards.classList.add('grid');
// listCards.addEventListener('click', () => {
//     // alert('hello');
//     cards.classList.add('list')
//     cards.classList.remove('grid');
// })

// gridCards.addEventListener('click', () => {
//     // alert('hello');
//     cards.classList.add('grid')
//     cards.classList.remove('list');
// })

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#buttons");

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
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`