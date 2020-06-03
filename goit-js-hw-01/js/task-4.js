const credits = 23580;
const pricePerDroid = 3000;
let message = prompt('Какое количество дроидов Вы хотите купить?');
message = Number(message);
// console.log(Number.isNaN (message));

const totalPrice = message * pricePerDroid;
const balance = credits - totalPrice;

if(message == '' || message == null){
    console.log('Отменено пользователем!');
}if(message === totalPrice){
    console.log(totalPrice);
}

if(totalPrice === NaN){
    console.log('Неверное значение!');
}else if(credits < totalPrice){
    console.log('Недостаточно средств на счету!');
}else{
    console.log(`Вы купили ${message} дроидов, на счету осталось ${balance} кредитов.`);
}
