// Счетчик состоит из спана и кнопок, 
// которые должны увеличивать и уменьшать
//  значение счетчика на 1.

// Создай переменную counterValue в которой
//  будет хранится текущее значение счетчика.
// Создай функции increment и decrement для 
// увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы 
// функций и обновление интерфейса

// const counterValue = document.querySelector('#counter');
// / counterValue.addEventListener('click', () => {
//     console.log('Clicked');
//     // console.log(Date.now());
// });

const btn = {
    add: document.querySelector("[data-action='increment']"),
    rem: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
    count: document.querySelector('#counter'),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  btn.add.addEventListener('click', increment);
  btn.rem.addEventListener('click', decrement);
  btn.count.addEventListener('click', () => {
  console.log('Clicked');
  });

////

// const btn = {
//     add: document.querySelector("[data-action='increment']"),
//     rem: document.querySelector("[data-action='decrement']"),
//     span: document.querySelector('#value'),
//     count: document.querySelector('#counter'),
//   };
//   let counterValue = 0;

//   const increment = () => {
//     counterValue += 1;
//     document.getElementById('value').textContent = counterValue;
//   };
  
//   const decrement = () => {
//     counterValue -= 1;
  
//     document.getElementById('value').textContent = counterValue;
//   };


//   const doStuffOnClick = () => {
//   console.log('Clicked');
//   };

//   btn.add.addEventListener('click', () => {
//     btn.count.addEventListener('click', doStuffOnClick);
//   });
//   btn.rem.addEventListener('click', () => {
//     btn.count.removeEventListener('click', doStuffOnClick);
//   });
 
//   btn.count.addEventListener('click', () => {

// //   console.log('Clicked');
// });
