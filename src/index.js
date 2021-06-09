import './style.css';
import { contact } from './contact';
import { home } from './home';
import { menu } from './menu';

const header = (() => {
    const bar = document.createElement('div');
    bar.classList.add('nav-bar');

    const name = document.createElement('h1');
    name.textContent = 'Singh da Dhaba';
    name.id = 'title';

    const nav = document.createElement('div');
    nav.classList.add('nav-bar');
    nav.classList.add('nav');

    const home = document.createElement('h2');
    home.textContent = 'Home';
    home.classList.add('wt200');
    home.id = 'home';

    const menu = document.createElement('h2');
    menu.textContent = 'Menu';
    menu.classList.add('wt200');
    menu.id = 'menu';

    const contact = document.createElement('h2');
    contact.textContent = 'Contacts';
    contact.classList.add('wt200');
    contact.id = 'contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    bar.appendChild(name);
    bar.appendChild(nav);
    bar.appendChild(nav);
    return { bar, home, menu, contact };
})();

const mainContent = (() => {
    const body = document.body;

    const content = document.createElement('div');
    content.id = 'content';
    const bar = header.bar;

    const homePage = home().homePage;
    const contactPage = contact().contact;
    const menuPage = menu().menu;

    content.appendChild(bar);
    content.appendChild(homePage);

    const changeDetails = (evt) => {
        const removeId = content.lastChild.id;
        const addId = evt.target.id;

        let removeElement, addElement;
        if (removeId === 'contact') {
            removeElement = contactPage;
        } else if (removeId === 'home' || removeId === 'title') {
            removeElement = homePage;
        } else if (removeId === 'menu') {
            removeElement = menuPage;
        } else return;

        if (addId === 'contact') {
            addElement = contactPage;
        } else if (addId === 'home' || addId === 'title') {
            addElement = homePage;
        } else if (addId === 'menu') {
            addElement = menuPage;
        }
        return { removeElement, addElement };
    }

    const changePage = (evt) => {
        console.log(evt.target);
        const {removeElement, addElement} = changeDetails(evt);
        if (removeElement === undefined || addElement === undefined) return;
        content.removeChild(removeElement);
        content.appendChild(addElement);
    }

    bar.addEventListener('click', changePage);
    body.appendChild(content);
})();
