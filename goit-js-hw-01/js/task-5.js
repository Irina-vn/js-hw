
let message = prompt('Укажите страну доставки.').toLowerCase();


let costOfDelivery = 100;
costOfDelivery = Number(costOfDelivery);

if(message === '' || message === null){
    console.log('Отменено пользователем!');
}

switch(message){
    case "китай":
        costOfDelivery = 100;
    break;

    case "чили":
        costOfDelivery = 250;
    break;

    case "австралия":
        costOfDelivery = 170;
    break;

    case "индия":
        costOfDelivery = 80;
    break;

    case "ямайка": 
    costOfDelivery = 120;
    break;

    
    default:
        alert('В вашей стране доставка не доступна');

}
console.log(`Доставка в ${message} будет стоить ${costOfDelivery} кредитов`);

