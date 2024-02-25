import plankton from '../src/assets/plankton.png'

export default function aboutPage() {
    const content = document.querySelector('#content');
    const tabTextP    = document.createElement('p');
    
    const newContentLine1 = document.createTextNode('The Krusty Krab is a fictional fast food restaurant in the American animated television series SpongeBob SquarePants.');
    const newContentLine2 = document.createTextNode('It is famous for its signature burger, the Krabby Patty, the formula to which is a closely guarded trade secret.');
    const imageContent = document.createElement('img');
    imageContent.src = plankton;
    imageContent.style.objectFit = 'contain';
    imageContent.style.width = '100%'
    imageContent.style.height = '100%'
    
    tabTextP.style.height = '300px';    
    tabTextP.style.width = '400px';    

    
    const btnHome = document.querySelector('#btnhome');
    const btnAbout = document.querySelector('#btnabout');
    const btnMenu = document.querySelector('#btnmenu');

    btnAbout.style.color = 'red';
    btnAbout.style.backgroundColor = 'wheat';
    btnHome.style.color = 'wheat';
    btnHome.style.backgroundColor = 'red';
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

