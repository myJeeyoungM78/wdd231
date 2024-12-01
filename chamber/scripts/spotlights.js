  // spotlights code
// const cards = document.querySelector('#spotlightSection')
// const url = "data/members.json";

// async function getMembersData() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             displayMembers(data.members);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.error(error);
//         // document.getElementById('spotlightSection').innerHTML = 'Failed to load members data';
//     }
// }

// getMembersData();

// const displayMembers = (members) => {

//     members.forEach((member) => {
//         let card = document.createElement('article');

//         let businessName = document.createElement('h3');
//         let industry = document.createElement('p');
//         let logo = document.createElement('img');
//         let address = document.createElement('ul');
//         let email = document.createElement('li');
//         let phone = document.createElement('li');
//         let website = document.createElement('li');
//         let membershipLevel = document.createElement('li')


//         businessName.textContent = `${member.businessName}`;
//         industry.textContent = `${member.industry}`;
//         address.textContent = `${member.address}`;
//         membershipLevel = `${member.membershipLevel}`;
//         email.innerHTML = `<strong>Email</strong>: ${member.email}`;
//         phone.innerHTML = `<strong>Phone</strong>: ${member.phone}`;
//         website.innerHTML = `<strong>Url</strong>: ${member.website}`;
//         logo.setAttribute('src', member.logo);
//         logo.setAttribute('alt', `logo of ${member.businessName}`);
//         logo.setAttribute('loading', 'lazy');
//         logo.setAttribute('width', '340');
//         logo.setAttribute('height', '440');

//         card.appendChild(businessName);
//         card.appendChild(industry)
//         card.appendChild(logo);
//         address.appendChild(email);
//         address.appendChild(phone);
//         address.appendChild(website);
//         card.appendChild(address);

//         cards.appendChild(card);

//     });
// }

async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displaySpotlights(members.members);
    } catch (error) {
        console.error(error);
        document.getElementById('spotlightSection').innerHTML = 'Failed to load member data';
    }
}

function displaySpotlights(members) {
    const spotlightSection = document.getElementById('spotlightSection');
    spotlightSection.innerHTML = ''; // Clear existing content

    // Filter for gold (level 3) and silver (level 2) members
    const eligibleMembers = members.filter(member => 
        member.membershipLevel === 2 || member.membershipLevel === 3
    );

    // Randomly select 3 members
    const selectedMembers = shuffleArray(eligibleMembers).slice(0, 3);

    // Create and append cards for selected members
    selectedMembers.forEach(member => {
        const card = createMemberCard(member);
        spotlightSection.appendChild(card);
    });
}

function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'business-card';

    // Convert membership level number to text
    const membershipText = member.membershipLevel === 3 ? 'Gold Member' : 'Silver Member';

    card.innerHTML = `
        <div class="card-header">
            <h4>${member.businessName}</h4>
            <hr>
            <p class="tagline">${member.industry}</p>
        </div>
        <div class="card-content">
            <img src="${member.logo.replace('../', '')}" alt="${member.businessName}" class="business-image">
            <div class="contact-info">
                <p><span>EMAIL:</span> ${member.email.replace('https://', '')}</p>
                <p><span>PHONE:</span> ${member.phone}</p>
                <p><span>URL:</span> ${member.website.replace('https://', '')}</p>
            </div>
        </div>
    `;
    
    return card;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadMembers);




// const spotLightbutton = document.querySelector("#spotLights");
// const membershipLevelbutton = document.querySelector("#membershipLevel");