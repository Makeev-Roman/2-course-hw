// //задание 1.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let num = min(11, 11);

// console.log(num);

// //Задание 2.

// let a = prompt('Введите число');

// function even(a) {
//     if (a % 2 == 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетно';
//     }
// }
// alert(even(a));

// //Задание 3.1.

// let a = prompt('Введите число');

// function square(a) {
//     return a ** 2;
// }
// console.log(square(a));

// //Задание 3.2.

// let a = prompt('Введите число');

// function square(a) {
//     return a ** 2;
// }
// alert(square(a));

// //Задание 4.

// function ageVerification(age) {
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if (age = 0 || age <= 12) {
//         alert('Привет, друг!');
//     } else {
//         alert('Добро пожаловать!');
//     }
// }

// ageVerification(prompt('Сколько вам лет?'));

// //задание 5.

// function checkingNumbers(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return console.log('Одно или оба значения не является числом');
//     } else {
//         return console.log(a * b);
//     }
// }
// checkingNumbers(6, 3);

// //Задание 6.

// function checkingNumbers(i) {
//     if (isNaN(i)) {
//         return alert('Переданный параметр не является числом');
//     } else {
//         let n = i**3
//         return alert(`${i} в кубе равняется ${n}`);
//     }
// }
// checkingNumbers(prompt('введите число'));

//Задание 7.

const circle1 = { 
    radius: 5, 
    getArea: function() { 
        return Math.PI * this.radius ** 2; },
    getPerimeter: function() { 
        return 2 * Math.PI * this.radius; }
    }

const circle2 = { radius: 7, 
    getArea: function() { 
        return Math.PI * this.radius ** 2; }, 
    getPerimeter: function() { 
        return 2 * Math.PI * this.radius; } 
    }

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea()); 
console.log(circle2.getPerimeter()); 