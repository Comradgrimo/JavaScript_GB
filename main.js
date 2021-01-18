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
// Допустим товары приходят нам в таком виде -
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

// Собираем корзину(можно написать функцию )
let product = [product1, product2]

// КОРЗИНА
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

    let qq = Object.values(product1)
    for (let i = 0; i < product.length; i++) {
        var tr2 = document.createElement('tr');
        tb.append(tr2)
        for (let j = 0; j < qq.length; j++) {
            var td = document.createElement('td');
            td.innerHTML = Object.values(product[i])[j]
            tr2.append(td)
        }
        // Ниже можно сделать функцией или циклом!! (мб доделать)
        
        //Добавление кнопки для +
        var p = document.createElement("td")
        tr2.append(p)
        var but = document.createElement("button")
        but.setAttribute("class", "tbBut")
        but.setAttribute("onclick", `pluscol(${i})`)
        but.setAttribute("type", "submit()")
        but.innerHTML = "+"
        p.append(but)
        // Добавление кнопки для -
        var p = document.createElement("td")
        tr2.append(p)
        var but = document.createElement("button")
        but.setAttribute("class", "tbBut")
        but.setAttribute("onclick", `minuscol(${i})`)
        but.setAttribute("type", "submit()")
        but.innerHTML = "-"
        p.append(but)
        //Добавление кнопки для Корзины
        var p3 = document.createElement("td")
        tr2.append(p3)
        var but = document.createElement("button")
        but.setAttribute("class", "tbBut")
        but.setAttribute("onclick", `addtobasket(${i})`)
        but.setAttribute("type", "submit()")
        but.innerHTML = "Добавить в корзину"
        p3.append(but)



    }
}

var cost = 0
var qqr = 0
function addtobasket(foo) {
    qqr = qqr + product[foo].kol
    cost = cost + product[foo].kol* (product[foo].price - (product[foo].price *product[foo].skidka / 100))
    var lb = document.getElementById("lb")
    lb.innerHTML = "Товаров в корзине - " + qqr + " на общую сумму - " + cost
}

function minuscol(foo) {
    if (product[foo].kol <= 0) {
        product[foo].kol = 0
        console.log("Количество товара не может быть меньше одного")
    }
    else {product[foo].kol-=1}
    var p = document.querySelector(`#busket > table > tr:nth-child(${foo +2}) >td:nth-child(5)`)
    p.innerHTML = product[foo].kol
}

function pluscol(foo) {
    product[foo].kol+=1
    var p = document.querySelector(`#busket > table > tr:nth-child(${foo +2}) >td:nth-child(5)`)
    p.innerHTML = product[foo].kol
}

$('.Button').tilt({ scale: 1.1, speed: 1000 })