const adminPassword = 'jqueryismyjam';
let message = prompt('Введите пароль');

console.log(adminPassword === message);


// const normalizeAdminPassword = adminPassword.toLocaleLowerCase();
// console.log(adminPassword === normalizeAdminPassword);



if(message === '' || message === null){
    console.log('Отменено пользователем!');
}else if(message === adminPassword){
    console.log('Добро пожаловать!');
}else{
    console.log('Доступ запрещен, неверный пароль!');
}

alert(message);