import Krab from '../src/assets/mr.krabs.png'

export default function homePage() {
    const content = document.querySelector('#content');
    const tabTextP    = document.createElement('p');
    
    const newContentLine1 = document.createTextNode('Welcome to the Krusty Krab!');
    const newContentLine2 = document.createTextNode('Come Spend Your Money Here!');
    const imageContent = document.createElement('img');
    imageContent.src = Krab;
    imageContent.style.objectFit = 'contain';
    imageContent.style.width = '100%'
    imageContent.style.height = '100%'
    

    tabTextP.style.height = '300px';    
    tabTextP.style.width = '400px';    

    const btnHome = document.querySelector('#btnhome');
    const btnAbout = document.querySelector('#btnabout');
    const btnMenu = document.querySelector('#btnmenu');

    btnHome.style.color = 'red';
    btnHome.style.backgroundColor = 'wheat';
    btnAbout.style.color = 'wheat';
    btnAbout.style.backgroundColor = 'red';
    btnMenu.style.color = 'wheat';
    btnMenu.style.backgroundColor = 'red';


    content.textContent = '';
    
    tabTextP.appendChild(newContentLine1);
    tabTextP.appendChild(document.createElement("br"));
    tabTextP.appendChild(document.createElement("br"));
    tabTextP.appendChild(newContentLine2);
    tabTextP.appendChild(document.createElement("br"));
    tabTextP.appendChild(imageContent);
    content.appendChild(tabTextP);
    
    
}
