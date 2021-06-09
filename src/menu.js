
const menu = () => {
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.textContent = 'this is menu page';
    
    return { menu };
}

export { menu };