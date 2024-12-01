// header code

const ham = document.querySelector('nav');
const list = document.getElementById('navigation');

ham.addEventListener('click', () => {
list.classList.toggle('show');
ham.classList.toggle('show');
});

  // header way finding code
const home = document.getElementById('home');
const directory = document.getElementById('directory');
const join = document.getElementById('join');
const discover = document.getElementById('discover');
const mainHeader = document.getElementById('main-header');

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
  
//   // spotlights code
// const cards = document.querySelector('.business-grid')
// const url = "data/members.json";

// async function getMemberData() {

//     const response = await fetch(url);
//     const data = await response.json();

//     // console.table(data.members);
//     displayMembers(data.members);
//     // displayListMembers(data.members);
// }

// getMemberData();
  
  
  // Footer code
  
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
  
  // Initial load of all courses
  //displayCourses();
  