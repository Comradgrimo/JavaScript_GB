function multi() {
    let foo = document.getElementById('text1').value;
    if (isNaN(foo)) {
        alert("Введите число!");
    }
    else {
        alert("Температура в Фаренгейтах - " + ((foo * (9 / 5)) + 32));

    }

}

function second() {
    let admin
    let name = "Василий"
    admin = name

    alert(admin)
}

function three() {
    alert("Результат " + 1000 + "108" + " потому что переменные имеют разный тип")
}