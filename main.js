// Допустим товары приходят нам в таком виде из базы -
let product1 = {
    id: 1,
    name: "Кочерга",
    img: 'https://clck.ru/SwrQT',
    price: 10,
    skidka: 3,
    kol: 0
}
let product2 = {
    id: 2,
    name: "Булка",
    img: 'https://clck.ru/SwoBX',
    price: 5,
    skidka: 4,
    kol: 0
}

// Собираем Товары(можно написать функцию )
let product = [product1, product2]

// ОТРИСОВКА ТОВАРОВ
  let listname = ['id', 'Название','Картинка',  'Цена', 'Скидка']
  var bs = document.getElementById("busket");
  var tb = document.createElement("table");
  bs.append(tb);
  var tr = document.createElement('tr')
  tb.append(tr)
// ОТРИСОВКА ЗАГОЛОВКА
  for (let i = 0; i < listname.length; i++) {
      var th = document.createElement('th');
      th.innerHTML = listname[i];
      tr.append(th)
  }

  let qq = Object.values(product1)
  for (let i = 0; i < product.length; i++) {
      var tr2 = document.createElement('tr');
      tb.append(tr2)
      for (let j = 0; j < qq.length-1; j++) {         //  qq.length-1 чтобы не отображалось количество
          var td = document.createElement('td');
          td.innerHTML = Object.values(product[i])[j]  //j - 'элементы массива'
          tr2.append(td)
      }

      // Ниже можно сделать функцией или циклом!! (мб доделать)


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

    //console.log(i)
  }

//Добавляем каркас корзины
var search_tb = document.getElementById("table1")
search_tb.insertAdjacentHTML('beforeEnd', '<table><tr><th>Название</th><th>Количество</th><th></th><th></th><th></th></tr></table><button class="tbBut" onclick="PopUpShow()" type="submit()">Далее</button>')

//var cost = 0 // Общяя стоимость товара
var qqr = 0 // Общее количество товара
var prod = []

//Функция Общей Суммы
function bus_sum(foo){
  var cost = 0
  //console.log(product[foo].name + product[foo].kol)
  for (let i = 0; i < product.length; i++) {
    cost = cost + product[i].kol * product[i].price
  }
  //cost = 0
  //cost = cost + product[foo].kol* (product[foo].price - (product[foo].price *product[foo].skidka / 100))
  //cost =  cost + product[foo].kol * product[foo].price
  var lb = document.getElementById("lb")
  lb.innerHTML = `Количество товаров в корзине - ` + qqr + " на общую сумму - " + cost
}
//ФУНКЦИЯ ДОБАВЛЕНИЯ В КОРЗИНУ
function addtobasket(foo) {
  var tb1 = document.querySelector(`#table1`)
  tb1.style.display = 'grid'
  var ddd = document.querySelector(`#bus${foo} > td:nth-child(1)`)
  if (ddd!= null && ddd.textContent == product[foo].name ) {
    alert('Товар уже добавлен в корзину')
  }
  else {
     //bus_sum(foo)
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
     //Добавление кнопки для +
     var p = document.createElement("td")
     tr2.append(p)
     var but = document.createElement("button")
     but.setAttribute("class", "tbBut")
     but.setAttribute("onclick", `pluscol(${foo})`)
     but.setAttribute("type", "submit()")
     but.innerHTML = "+"
     tr.append(but)
     // Добавление кнопки для -
     var p = document.createElement("td")
     tr2.append(p)
     var but = document.createElement("button")
     but.setAttribute("class", "tbBut")
     but.setAttribute("onclick", `minuscol(${foo})`)
     but.setAttribute("type", "submit()")
     but.innerHTML = "-"
     tr.append(but)
    //Кнопка удалить
     td = document.createElement('td')
     tr.append(td)
     td.insertAdjacentHTML('afterbegin', `<button class="tbBut" onclick="deltobusket(${foo})" type="submit()">Удалить</button>`)
     bus_sum(foo)
  }
}

//УДАЛЕНИЕ ТОВАРОВ ИЗ КОРЗИНЫ
function deltobusket(foo) {
  document.getElementById(`bus${foo}`).remove()
  qqr -=product[foo].kol
  product[foo].kol =0
  bus_sum(foo)
}

//ФУНКЦИЯ УМЕНЬШЕНИЕ КОЛИЧЕСТВА ТОВАРОВ
function minuscol(foo) {
    if (product[foo].kol <= 0) {
        product[foo].kol = 0
        console.log("Количество товара не может быть меньше одного")
    }
    else {
      qqr-=1
      product[foo].kol-=1
      //cost = product[foo].kol * product[foo].price
    }
    var p = document.querySelector(`#bus${foo} > td:nth-child(2)`)
    p.innerHTML = product[foo].kol
    bus_sum(foo)
    //qqr = qqr - product[foo].kol
}
//ФУНКЦИЯ УВЕЛИЧЕНИЯ КОЛИЧЕСТВА ТОВАРОВ
function pluscol(foo) {
    qqr +=1
    product[foo].kol+=1
    //cost = product[foo].kol * product[foo].price
    var p = document.querySelector(`#bus${foo} > td:nth-child(2)`)
    p.innerHTML = product[foo].kol
    bus_sum(foo)
}
//КНОПКА ДАЛЕЕ

function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
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
