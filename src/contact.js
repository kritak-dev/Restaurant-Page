
export function contact() {
    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.textContent = 'This is the contacts page';
    contact.classList.add('text');

    return { contact };
}