// the functionalities goes in here 
// the navigation bar goes in here
const menuBar = document.querySelector('.slash-menu');
const menuLists = document.querySelector('.nav-lists-slash');

    // event listeners functionality goes in here
menuBar.addEventListener("click", ()=> {
    // console.log('i got clicked');
    console.log(menuLists);
    menuLists.classList.toggle("show-lists");
})

// the rest functionalities like the carousel effect goes in here.

// changing of image src upon click

// getting the date of the copyright

const getYear = document.querySelector(".copy-year");

const MainDate = new Date();
const recentYear = MainDate.getFullYear();

getYear.textContent = recentYear;




