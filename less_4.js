/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

*/


//ЗАДАНИЕ 1
//объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }
let my_num = '245'

function my_obj(num) {
    if (num < 0 || num > 999) {
        console.log('Число превышает 999 или меньше 0')
        return console.log(bar)
    }
    else {
        if (my_num.length == 3) {
            this.one = Number(my_num[2])
            this.tens = Number(my_num[1])
            this.hundreds = Number(my_num[0])
        }
        if (my_num.length == 2) {
            this.one = Number(my_num[1])
            this.tens = Number(my_num[0])
            this.hundreds = 0
        }
        if (my_num.length == 2) {
            this.one = Number(my_num[0])
            this.tens = 0
            this.hundreds = 0
        }
    }
}

console.log(new my_obj(my_num))


// ЗАДАНИЕ 2
//Корзина сначала пустая
let busket = []
//Допустим товары приходят в таком виде
let product1 = {
    id: 1,
    name: "Кочерга",
    price: 30,
    skidka: 3
}
let product2 = {
    id: 2,
    name: "Булка",
    price: 15,
    skidka: 4
}
//Функция расчета скидки
function getfullprice(foo) {
    return { id: foo.id, name: foo.name, price: foo.price - (foo.price * foo.skidka / 100) }
}

//функция добавления в корзины
function addtobasket(foo) {
    busket.push(getfullprice(foo))
}

//добавляем в корзину наши  2 товара
addtobasket(product1)
addtobasket(product2)


//просматриваем корзину
console.log(busket)


function countBasketPrice(foo) {
    let price = 0
    for (i in foo) {
        price += foo[i].price
    }
    return console.log('Всего товаров в корзине - ' + busket.length + ' на сумму ' + price + ' рублей');
}

countBasketPrice(busket)