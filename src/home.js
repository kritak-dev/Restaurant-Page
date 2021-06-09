export function home() {
    const homePage = document.createElement('div');
    homePage.id = 'home';
    homePage.innerHTML = 'This is the home page';
    homePage.classList.add('.text');

    return { homePage };
}