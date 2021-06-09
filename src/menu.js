
const menu = () => {
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.textContent = 'This is the menu page';
    menu.classList.add('text');
    
    return { menu };
}

export { menu };