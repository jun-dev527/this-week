//   const numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8];
//   console.log(filterEvenNumbersCorrect(numbersToFilter)); // Ожидаемый вывод: [2, 4, 6, 8]


// function findMax(arr) {
//     if (arr.length === 0) {
//       return undefined; // Обработка пустого массива
//     }
//     let max = arr[0]; // Предполагаем, что первый элемент - наибольший
//     for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]; // Обновляем max, если находим большее число
//     }
//     return max;
// }
// }
// const numbersToFindMax = [15, 5, 25, 10, 30];
// console.log(findMax(numbersToFindMax)); // Ожидаемый вывод: 30

// const user = {
//     name: "Алиса",
//     sayHello: function() {
//     console.log(`Привет, меня зовут", ${this.name}`);
//     }
// };

//   user.sayHello(); // Выведет: Привет, меня зовут Алиса!


// function Person(name) {
// this.name = name;
// this.sayHi = function() {
//     console.log(`Привет, я ${this.name}.`);
// };
// }

// const person1 = new Person("Боб");
// person1.sayHi(); // Выведет: Привет, я Боб.
// console.log(person1 instanceof Person); // Выведет: true


// const calculator = {
//     value: 0,
//     add: function(num) {
//         this.value += num;
//         return this.value;
//     },
//     subtract: function(num) {
//         this.value -= num;
//         return this.value;
//     }
// };

// console.log(calculator.add(5));      // Ожидаемый вывод: 5
// console.log(calculator.subtract(2)); // Ожидаемый вывод: 3
// /                 / console.log(calculator.value);      // Ожидаемый вывод: 3


// let firstnum = prompt("введите первое число для калькулятора");
// let secondnum = prompt("введите второе число для калькулятора");

// const calc = {
//   add: function() {
//     return Number(firstnum) + Number(secondnum);
//   },
//   multiply: function() {
//     return Number(firstnum) * Number(secondnum);
//   },
//   divide: function() {
//     return Number(firstnum) / Number(secondnum);
//   },
//   subtract: function() {
//     return Number(firstnum) - Number(secondnum);
//   }
// }

// console.log(calc.add());
// console.log(calc.multiply());
// console.log(calc.divide());
// console.log(calc.subtract());

// const arr1 = ["A","B","C"]
// const arr2 = ["A","B","C"]

// const areArayEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1; i++){
//         const value1 = arr1
//         const value2 = arr2

//         const areValuesArrays = 
//             Array.isArray(value1) && Array.isArray(value2)

//         if (areValuesArrays) {
//             if(!areArayEqual(value1, value2)) {
//                 return false
//             }
//             else {
//                 continue
//             }
//         }
//     }
//     if (value1 !== value2) {
//         return false
//     }
//     return true
// } 


// const arr1 = ["A","B","C"]
// const arr2 = ["A","B","C"]

// const areArayEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1; i++){
//         const value1 = arr1[i]
//         const value2 = arr2[i]

//         const areValuesArrays = 
//             Array.isArray(value1) && Array.isArray(value2)

//         if (areValuesArrays) {
//             if(!areArayEqual(value1, value2)) {
//                 return false
//             }
//             else {
//                 continue
//             }
//         }
//     }
//     if (value1 !== value2) {
//         return false
//     }
//     return true
//         }


// const arr1 = ["A", 28]

// const [name, age] = arr1

// console.log(name)
// console.log(age)



// const letters = ["a", "b", "c"];

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
// }

// array.forEach(element => {
    
// });

// const prices = [100, 200, 300];

// console.log (prices.lastIndexOf(200))

// console.log (prices.includes(200))
// console.log (prices.includes(400))\

// const user = [
// {
//     name: "bob",
//     age: 20
// },
// {
//     name: "BIG",
//     age: 10
// },
// {
//     name: "ZXC",
//     age: 30
// },
// ]

// console.log (
//     user.some(user => user.name === "bob", user.age === 20)
// )
// console.log (
//     user.find(user => user.name === "bob", user.age === 20)
// )



// const arr1 = ["A","B","C"]
// const arr2 = ["A","B","C"]

// if (arr1.length !== arr2.length) {
//     console.log ("false")
// }
// else {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === arr2[i]) {
//             console.log ("true")
//         }
//         else {
//             console.log ("false")
//         }
//     }
// }

// const arr1 = ["A","B","C"]
// const arr2 = ["A","B","C"]

// const areAreEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true
// }

// let howareu = prompt("ты веришь в себя?");

// function checkBelief() {
// if (howareu === "да") {
//     console.log("хорошо");
// } else {
//     prompt("верь не в себя, верь в мою веру в тебя!");
// }
// }
// let howareuafter = prompt("теперь ты веришь в себя?");

// function checkbeliefafter() {
//     if (howareu === "лучше") {
//         console.log("хорошо");
//     } else {
//         prompt("верь не в себя, верь в мою веру в тебя!");
//     }
// }
// checkBelief();


// const user = {
//     name: 'алекс',
//     age: 28,
//     city: 'москва',
// }

// for (const key in user) {
//     console.log("имя свойства", key)
//     console.log("значение свойства", user[key])
// }


// const user = {
//     name: 'алекс',
//     age: 28,
//     city: 'москва',
// }

// const userKeys = Object.keys(user)

// console.log ("userKeys:", userKeys)

// userValue.forEach.forEach(element => {
//     console.log ("значение свойства", element)
// });




// const array1 = [1,2,3,4,5]

// function sumofarray(array1) {
//     let sum = 0
//     for (let i = 0; i < array1.length; i++) {
//         sum += array1[i]
//     }
//     return sum
// }
// console.log (sumofarray(array1))


// const array1 = [1, 2, 3, 4, 5];

// function maxofARRAY(array1) {
//     const maxValue = Math.max.apply(null, array1);
//         return maxValue;
// }

// console.log(maxofARRAY(array1));

// const array1 = [1, 2, 3, 4, 5];

// function isEven(array1) {
// array1.forEach(num => {
//     if (num % 2 === 0) {
//     console.log(num);
//     }
// });
// }

// isEven(array1);


// const array1 = [1, 2, 3, 4, 5];

// console.log (array1.reverse())


// const array1 = [1, 2, 3, 4, 5,5];

// function withoutDublicateInArray(array1) {
// for (let i = 0; i < array1.length - 1; i++) {
//     if (array1[i] === array1[i + 1]) {
//     return array1.splice(i, 1);
//     }
// }
// return true;
// }

// console.log(withoutDublicateInArray(array1));




//средний уровень)

// var massiv = ["a","aa","б","бб","в","вв","г","гг","д","дд"]

// massiv = massiv.slice(1).concat(massiv.slice(0, 1))


// var array1 = ["кот", "собака", "тигр", "рысь"]

// function filterByLenght(array1) {
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i].length === 4) {
//     console.log(array1[i])
//     }
// }
// }
// filterByLenght(array1)


// var array1 = ["a", "b", "a", "c", "b", "a"] // => {a:3, b: 2 c: 1}

// function countAndSortOccurrences(array1) {
//     const obj = {}
//     for (let i = 0; i < array1.length; i++) {
//         if (obj[array1[i]] === undefined) {
//             obj[array1[i]] = 1
//         } else {
//             obj[array1[i]]++
//         }
//     }
//     return obj
// }
// console.log(countAndSortOccurrences(array1)) 

// const arr1 = ["A","B","C"]
// const arr2 = ["A","B","C"]

// function isArrayEqualLength(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         console.log ("массивы не одинковые")
//     }
// }

// function isArrayEqual (arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             console.log ("массивы не одинковые")
//         }
//         else {
//             console.log ("массивы одинаковые")
//         }
//     }
// }


// const user = {
//     name: "алекс",
//     age: 28,
//     city: 'москва',
// }

// const userKeys = Object.keys(user)

// console.log ("userKeys:", userKeys)

// userKeys.forEach(element => {
//     console.log ("значение свойства", element)
// });

// for (let i = 0; i < userKeys.length; i++) {
//     console.log ("значение свойства", userKeys[i])
// }

// const values = Object.values(user)

// console.log ("values of object:", values)


// values.forEach(element => {
//     console.log ("значение свойства обьекта", element)
// });

// for (let i = 0; i < values.length; i++) {
//     console.log ("значение свойства обьекта", values[i])
// }



// const user = {
//     name: "алекс",
//     age: 28,
//     city: 'москва',
// }

// const userEntries = Object.entries(user)

// console.log ("userEntries:", userEntries)

// userEntries.forEach(element => {
//     console.log ("значение свойства", element)
// });

// for (let i = 0; i < userEntries.length; i++) {
//     console.log ("значение свойства", userEntries[i])
// }   


// const user = {
//     name: "алекс",
//     age: 28,
//     city: 'москва',
// }

// const userEntries = Object.entries(user)

// function ArrayOfObjects (userEntries) {
//     userEntries.forEach(element => {
//         const key = element[0]
//         const value = element[1]
//         console.log ("значение свойств", key, value)
//     });
// }

// console.log (ArrayOfObjects(userEntries))


// const user = {
//     name: "алекс",
//     age: 28,
//     city: 'москва',
// }


// const data = {}

// data[1] = 'один как число'
// data["1"] = 'один как строка'

// console.log ("data:", data)


// const data = {}

// data[1] = "1 как число"
// data["1"] = "1 как стр"

// console.log (data)

// const data = new Map([
//     [1, "один как число"],
//     ["1", "один как строка"]
// ])

// console.log (data)


// const data = new Map()

// data.set(1, "один как число")

// console.log (data)


// const data = new Map()

// data.set("name", "алекс")
// data.delete("name")

// console.log ( data.has("name"))

// data.clear()

// console.log (data)


// const data = new Map()

// data.set("name", "алекс")
// data.set("age", 28)
// data.set("city", "москва")

// for (let i = 0; i < data.size; i++){
//     console.log (data.keys())
//     console.log (data.values())
//     console.log (data.entries())
// }


// const data = new Map()

// data.set ("name", "Александр")
// data.set ("age", 28)

// for (const key  of data.keys()) {
//     console.log (key)
// }

// for (const value of data.values()) {
//     console.log (value)
// } 

// for (const entry of data.entries()) {
//     console.log (entry)
// }




//supernatural

// const v = "vampir"
// const d = "demon"
// const p = "prizrak"

// let sledOfVampir = prompt("Введите true или false:", "есть следы и укусы?");
// let sulfurSledOfDemon = prompt("Введите true или false:", "обнаружена сера?");
// let ectoplasmaOfPrizrak = prompt("Введите true или false:", "обнаружен эктоплазма?");

// function howToDefineVampir (v, d, p) {
//     if (sledOfVampir === true) {
//         console.log ("вампир", "убить осиновым колом")
//     }
//     else {
//         console.log ("это не вампир")
//     }
// }

// function howtoDefineDemon (v, d, p) {
//     if (sulfurSledOfDemon === true) {
//         console.log ("демон")
//     }
//     else {
//         console.log ("это не демон")
//     }
//     console.log ("загнать в ловушку и изгнать")
// }

// function howToDefinePrizrak (v, d, p) {
//     if (ectoplasmaOfPrizrak === true) {
//         console.log ("призрак")
//     }
//     else {
//         console.log ("это не призрак")
//     }
// }

// function whatDoIfItNotDefine (v, d, p) {
//     console.log ("если не определить этой программой, смотрите в дневнике отца винчестеры")
// }


// console.log (howToDefineVampir(v, d, p))
// console.log (howtoDefineDemon(v, d, p))
// console.log (howToDefinePrizrak(v, d, p))
// console.log (whatDoIfItNotDefine(v, d, p))




// const VAMPIRE = "вампир";
// const DEMON = "демон";
// const GHOST = "призрак";

// let hasVampireSigns = prompt("Есть следы и укусы? (true/false)", "false");
// let hasSulfur = prompt("Обнаружена сера? (true/false)", "false");
// let hasEctoplasm = prompt("Обнаружен эктоплазма? (true/false)", "false");

// let whereU = prompt("где вы находитесь? (лес/город/дом)", "город");


// function identifyMonster() {
//     if (hasVampireSigns === "true") {
//         console.log(VAMPIRE + ": убить осиновым колом");
//         return; // Выходим из функции, так как монстр уже определен
//     }

//     if (hasSulfur === "true") {
//         console.log(DEMON + ": загнать в ловушку и изгнать");
//         return; // Выходим из функции
//     }

//     if (hasEctoplasm === "true") {
//         console.log(GHOST + ": ..."); // Тут нужно добавить способ борьбы с призраком
//         return; // Выходим из функции
//     }

//     console.log("Если не удалось определить этой программой, смотрите в дневнике отца Винчестеров.");
// }

// identifyMonster();

// function identifyMonsterByPlace () {
//     if (whereU === "лес") {
//         let hasVampireSigns = prompt("Есть следы и кровь? (true/false)", "false");
//     }
//     if hasVampireSigns === "true" {
//         console.log(VAMPIRE + ": убить осиновым колом");
//     }

//     if (whereU === "дом") {
//         let hasGhostSigns = prompt("Есть эктоплазма/история призрака? (true/false)", "false");
//     }
//     if (hasGhostSigns === "true") {
//         console.log(GHOST + "найти труп, посыпать солью и сжечь", "либо уничтожить предмет");
//     }
//     else {
//         console.log("если не помогло, помогите призраку отомстить")
//     }
//     if (whereU === "город") {
//         let hasDemonSigns = prompt("Есть сера/следы демона? (true/false)", "false");
//     }
//     if (hasDemonSigns === "true") {
//         console.log(DEMON + ": загнать в ловушку и изгнать");
//     }
// }



// const VAMPIRE = "вампир";
// const DEMON = "демон";
// const GHOST = "призрак";

// let hasVampireSigns = prompt("Есть следы и укусы? (true/false)", "false");
// let hasSulfur = prompt("Обнаружена сера? (true/false)", "false");
// let hasEctoplasm = prompt("Обнаружен эктоплазма? (true/false)", "false");

// let whereU = prompt("Где вы находитесь? (лес/город/дом)", "город");

// function identifyMonster() {
//     if (hasVampireSigns === "true") {
//         console.log(VAMPIRE + ": убить осиновым колом");
//         return;
//     }

//     if (hasSulfur === "true") {
//         console.log(DEMON + ": загнать в ловушку и изгнать");
//         return;
//     }

//     if (hasEctoplasm === "true") {
//         console.log(GHOST + ": ..."); // Тут нужно добавить способ борьбы с призраком
//         return;
//     }

//     console.log("Если не удалось определить этой программой, смотрите в дневнике отца Винчестеров.");
// }

// identifyMonster();

// function identifyMonsterByPlace() {
//     if (whereU === "лес") {
//         let hasVampireInForest = prompt("Есть следы и кровь? (true/false)", "false");
//         if (hasVampireInForest === "true") {
//             console.log(VAMPIRE + ": убить осиновым колом");
//             return;
//         }
//     } else if (whereU === "дом") {
//         let hasGhostInHouse = prompt("Есть эктоплазма/история призрака? (true/false)", "false");
//         if (hasGhostInHouse === "true") {
//             console.log(GHOST + ": найти труп, посыпать солью и сжечь, либо уничтожить предмет");
//             return;
//         } else {
//             console.log("Если не помогло, помогите призраку отомстить");
//             return;
//         }
//     } else if (whereU === "город") {
//         let hasDemonInCity = prompt("Есть сера/следы демона? (true/false)", "false");
//         if (hasDemonInCity === "true") {
//             console.log(DEMON + ": загнать в ловушку и изгнать");
//             return;
//         }
//     }
//     console.log("Похоже, в этом месте ничего сверхъестественного нет.");
// }

// identifyMonsterByPlace();


// class student {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }


// const firststudent = new student
// const secondstudent = new student


// console.log (firststudent)
// console.log (secondstudent)




// class student {
//     planet = "земля"
//     county = "россия"
//     city = "москва"

//         constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     logAge () {
//         console.log (this.age)
//     }
// }

// const firststudent = new student ("вася", 20)
// const secondstudent = new student ("петя", 30)

// firststudent.logAge()
// secondstudent.logAge()



// class student {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     set city (value) {
//         this.city = value
//     }
//     get city() {
//         return this.city
//     }
// }

// const firststudent = new student ("вася", 20)

// firststudent.city = "москва"
// firststudent.county = "россия"

// console.log (firststudent.city)
// console.log (firststudent.county)

// class student {
//     country = "россия"


//     constructor (name, age) {
//         this.name = name
//         this.age = age
//     }

    
// static logAge() {
//         console.log ("чот-то")
//     }
// }

// const firststudent = new student ("вася", 22)

// console.log ("страна:", student.country)
// student.logAge()

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     eat() {console.log("ем")}
//     sleep() {console.log("сплю")}
// }

// const examplePerson = new Person("Вася", 22)
// console

// console.log ("имя:", examplePerson.name)
// console.log ("возраст:", examplePerson.age)
// examplePerson.eat()
// examplePerson.sleep()

// console.log ("программист:")


// class developer extends Person {
//     writeCode() {
//         console.log("писать код")
//     }
//     sleep() {
//         console.log ("не хочу спать, пойду писать код")
//         this.writeCode()
//     }
// }

// const exampleDeveloper = new developer("Вася", 22)
// console.log ("имя:", exampleDeveloper.name)
// console.log ("возраст:", exampleDeveloper.age)
// exampleDeveloper.eat()
// exampleDeveloper.sleep()
// exampleDeveloper.writeCode


// console.log ("js программист:")

// class jsDeveloperr extends developer {
//     constructor(name, age) {
//         super(name, age)
//     }
//     writeJS() {
//         console.log("писать js")
//     }
//     sleep() {
//         console.log ("не хочу спать, пойду писать js")
//         this.writeJS()
//     }
//     eat () {
//         console.log ("ем")
//         console.log ("смотрю видео курс по js")
//     }
// }

// const jsDeveloper = new jsDeveloperr("Вася", 22)
// console.log ("имя:", jsDeveloper.name)
// console.log ("возраст:", jsDeveloper.age)
// jsDeveloper.eat()
// jsDeveloper.sleep()
// jsDeveloper.writeJS



// class animal {
//     constructor (name, sound) {
//         this.name = name
//         this.sound = sound
//     }
//     makeSound () {
//         console.log (this.sound)
//     }
// }

// class dog extends animal {
//     constructor (name, sound) {
//         super (name, sound)
//     }
// }


// class Transport {
//     constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//     }
//     move() {
//     console.log(`Транспорт ${this.name} двигается со скоростью ${this.speed} км/ч`);
//     }
// }

// class Car extends Transport {

//     constructor(name, speed, brand) {
//     super(name, speed);
//     this.brand = brand;
//     }
//     PrintInfo() {
//     console.log(`Транспорт ${this.name} произведен компанией ${this.brand} и двигается со скоростью ${this.speed} км/ч`);
//     }
// }


// class Transport {
//     constructor(name, speed) {
//       this.name = name;
//       this.speed = speed;
//     }
  
//     move() {
//       console.log(`Транспорт ${this.name} двигается со скоростью ${this.speed} км/ч`);
//     }
//   }
  
//   class Car extends Transport {
//     constructor(name, speed, brand) {
//     super(name, speed);      this.brand = brand;
//     }

//     printInfo() {      console.log(`Это ${this.brand} - ${this.name}, движется со скоростью ${this.speed} км/ч`);
//     }
// }

//   // Пример использования:
// const car1 = new Car("Model S", 250, "Tesla");
//   car1.move();      // Транспорт Model S двигается со скоростью 250 км/ч
//   car1.printInfo(); // Это Tesla - Model S, движется со скоростью 250 км/ч


// class user {
//     constructor() {

//     }
//     sayHi () {
//         console.log ("Привет, я обычный пользователь")
//     }
// }

// class admin extends user {
//     sayHi () {
//         console.log ("Привет, я администратор")
//     }
// }


// class User {
//     constructor() {

//     }
//     sayHi() {
//     console.log("Привет, я обычный пользователь");
//     }
// }

// class Admin extends User {
//     constructor() {
//     super(); 
//     }
//     sayHi() {
//     console.log("Привет, я администратор");
//     }
// }

// class  user {
//     constructor(name, role) {
//         this.name = name
//         this.role = role
//     }
//     sayHi () {
//         console.log ("Привет, я обычный пользователь")
//     }
// }

// class  admin extends user {
//     sayHi () {
//         console.log ("Привет, я администратор")
//     }
// }
// class moderator extends user {
//     sayHi () {
//         console.log ("Привет, я модератор")
//     }
// }

// class guest extends user {
//     sayHi () {
//         console.log ("Привет, я гость")
//     }
// }




// class User {
//     constructor(name, role) {
//     this.name = name;
//     this.role = role;
//     }

//     sayHi() {
//     console.log(`Я ${this.name}, моя роль — обычный пользователь`);
//     }
// }

// class Admin extends User {
//     sayHi() {
//     console.log(`Я ${this.name}, моя роль — admin`);
//     }
// }

// class Moderator extends User {
//     sayHi() {
//     console.log(`Я ${this.name}, моя роль — moderator`);
//     }
// }

// class Guest extends User {
//     sayHi() {
//     console.log(`Я ${this.name}, моя роль — guest`);
//     }
// }

//   // Создаём массив пользователей:
// const users = [
//     new Admin("Андрей", "admin"),
//     new Guest("Света", "guest"),
//     new Moderator("Лена", "moderator"),
//     new User("Илья", "user"),
//     new Admin("Никита", "admin"),
// ];

//   // Выводим только админов и модераторов:
// for (const user of users) {
//     if (user.role === "admin" ||
//         user.role === "moderator") {
//     user.sayHi();
//     }
// }


// class bankAccount {\
//     static balance = 0;
//     static deposit(amount) {
//         bankAccount.balance += amount;
//     }
//     static withdraw(amount) {
//         bankAccount.balance -= amount;
//     }
//     static getBalance (amount) {
//         console.log (`Текущий баланс: ${bankAccount.balance}`)
//     }
// }


// class BankAccount {
//     #balance = 0;

//     deposit(amount) {
//     if (amount > 0) {
//         this.#balance += amount;
//     } else {
//         console.log("Нельзя внести отрицательную сумму");
//     }
//     }

//     withdraw(amount) {
//     if (amount > this.#balance) {
//         console.log("Недостаточно средств");
//     } else {
//         this.#balance -= amount;
//     }
//     }

//     getBalance() {
//     console.log(`Текущий баланс: ${this.#balance}`);
//     return this.#balance;
//     }
// }


// class shape {
//     getArea () {
//         console.log ("Площадь фигуры")
//     }
// }

// class rectangle extends shape {
//     getArea () {
//         console.log ("Площадь прямоугольника", this.width * this.height)
//     }
// }

// class circle extends shape {
//     getArea () {
//         console.log ("Площадь круга", this.radius * this.radius * Math.PI)
//     }
// }



// class Shape {
//     getArea() {
//       return 0; // Базовая реализация
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//     super();
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
  
//     getArea() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
  
//   // ✅ Пример: массив фигур
//   const shapes = [
//     new Rectangle(5, 10),
//     new Circle(3),
//     new Rectangle(7, 4),
//     new Circle(1)
//   ];
  
//   // Выводим площадь каждой фигуры
//   for (const shape of shapes) {
//     console.log(`Площадь фигуры: ${shape.getArea().toFixed(2)}`);
//   }
  

// setTimeout (() => {
//     console.log ("hello")
// }, 2000)


// const doSomething = () => {}

// setTimeout (doSomething, 2000)

// setTimeout (() => {
//     alert ("hello")
// }, 2000)