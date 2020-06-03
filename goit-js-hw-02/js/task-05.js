// Напиши функцию checkForSpam(message), принимающую 1 параметр
// message - строку. Функция проверяет ее на содержание слов spam и sale.
//  Если нашли зарещенное слово то функция возвращает true,
//  если запрещенных слов нет функция возвращает false.
//  Слова в строке могут быть в произвольном регистре.

const checkForSpam = function(message) {

    let array = message.split(/\b/);    //?


    for(let i = 0; i < array.length; i += 1){
        let word = array[i].toLowerCase();

        if(word === 'spam' || word === 'sale'){
            return true;
        }

    };

    return false;
};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true