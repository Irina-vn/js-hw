let total = 0;
do{
    let userInput = prompt('Введите, пожалуйста, число');

    if(userInput === null) {
        break;
    }

    userInput = Number(userInput);
    

    const notANumber = Number.isNaN(userInput);

    if(notANumber){
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    total += userInput;

}
while(true);                 // БЕСКОНЕЧНЫЙ ЦИКЛ//

alert(`Общая сумма чисел равна ${total}`);  //Если ввели не число, возвращает - NaN







// Через for  такие задачи не делаются


// let userInput = +prompt('Введите, пожалуйста, число');
// userInput = Number(userInput);
// let total = 0;



// for(let i = 0; userInput === null; total + userInput) {
//     total += i;


//     if(userInput === null) {
//         break;
//     }

// }
// console.log(total);
// alert(`Общая сумма чисел равна ${total}`);
