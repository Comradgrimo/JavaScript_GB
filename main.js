function createtable() {
    //Размер шахматной доски
    var width = 8
    var lenght = 8

    list = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    var qq = document.getElementById("doska");
    var newElem = document.createElement('table');
    newElem.setAttribute('class', 'chess-board');
    qq.append(newElem);

    var tr = document.createElement('tr')
    newElem.append(tr)

    for (let i = 0; i < width + 1; i++) {
        var th = document.createElement('th')
        tr.appendChild(th)
        th.innerHTML = list[i]
    }

    for (let j = 1; j < lenght + 1; j++) {
        var tr = document.createElement('tr')
        var th = document.createElement('th')
        newElem.append(tr)
        th.innerHTML = String(j)
        tr.append(th)
        for (let i = 0; i < width; i++) {
            var tr1 = document.createElement('td')
            if (j % 2 == 0 && i % 2 == 0) {
                tr1.setAttribute('class', 'dark');
            }
            if (j % 2 != 0 && i % 2 != 0) {
                tr1.setAttribute('class', 'dark');
            }
            tr.append(tr1)
        }
    }
}

let product1 = {
    id: 1,
    name: "Кочерга",
    price: 30,
    skidka: 3,
    kol: 2
}
let product2 = {
    id: 2,
    name: "Булка",
    price: 15,
    skidka: 4,
    kol: 1
}
let product = [product1, product2]


function showBusket() {
    let listname = ['id', 'Название', 'Цена', 'Скидка', 'Количество']
    var bs = document.getElementById("busket");
    var tb = document.createElement("table");
    bs.append(tb);
    var tr = document.createElement('tr')
    tb.append(tr)

    for (let i = 0; i < listname.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = listname[i];
        tr.append(th)
    }

    //var tr1 = document.createElement('tr')
    //tb.append(tr1)

    let qq = Object.values(product1)
    for (let i = 0; i < product.length; i++) {
        var tr2 = document.createElement('tr');
        tb.append(tr2)
        for (let j = 0; j < qq.length; j++) {
            var td = document.createElement('td');
            td.innerHTML = Object.values(product[i])[j]
            tr2.append(td)
        }
        var p = document.createElement("td")
        tr2.append(p)
        var but = document.createElement("button")
        but.setAttribute("class", "tbBut")
        but.setAttribute("onclick", `addtobasket(${i})`)
        but.setAttribute("type", "submit()")
        but.innerHTML = "Добавить в корзину"
        p.append(but)
    }
}

var qqr = 0
function addtobasket(foo) {
    qqr = qqr + product[foo].kol
    console.log("Товаров в корзине - " + qqr)
    return qqr
}
/*
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
*/



$('.Button').tilt({ scale: 1.1, speed: 1000 })