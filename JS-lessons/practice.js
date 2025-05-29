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
    return el % 2 === 0 ? el * 2 : 0
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
    {name: "iPhone 16", price: 999, rating: 4.8},
    {name: "Galaxy S25", price: 899, rating: 4.3},
    {name: "Pixel 9", price: 799, rating: 4.0},
    {name: "Xiaomi 15", price: 699, rating: 3.9}
];

const result4 = products.map((el) => {
    return el.rating >= 4.5
        ? `🔥 ${el.name} — ${el.price}₽ (ТОП!)`
        : (el.rating < 4.5 && el.rating >= 4)
            ? `👍 ${el.name} — ${el.price}₽`
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
    .map(({product, text, rating, createdAt}) => {
        const date = createdAt.split('-').reverse().join('.');
        return `${date} ${product}: ${rating >= 4 ? '👍 ' : ''}${text} (Рейтинг: ${rating})`;
    })
console.log(result5)

//Method Filter
//1. Простая фильтрация (разминка)
//
// Дан массив чисел. Оставь только чётные числа.


const newNumbers = [1, 2, 3, 4, 5, 6];
// Ожидаемый результат: [2, 4, 6]

const result6 = newNumbers.filter((el) => el % 2 === 0 ? el : '')
console.log(result6)

//2. Фильтрация объектов
//
// Дан массив пользователей. Оставь только совершеннолетних (возраст >= 18).
const newUsers = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 18 }
];
// Ожидаемый результат: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 18 }]
const result7 = newUsers.filter((el) => el.age >= 18)
console.log(result7)

//3. Комбинирование условий
//
// Дан массив товаров. Оставь только дорогие (price > 500) и доступные (inStock: true).
const newProducts = [
    { name: 'Phone', price: 700, inStock: true },
    { name: 'Tablet', price: 300, inStock: true },
    { name: 'Laptop', price: 1200, inStock: false }
];
// Ожидаемый результат: [{ name: 'Phone', price: 700, inStock: true }]
const result8 = newProducts.filter((el) => el.price > 500 && el.inStock)
console.log(result8)


//4. Фильтрация строк
//
// Дан массив строк. Оставь только те, которые начинаются на букву "А" (кириллицей или латиницей).
const words = ['Apple', 'Banana', 'Апельсин', 'арбуз', 'Grape'];
// Ожидаемый результат: ['Apple', 'Апельсин', 'арбуз']

const result9 = words.filter((el) => el[0].toLowerCase() === 'a' || el[0].toLowerCase() === 'а' ? el : '')
console.log(result9)


//5. Сложная фильтрация (вызов!)
//
// Дан массив книг. Оставь только те, у которых:
//
//     Рейтинг >= 4.5, или
//
//     Год издания после 2020, и жанр — "Фантастика".

const books = [
    { title: 'Book 1', rating: 4.7, year: 2019, genre: 'Детектив' },
    { title: 'Book 2', rating: 4.2, year: 2021, genre: 'Фантастика' },
    { title: 'Book 3', rating: 4.9, year: 2022, genre: 'Фантастика' }
];
// Ожидаемый результат: [{ title: 'Book 1', ... }, { title: 'Book 3', ... }]
const result10 = books.filter((el) => el.rating >= 4.5 && el.year > 2020 && el.genre === 'Фантастика')

console.log(result10)


//Method Reduce
const numbersR = [1, 2, 3, 4];
const sum = numbersR.reduce((acc, num) => acc + num, 0);
console.log(sum)

const usersR = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

const groupedByAge = usersR.reduce((acc, user) => {
    const age = user.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(user);
    return acc;
}, {});

console.log(groupedByAge)

//Задача 1
const z1 = [1, 2, 3, 4, 5];
const sum1 = z1.reduce((acc, num) => acc + num, 0);
console.log(sum1)

//Задача 2
const z2 = [1, 2, 3, 4];
const mult2 = z2.reduce((acc, num) => acc * num, 1);
console.log(mult2)

//Задача 3
//Поиск максимального числа
// Найти максимальное число в массиве.
const numbers3 = [200, 2, 34, 45];
const maxNum = numbers3.reduce((acc, num) => num > acc? num : acc);
console.log(maxNum)

//Задача 3
//Поиск минимального числа
// Найти минимальное число в массиве.
const numbers4 = [-100, 2, 34, 45];
const minNum = numbers4.reduce((acc, num) => num < acc? num : acc);
console.log(minNum)