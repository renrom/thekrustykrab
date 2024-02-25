import fillHomePage from '../src/homepage.js';
import aboutPage from '../src/about.js';
import homePage from '../src/home.js';
import menuPage from '../src/menu.js';



fillHomePage();
homePage();

const btnHome = document.querySelector('#btnhome');
const btnMenu = document.querySelector('#btnmenu');
const btnAbout = document.querySelector('#btnabout');

btnHome.addEventListener('click', () => {

    homePage();
})

btnMenu.addEventListener('click',  () => {

    menuPage();
});

btnAbout.addEventListener('click',  () => {

    aboutPage();
})
