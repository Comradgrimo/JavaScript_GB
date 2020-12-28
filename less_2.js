function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function task_1() {
    alert("По умолчанию с и d равные 0\nв первой строчке переменной c присваеваем значение переменной а т.е 1, потом с = a + 1\nво второй строчке переменной c не присваеваем значение переменной а т.е 0, потом с = a + 1\nв третей строчке a уже равно 2 потом++а прибавляет 1 потом + 2\nв четвертой берем страрое значение b прибавляем 1 потом + 2\nв общем префиксная форма возвращает новое значение(++a), постфиксная форма возвращает старое значение(a++)")
}

function task_2() {
    var a = 2;
    var x = 1 + (a *= 2);
    alert(x)
}

function task_3() {
    let a = Number(document.getElementById('text1').value);
    let b = Number(document.getElementById('text2').value);
    if (a >= 0 && b >= 0) {
        alert(a - b);
    }
    if (a < 0 && b < 0) {
        alert(a * b);
    }
    if ((a > 0 && b < 0) || ((a < 0 && b > 0))) {
        alert(a + b);
    }
}

function task_4() {
    let a = getRandomInt(0, 15)
    alert("а = " + a)
    switch (a) {
        case 0:
            alert(0)
            break
        case 1: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 2: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 3: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 4: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 5: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 6: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 7: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 8: for (var i = 0; i <= a; i++) {
            alert(i)
        }
        case 9: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 10: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 11: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 12: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 13: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 14: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break
        case 15: for (var i = 0; i <= a; i++) {
            alert(i)
        }
            break

    }
}
function my_sum(a, b) {
    return a + b
}
function my_sub(a, b) {
    return a - b
}
function my_div(a, b) {
    return a / b
}
function my_mul(a, b) {
    return a * b
}


function mathOperation(arg1, arg2, operation) {
    var arg1 = Number(document.getElementById('text3').value)
    var arg2 = Number(document.getElementById('text4').value)
    var operation = document.getElementById('text5').value
    switch (operation) {
        case 'сумма':
            alert(my_sum(arg1, arg2));
            break;
        case 'вычитание':
            alert(my_sub(arg1, arg2));
            break;
        case 'умножение':
            alert(my_mul(arg1, arg2));
            break;
        case 'деление':
            alert(my_div(arg1, arg2));
            break;
        default:
            alert('Введите правильные данные');
            break;
    }
}

function task_7() {
    alert('"0" — это значение, константа. A null указывает на "пустое место" — объявленную, но неинициализированную переменную, объект и т.п.')
}

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

function task_8() {
    var x = Number(document.getElementById('text6').value)
    var n = Number(document.getElementById('text7').value)
    var foo
    foo = pow(x, n)
    alert(foo)
}
