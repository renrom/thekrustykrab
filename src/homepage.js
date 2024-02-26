
import backgroundImage from '../src/assets/the-krusty-krab.png'

function fillHomePage() {
    const content = document.querySelector('#content');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const footer = document.createElement('footer');
    const btnHome = document.querySelector('#btnhome');
    const btnAbout = document.querySelector('#btnabout');
    const btnMenu = document.querySelector('#btnmenu');
    const nav = document.querySelector('nav');
    const contentWrapper = document.querySelector('.content-wrapper');
    const button = document.querySelectorAll('button');


    btnHome.style.color = 'red';
    btnHome.style.backgroundColor = 'wheat';

    btnAbout.style.color = 'wheat';
    btnAbout.style.backgroundColor = 'red';
    btnMenu.style.color = 'wheat';
    btnMenu.style.backgroundColor = 'red';

    body.style.margin = '0';
    body.style.minHeight = '100vh';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.backgroundImage = `url(${backgroundImage})`;
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
    body.style.justifyContent = 'space-between';


    content.style.display = 'flex';
    content.style.alignItems = 'center';
    content.style.flexDirection = 'column';
    content.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    content.style.fontSize = '1.2rem';
    content.style.backgroundColor = 'black';
    content.style.marginTop = '50px';
    content.style.paddingLeft = '20px';
    content.style.paddingRight = '20px';

    content.style.width = '250px';
    content.style.height = '500px';
    content.style.opacity = '0.8';
    content.style.borderRadius = '10%';
    content.style.border = '5px ridge black';
    content.style.color = 'pink';

    header.style.height = '60px';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.opacity = '0.8';

    nav.style.opacity = '1';
    nav.style.display = 'flex';
    nav.style.justifyContent = 'end';
    nav.style.alignItems = 'center';
    nav.style.height = '50px';
    nav.style.gap = '15px';
    nav.style.paddingRight = '50px';

    contentWrapper.style.display = 'flex';
    contentWrapper.style.justifyContent = 'center';
    contentWrapper.alignItems = 'center';

    footer.style.height = '60px';
    footer.style.backgroundColor = 'black';
    footer.style.opacity = '0.7';

    button.forEach(button => {
        button.style.opacity = '1';
        button.style.height = '50px';
        button.style.border = '0';
        button.style.padding = '10px 20px 10px 20px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '1rem';
        button.style.fontWeight = '600';
        button.style.backgroundRadius = '6%';
        button.style.backgroundColor = 'red';
        button.style.color = '#1b1c79';
        button.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    })


    body.appendChild(footer);
}

export default fillHomePage;
