let score = +prompt("Введите ваш балл ( от 0 до 100:)")

/*
if (score >= 90) {
    alert("КроссаучеГ")
} else {
    alert("Подучись Йопта!")
}*/

alert(score >= 90 ? "Отлично" : "Хорошо")


//циклы

let i = 0

while (i < 5) {
    if (i === 3) {
        break // прерывание цикла
    }
    console.log("value", i)
    i++
}

const pages = [1, 2, 3, 4, 5, 6]

//


for (let j = 5; j < 10; j++) {
    console.log(i)
}

function mult(a, b) {
    return a + b
}

const result = mult(40, 50)
console.log(result)