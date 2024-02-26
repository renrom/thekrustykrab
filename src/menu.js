import burger from '../src/assets/krabby_patty.png'

export default function menuPage() {
  const content = document.querySelector('#content');
  const tabTextP = document.createElement('p');
  const newContent = document.createTextNode('Menu of the Day');
  const btnHome = document.querySelector('#btnhome');
  const btnAbout = document.querySelector('#btnabout');
  const btnMenu = document.querySelector('#btnmenu');

  const menuitemtext = '1 for $5,-'
  btnMenu.style.color = 'red';
  btnMenu.style.backgroundColor = 'wheat';
  btnAbout.style.color = 'wheat';
  btnAbout.style.backgroundColor = 'red';
  btnHome.style.color = 'wheat';
  btnHome.style.backgroundColor = 'red';

  content.textContent = '';
  tabTextP.appendChild(newContent);
  content.appendChild(tabTextP);
  const menuList = document.createElement("ul");
  menuList.style.listStyleType = 'none';

  
  const menuImage = document.createElement('img');
  menuImage.src = burger;
  menuImage.style.height = '100px'

  for (let i = 1; i < 5; i++) {
    let menuImage = document.createElement('img');
    menuImage.src = burger;
    menuImage.style.height = '100px'

    let menuItem = document.createElement("li");
    menuItem.style.display = 'flex';
    menuItem.style.alignItems = 'center';
    let menuTextP = document.createElement("p");
    let menuText  = document.createTextNode(menuitemtext);
    menuTextP.appendChild(menuText);
  
    menuItem.appendChild(menuTextP);
    menuItem.appendChild(menuImage);
    menuList.appendChild(menuItem);
    console.log(i);
  }

  //menuItem.appendChild(menuImage);
  

  content.appendChild(menuList);




}
