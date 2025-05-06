/*let testVar = 3*/

//console.log(testVar)

/*
console.log(y)

var y = 10

console.log(y)*/

//математические операторы
// +, -, *, /, **, %
let num = 1 + 4
let value = 7 % 3
console.log(num)
console.log(value)

//унарный оператор
let a = +'2'
console.log(a) // 2

console.log(+true) //1

let parsNum = parseInt('2') //число 2
console.log(parsNum, typeof parsNum)

let str1 = '2'
let str2 = '3'
let str3 = str1 + str2
console.log(str3, typeof str3) //23 string

let str4 = +str1 + +str2
console.log(str4, typeof str4) //5 number


//&& - логическое И (возвращает первое ложное значение)
console.log(1 === 1 && 2 === 2 && 3 === "3")
let age = 0 // - приниматся за false, а 1 - true
alert( age && "Good")
//|| - логическое ИЛИ (возвращает первое true)
console.log(1 === 1 || 2 === 2 || 3 === "3")

// ||= Логическое присваивание ИЛИ
let temp = "23"
/*temp ||= "данных пока нет" // - синтаксический сахар*/
if (!temp) {
    temp = "данных пока нет"
}
console.log(temp)

//Преоритеты

// ! > && > ||

