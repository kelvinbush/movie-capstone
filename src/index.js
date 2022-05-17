import './style.css';
import MLogo from './assets/logo-light.png';
import searchIcon from './assets/search.svg';
import footerIcon from './assets/light.png';

const logo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = MLogo;
logo.appendChild(myLogo);

const search = document.getElementById('search');
search.src = searchIcon;

const footer = document.getElementById('foot');
const fIcon = new Image();
fIcon.src = footerIcon;
footer.prepend(fIcon);
