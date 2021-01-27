



// Допустим товары приходят нам в таком виде из базы -
let product1 = {
    id: 1,
    name: "Кочерга",
    img: 'https://clck.ru/SwoBX',
    price: 30,
    skidka: 3,
    kol: 2
}
let product2 = {
    id: 2,
    name: "Булка",
    img: 'https://clck.ru/SwrQT',
    price: 15,
    skidka: 4,
    kol: 1
}

// Собираем Товары(можно написать функцию )
let product = [product1, product2]

// ОТРИСОВКА ТОВАРОВ
  let listname = ['id', 'Название','Картинка',  'Цена', 'Скидка', 'Количество']
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
          td.innerHTML = Object.values(product[i])[j]  //j - 'элементы массива'
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
  //Добавление картинки
  img1 = document.querySelector('table')
  m_img = document.createElement("img")
  m_img.setAttribute("type", "fsd")
  for (let i=0; i < product.length; i++) {
    m_img = document.createElement("img")
    m_img.setAttribute("src", product[i].img)
    m_img.setAttribute("width", "30px")
    m_img.setAttribute("style", "cursor: zoom-in")
    m_img.setAttribute("onclick", "zoomit(this)")
    img1.children[i+1].children[2].innerHTML = ""
    img1.children[i+1].children[2].append(m_img)

    console.log(i)
  }

//Добавляем каркас корзины
var search_tb = document.getElementById("table1")
search_tb.insertAdjacentHTML('afterbegin', '<table><tr><th>Название</th><th>Количество</th><th>Удалить</th></tr></table>')

var cost = 0
var qqr = 0
var prod = []
//ФУНКЦИЯ ДОБАВЛЕНИЯ В КОРЗИНУ
function addtobasket(foo) {
    qqr = qqr + product[foo].kol
    cost = cost + product[foo].kol* (product[foo].price - (product[foo].price *product[foo].skidka / 100))

   // var lq = document.getElementById("lq")
    //lq.style.display= 'block'
    var lb = document.getElementById("lb")

    lb.innerHTML = `Товар ${product[foo].name} добавлен, Количество товаров в корзине - ` + qqr + " на общую сумму - " + cost

   var search_tb = document.querySelector('#table1 > table > tbody')
   tr = document.createElement('tr')
   tr.setAttribute('id',`bus${foo}`)
   search_tb.append(tr)
   
  //Показывает название
   td = document.createElement('td')
   td.innerHTML= product[foo].name
   tr.append(td)
  //Показывает количество
   td = document.createElement('td')
   td.innerHTML= product[foo].kol
   tr.append(td)
  //Кнопка удалить
   td = document.createElement('td')
   tr.append(td)
   td.insertAdjacentHTML('afterbegin', `<button class="tbBut" onclick="deltobusket(${foo})" type="submit()">Удалить</button>`)
   //var but = document.createElement("button")
   //but.setAttribute("class", "tbBut")
   //but.setAttribute("onclick", `addtobasket()`)
   //but.setAttribute("type", "submit()")
   //but.innerHTML = "Удалить"
   //td.append(but)
}

//УДАЛЕНИЕ ТОВАРОВ ИЗ КОРЗИНЫ
function deltobusket(foo) {
  document.getElementById(`bus${foo}`).remove()
  qqr = qqr - product[foo].kol
  cost = cost - product[foo].kol* (product[foo].price - (product[foo].price *product[foo].skidka / 100))
  var lb = document.getElementById("lb")
  lb.innerHTML = `Товар ${product[foo].name} добавлен, Количество товаров в корзине - ` + qqr + " на общую сумму - " + cost
  //console.log(search_tb)
}

//ФУНКЦИЯ УМЕНЬШЕНИЕ КОЛИЧЕСТВА ТОВАРОВ
function minuscol(foo) {
    if (product[foo].kol <= 0) {
        product[foo].kol = 0
        console.log("Количество товара не может быть меньше одного")
    }
    else {product[foo].kol-=1}
    var p = document.querySelector(`#busket > table > tr:nth-child(${foo +2}) >td:nth-child(6)`)
    p.innerHTML = product[foo].kol
}
//ФУНКЦИЯ УВЕЛИЧЕНИЯ КОЛИЧЕСТВА ТОВАРОВ
function pluscol(foo) {
    product[foo].kol+=1
    var p = document.querySelector(`#busket > table > tr:nth-child(${foo +2}) >td:nth-child(6)`)
    p.innerHTML = product[foo].kol
}



//____________________________________________________
var t, a;
function zoomit(e){
  clearTimeout(t);
  var w = e.width;
  if (a) {
    t = setInterval(function () {
      if (w <= 30) clearTimeout(t); // Стили на уменьшение
      e.style.cursor = 'zoom-in';
      e.style.borderRadius = '1px';
      e.style.boxShadow = '2px 2px 5px #fff'
      e.width = w--;
    }, 5);
  }
  else {
    t = setInterval(function () {
      if (w >= 250) clearTimeout(t);
// Стили на увеличение
      e.style.cursor = 'zoom-out';
      e.style.borderRadius = '5px';
      e.style.boxShadow = '2px 2px 5px #888'
      e.width = w++;
    }, 5);
  }
  a = !a;
}
//$('.Button').tilt({ scale: 1.1, speed: 1000 })
