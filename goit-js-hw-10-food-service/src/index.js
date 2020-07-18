import '../src/styles.css';
import menu from './menu.json';
import menuTemplate from './templates/menuTemplate.hbs';
//Внутри уже лежит функция  -
// Во время импорта  handlebar  loader зразу компилирует код под капотом
// и передается готовый шаблончик - остается передать данные//
// console.log(menuTemplate);

const markup = menuTemplate(menu);
const refs = {
    body: document.querySelector('body'),
    menuItems: document.querySelector('.js-menu'),
    switchTheme: document.querySelector('.js-switch-input')
};

// Рэндерим разметку///
refs.menuItems.insertAdjacentHTML('beforeend', markup);

//Тема//
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

//Храним данные о темах в локальном хранилище
refs.body.classList.add(localStorage.theme);
savedSwitchTheme();

// Вешаем слушатель на событие change

refs.switchTheme.addEventListener('change', changeSwitchInput);

function changeSwitchInput(event) {
    event.preventDefault();

    localStorage.setItem('theme',
        refs.switchTheme.checked ? theme.DARK : theme.LIGHT);

    addClassThemeBody();

};
// Ставим свойство checked у чекбокса input.js-switch-input
//  в true, чтобы ползунок сдвинулся в правильное положение
function savedSwitchTheme() {
    if (localStorage.theme === theme.DARK) {
        refs.switchTheme.checked = true;
    }
}
//Добавляем классы  на єлемент body
function addClassThemeBody() {
    if (localStorage.theme === theme.DARK) {
        refs.body.classList.remove('light-theme');
        refs.body.classList.add('dark-theme');
    }
    if (localStorage.theme === theme.LIGHT) {
        refs.body.classList.remove('dark-theme');
        refs.body.classList.add('light-theme');
    }
}