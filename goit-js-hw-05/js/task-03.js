// Напиши класс Storage, который будет создавать объекты для управления
//  складом товаров. При вызове будет получать один аргумент - начальный 
//  массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage{

constructor(items) {
this.items = items;
};

getItems(item){
    return (this.items);
};

addItem(item){
        this.items.push(item);
};
// тут не вірно. Я не знаю як видалити елемент масиву по назві, а не по індексу
removeItem(item){    
    this.items.splice(1, 1);

};


};


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);


const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Дроид');
// console.table(storage.items); 