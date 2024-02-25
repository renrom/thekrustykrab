export default function menuPage() {
    const content = document.querySelector('#content');
    const tabTextP    = document.createElement('p');
    
    const newContent = document.createTextNode('Menu');
    const btnHome = document.querySelector('#btnhome');
    const btnAbout = document.querySelector('#btnabout');
    const btnMenu = document.querySelector('#btnmenu');

    btnMenu.style.color = 'red';
    btnMenu.style.backgroundColor = 'wheat';
    btnAbout.style.color = 'wheat';
    btnAbout.style.backgroundColor = 'red';
    btnHome.style.color = 'wheat';
    btnHome.style.backgroundColor = 'red';

    content.textContent = '';
    tabTextP.appendChild(newContent);
    content.appendChild(tabTextP);
}
