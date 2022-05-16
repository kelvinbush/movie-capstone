import './style.css';
import MLogo from './assets/logo-dark.png';
import searchIcon from './assets/search.svg';

const logo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = MLogo;
logo.appendChild(myLogo);

const search = document.getElementById('search');
search.src = searchIcon;
