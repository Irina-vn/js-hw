// Есть массив цветов в hex - формате и кнопки Start и Stop.

// Напиши скрипт, который после нажатия кнопки Start, раз в
// секунду меняет цвет фона body на случайное значение из
// массива используя инлайн - стиль.При нажатии на кнопку
// Stop, изменение цвета фона должно останавливаться.

// ⚠️Учти, на кнопку Start можно нажать бесконечное количество
// раз.Сделай так, чтобы пока изменение темы запушено, кнопка
// Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
//     используй функцию randomIntegerFromInterval
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

refs.body.dataset.action = false;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let setRandomColor;
//Вешаем слушатель событий на боди
refs.body.addEventListener('click', event => {
    if (event.target === refs.startBtn) {
        onStart();
    }
    if (event.target === refs.stopBtn) {
        onStop();
    }
});

// Для получения значения data-атрибута используется свойство dataset

function onStart() {
    if (refs.body.dataset.action === 'true') {
        return;
    }

    refs.body.dataset.action = true;

    setRandomColor = setInterval(() => {
        const colorBg = randomIntegerFromInterval(0, colors.length - 1);
        console.log(colorBg);
        document.body.style.backgroundColor = colors[colorBg];
    }, 1000);
}

function onStop() {
    clearInterval(setRandomColor);
    refs.body.dataset.action = false;
}