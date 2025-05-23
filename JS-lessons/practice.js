/*
let score = +prompt("Введите ваш балл ( от 0 до 100:)")

/!*
if (score >= 90) {
    alert("КроссаучеГ")
} else {
    alert("Подучись Йопта!")
}*!/

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
console.log(result)*/

//Задача 1
//У тебя есть массив строк — названий городов. Напиши код, который с помощью метода map() создаст новый массив, где к каждому названию города будет добавлена строка "City: " в начале.
const cities = ["London", "Paris", "Tokyo", "New York"];

const result1 = cities.map((el) => {
    return `City: ${el}`;
})

console.log(result1)

//Задача 2
//У тебя есть массив объектов с пользователями, где каждый объект содержит имя (name) и возраст (age).
// Нужно создать новый массив строк в формате: "<Имя>: <Возраст> лет".
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 17}
];

const result2 = users.map((el) =>
    el.age < 18
        ? `${el.name}: несовершеннолетний`
        : `${el.name}: ${el.age} лет`
)

console.log(result2)

//Задача 3
//Дан массив чисел. Верни новый массив, где:
//
//     Четные числа умножены на 2,
//
//     Нечетные заменены на 0.
const numbers = [1, 2, 3, 4, 5];
const result3 = numbers.map((el) => {
   return  el%2 === 0 ? el*2 : 0
})
console.log(result3)

//Задача 4
//Дан массив объектов-продуктов, где у каждого есть название (name), цена (price) и рейтинг (rating). Нужно создать новый массив строк, где:
//
//     Если рейтинг продукта ≥ 4.5, то выводим "🔥 <Название> — <Цена>₽ (ТОП!)",
//
//     Если рейтинг < 4.5, но ≥ 4.0, то "👍 <Название> — <Цена>₽",
//
//     В остальных случаях — "<Название> — <Цена>₽".

const products = [
    { name: "iPhone 16", price: 999, rating: 4.8 },
    { name: "Galaxy S25", price: 899, rating: 4.3 },
    { name: "Pixel 9", price: 799, rating: 4.0 },
    { name: "Xiaomi 15", price: 699, rating: 3.9 }
];

const result4 = products.map((el) => {
    return  el.rating >= 4.5
        ? `🔥 ${el.name} — ${el.price}₽ (ТОП!)`
        : (el.rating < 4.5 && el.rating >= 4)
            ?  `👍 ${el.name} — ${el.price}₽`
            : `${el.name} — ${el.price}`
})
console.log(result4)

//Задача 5
//Задача: "Анализ отзывов"
//
// Дан массив отзывов о товарах. Нужно:
//
//     Отфильтровать отзывы с рейтингом ≥ 3 (убрать негативные).
//
//     Преобразовать оставшиеся отзывы в формат:
//     "<Название товара>: <Текст отзыва> (Рейтинг: <Рейтинг>)".
//
//     Добавить дату в начало строки, переведя createdAt из формата "2024-05-20" в "20.05.2024".

const reviews = [
    {
        product: "iPhone 15",
        text: "Отличный дисплей!",
        rating: 5,
        createdAt: "2024-05-20"
    },
    {
        product: "Galaxy S24",
        text: "Батарея держит недолго.",
        rating: 2,
        createdAt: "2024-04-15"
    },
    {
        product: "Pixel 8",
        text: "Камера просто огонь!",
        rating: 4,
        createdAt: "2024-03-10"
    }
];

const result5 = reviews.filter((el) => el.rating > 3)
    .map(({product, text, rating, createdAt})=> {
        const date = createdAt.split('-').reverse().join('.');
        return `${date} ${product}: ${rating >= 4 ? '👍 ' : ''}${text} (Рейтинг: ${rating})`;
    })
console.log(result5)