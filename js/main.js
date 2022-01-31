const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

if (hamburger_menu) {
    hamburger_menu.addEventListener('click', () => {
        container.classList.toggle('active');
    });
}
