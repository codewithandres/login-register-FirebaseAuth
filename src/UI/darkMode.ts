const themeButton = document.getElementById('theme-button');
const darkTheme: string = 'dark-theme';
const iconTheme: string = 'ri-sun-line';


const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-Icon');

const getCurrentTheme = (): string => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = (): string => themeButton?.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton?.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'](iconTheme);
}

themeButton?.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-Icon', getCurrentIcon());

})