//alert('скрипт');

//var admin;
//var name;
//
//name = 'василий';
//admin = name;
//alert(admin);

//var myPlanet = 'Земля';
//var client = 'Петя';

//var a = 1, b = 1, c = 1;
//
//c = ++a; console.log(a); //2
//d = b++; console.log(d); //1
//
//c = (2+ ++a); console.log(c);//5
//d = (2+ b++); console.log(d);//4
//
//console.log(a); //3
//console.log(b); //3

//var a = 2;
//
//var x = 1 + (a *= 2); //5

//var youName = prompt('введите имя', '');
//alert(youName);

//var js = prompt('название джеса?','');
//
//if (js == 'ES') {
//    alert('true');
//} else {
//    alert('false');
//}

//var number = prompt('вести значение', '');
//
//if (number > 0) {
//    alert('1')
//} else if (number < 0) {
//    alert(-1)
//} else {
//    alert(0)
//}

//var login = prompt('login?', '');
//
//if (login == 'Админ') {
//    var pas = prompt('password?', '');
//    if (pas == 'Чёрный Властелин') {
//        alert('«Добро пожаловать!»');
//    } else if (pas == null) {
//        alert('«Вход отменён»');
//    } else {
//        alert('«Пароль неверен»');
//    }
//} else if (login == null) {
//    alert('«Вход отменён»');
//} else {
//    alert('Я вас не знаю');
//}

// var result = (a + b < 4) ? "Мало" : "Много";

//var message = (login == 'Вася') ? 'Привет' : (login == 'Директор') ? 'Здраствуйте' : (login == '') ? 'нет логина' : '';


// if (age>=14&&age<=90)

// if (!(age>=14&&age<=90))
// if (age<=14||age>=90)

// var a = true;
// var b = String(a);
// console.log(typeof(b));

// var str = '9';
// var num = Number(str);
// console.log(typeof(num));

// var a = undefined;
// var b = +a;
// console.log(b);

// "" + 1 + 0//10
// "" - 1 + 0//-1
// true + false//1
// 6 / "3"//2
// "2" * "3"//6
// 4 + 5 + "px"//'9px'
// "$" + 4 + 5//$45
// "4" - 2//2
// "4px" - 2//NaN
// 7 / 0//Infinity
// "  -9\n" + 5//-95"
// "  -9\n" - 5//-14
// 5 && 2//2
// 2 && 5//5
// 5 || 0//5
// 0 || 5//5
// null + 1//1
// undefined + 1//NaN
// null == "\n0\n"//false
// +null == +"\n0\n"//true

// var num = 2;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// var num = 1;
// do{
//     console.log(num);
//     num++
// } while (num<1);

// for (i=0; i<=10; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//
//     if (!(i % 2 == 0)) {
//         console.log(i);
//     }
// }
    
// for (i=2; i<=10; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// var i = 0;
// while (i<3) {
//     console.log('номер' + i + '!');
//     i++
// }
    
// var num = prompt('ввести число большее 100', '');
//
// while (Number(num)<100&&num!=null) {
//     var num = prompt('ввести число большее 100', '');
// }

// for (i=2; i<=20; i++) {
//     for (j=1; j<=20;j++) {
//         if (i%j!=0&&i%2!=0&&i%3!=0){
//             console.log(i);
//         }
//     }
// }

// var a = 100;
// switch (a) {
//     case 7:
//         console.log('yes1');
//         break;
//     case 99:
//         console.log('fwerwer');
//         break;
//     case 5:
//         console.log('csasas5');
//         break;
//     default:
//         console.log('===');
// }

// var brow = prompt('wtat browser you have', '');
//
// if (brow=='IE') {
//     console.log('О, да у вас IE!');
// }  else if (brow=='Chrome' || brow=='Fir'|| brow=='Saf'|| brow=='Oper') {
//     console.log('Да, и эти браузеры мы поддерживаем');
// } else {
//     console.log('mabe you browser good')
// }

// var a = +prompt ('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert ('2,3');
//         break;
// }

// function checkAge(age) {
//     if (age >18) {
//         return true;
//     }
//     return confirm ('Родители разрешили?');
// }
// console.log(checkAge(19));

// function checkAge(age) {
//    return age >= 18 ? true : confirm('Родители разрешили?');
// }
// checkAge(19);

// function checkAge (age) {
//     return age>18||confirm('Родители разрешили?');
// }
// checkAge(12);
    
// function min (a, b) {
//     if (a<b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));
//
    
// function pow (x, n) {
//     var sum = x;
//     for (i=1; i<n; i++){
//         var sum = sum*x;
//     }
//     result sum;
// }
// // pow (3, 3);
// pow (+prompt('one number', ''), +prompt('two number', ''));

// function pow(x, n) {
//     var result = x;
//
//     for (var i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// var x = prompt("x?", '');
// var n = prompt("n?", '');
//
// if (n <= 1) {
//     alert('Степень ' + n +
//         'не поддерживается, введите целую степень, большую 1'
//     );
// } else {
//     alert( pow(x, n) );
// }

// 'use strict'
// var age = +prompt("Сколько вам лет?", 20);
//
// if (age >= 18) {
//     function sayHi() {
//         alert( 'Прошу вас!' );
//     }
// } else {
//     function sayHi() {
//         alert( 'До 18 нельзя' );
//     }
// }
//
// sayHi();

// var age = prompt('Сколько вам лет?');
//
// var sayHi;
//
// if (age >= 18) {
//     sayHi = function() {
//         alert( 'Прошу Вас!' );
//     }
// } else {
//     sayHi = function() {
//         alert( 'До 18 нельзя' );
//     }
// }
//
// sayHi();

//----------------------------------------- Анонимные функции
// function anonim (quest, yes, no) {
//     if (confirm (quest)) {
//         yes();
//     } else {
//         no();
//     }
// }
//
// anonim ('are you agree?', function() {alert('you agree');}, function () {alert('you not agree');})

// ------------------------------------------ new Function
// var a = new Function ('a, b', 'return a+b');
//
// var res = a(1,3);
// alert (res);

//function pow(x, n) {
//    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
//        return x * pow(x, n - 1);
//    } else {
//        return x;
//    }
//}
//
//alert( pow(2, 3) );

//function showPrimes(n) {
//
//  for (var i = 2; i < n; i++) {
//    if (!isPrime(i)) continue;
//
//    console.log(i);  // простое
//  }
//}
//
//function isPrime(n) {
//  for (var i = 2; i < n; i++) {
//    if ( n % i == 0) return false;
//  }
//  return true;
//
//
//showPrimes(20);

// var stringNum = 'helloword';
// console.log(stringNum.length);
// console.log(stringNum.toUpperCase());
//
// var num = 1.5548;
// console.log(num.toFixed(6));

// function num (a) {
//     if (!isNaN(parseFloat(a)) && isFinite(a)) {
//         console.log('ok');
//     } else {
//         console.log('not a number')
//     }
// }
//
// num(+prompt('number', ''));

// var a = +prompt('ввести число', '');
// var b = +prompt('ввести второе число', '');
// console.log(a+b);

// console.log(Math.round((0.5+0.2)*100)/100);

// -----------------------------------Как получить дробную часть числа?
// function getDecimal(num) {
//     return ((Math.round((num)*100)/100)-(num.toFixed(0)));
// }
// alert( getDecimal(12.345) ); // 0.345
// alert( getDecimal(1.2) ); // 0.2
// alert( getDecimal(-1.2) ); // 0.2

// ----------------------------------Сделать первый символ заглавным
// function ucFirst(str) {
//     if (str==0) {
//         return str;
//     }
//     return str[0].toUpperCase()+str.slice(1);
// }
//
// console.log(ucFirst("вася")); // "Вася";
// console.log(ucFirst("")); // "";

//-------------------------------------------------Проверьте спам
// function checkSpam(str) {
//     var lower = str.toLowerCase();
//     var check = lower.indexOf('xxx');
//     var check2 = lower.indexOf('viagra');
//         if (check >= 0) {
//             return true;
//         } else if (check2 >= 0) {
//             return true;
//     }
//     return false;
// }
//
// console.log(checkSpam('buy ViAgRA now')); // true
// console.log(checkSpam('free xxxxx')); // true
// console.log(checkSpam("innocent rabbit")); // false

//------------------------------------------------- Усечение строки
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, (maxlength-3)) + '...';
//     }
//     return str;
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); //"Вот, что мне хоте..."
// console.log(truncate("Всем привет!", 20)); // "Всем привет!"

// -------------------------------------------------Выделить число
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
//
// console.log(extractCurrencyValue('$120'));

// -------------------------------------------------Первый объект
// var user = {};
// user.name = 'Vasya';
// user.surname = 'Petrov';
// user.name = 'Sergei';
// delete user.name;
// console.log(user.surname);

// --------------------------------------Определите, пуст ли объект
// function isEmpty(obj) {
//     for (dec in obj) {
//         return false;
//     }
//     return true;
// }
//
// var schedule = {};
//
// alert(isEmpty(schedule));
//
// schedule["8:30"] = "подъём";
// alert(isEmpty(schedule));

//--------------------------------------------------Сумма свойств
// "use strict";
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// var maxSum = 0;
// for (var sum in salaries) {
//     maxSum += salaries[sum];
// }
//
// console.log(maxSum);

// ---------------------------------Свойство с наибольшим значением
// "use strict"
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// }
// var name = '';
// var sum = '';
// for (var maxSum in salaries) {
//     if(salaries[maxSum]>sum) {
//         name = maxSum;
//     }
//     sum = salaries[maxSum];
// }
// console.log(name);

// ----------------------------------Умножьте численные свойства на 2
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric (obj) {
//     for (number in obj) {
//         if (!isNaN(parseFloat(obj[number])) && isFinite(obj[number])) {
//             obj[number] = obj[number]*2;
//         }
//     }
// }
//
// multiplyNumeric(menu);
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
//
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }
//
// function multiplyNumeric(obj) {
//     for (var key in obj) {
//         if (isNumeric(obj[key])) {
//             obj[key] *= 2;
//         }
//     }
// }
//
// multiplyNumeric(menu);
//
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

// ------------------------------------Получить последний элемент массива
// var array = ['car', 'bike', 'people', 'world'];
// console.log(array[array.length - 1]);

// --------------------------------------Добавить новый элемент в массив
// var array = ['car', 'bike', 'people', 'world'];
// array[array.length]  ='comp';
// array.push('computer');
// console.log(array);

// ----------------------------------------------------Создание массива
// var styles = ['Джаз', 'Блюз'];
// styles.push('рок-н-ролл');
// console.log(styles);
// styles[styles.length - 2] = 'classic';
// console.log(styles.shift());
// styles.unshift('rep', 'reggi');
// console.log(styles);

// -------------------------------Получить случайное значение из массива
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// function arrayRandom(random) {
//     var rand = Math.floor(Math.random() * ((random.length - 1) + 1));
//     for (var i = 0; i < random.length; i++) {
//         if (i == rand) {
//             console.log(random[i]);
//         }
//     }
// }
// console.log(arrayRandom(arr));
//
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = Math.floor(Math.random() * arr.length);
// alert( arr[rand] );

// -------------------------Создайте калькулятор для введённых значений
// var number = [];
//
// while (true) {
//     var userNum = prompt('number', '');
//     if (userNum === '' || userNum === null || isNaN(userNum)) break;
//     number.push(+userNum);
// }
//
// var sum = 0;
// for (i=0; i<number.length; i++) {
//     sum += number[i];
// }
//
// console.log(sum);

// -----------------------------------------------------Поиск в массиве
// var arr = ["test", 2, 1.5, false];
//
// function find(array, value) {
//      console.log(array.indexOf(value));
// }
//
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, 0); // -1

// ----------------------------------------------------Фильтр диапазона
// var arr = [5, 4, 3, 8, 0];
//
// function filterRange(array, a, b) {
//     var arrFil = [];
//     for (i=0; i<array.length; i++) {
//         if (array[i] >= a && array[i] <= b) {
//             arrFil.push(array[i]);
//         }
//     }
//     return arrFil;
// }
// var filtered = filterRange(arr, 3, 5);
//
// console.log(filtered);
// console.log(arr);

// ---------------------------------------------------Решето Эратосфена???

// ---------------------------------------------Подмассив наибольшей суммы???

// -------------------Массивы: методы----------------------------------------
// ------------------------------------------------Добавить класс в строку???


// --------------------Перевести текст вида border-left-width в borderLeftWidth
// function camelize(str) {
//     var res = '';
//     upper = '';
//     index0 = '';
//     inrexNext = '';
//     arr = str.split('-');
//     for (i=1; i<arr.length; i++) {
//         upper = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//         inrexNext = inrexNext+upper;
//     }
//     index0 = arr[0];
//     res = index0 + inrexNext;
//     return res;
// }
//
//
// console.log(camelize("background-color")); //'backgroundColor';
// console.log(camelize("list-style-image")); // 'listStyleImage';
// console.log(camelize("-webkit-transition")); // 'WebkitTransition';


// function camelize(str) {
//     arr = str.split('-');
//     for (i=1; i<arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
//
//     }
//     return arr.join('');
// }
//
//
// console.log(camelize("background-color")); //'backgroundColor';
// console.log(camelize("list-style-image")); // 'listStyleImage';
// console.log(camelize("-webkit-transition")); // 'WebkitTransition';

// -----------------------------------------------------------Функция removeClass
// var obj = {
//     className: 'my open menu menu'
// };
//
// function removeClass (obj, cls) {
//     var arr = obj.className.split(' ');
//     for (i=0; i<=arr.length; i++) {
//         if (arr[i] == cls) {
//             arr.splice([i], 1);
//             i--;
//         }
//     }
//     obj.className = arr.join(' ');
//     return obj.className;
// }
//
// console.log(removeClass(obj, 'open')); // obj.className='menu'
// console.log(removeClass(obj, 'blabla')); // без изменений (нет такого класса)
// console.log(removeClass(obj, 'menu'));
// -------------------------------------------------Фильтрация массива "на месте"
// var arr = [5, 3, 8, 1];
//
// function filterRangeInPlace(arr, a, b) {
//     for (var i = 0; i<arr.length; i++) {
//         if (arr[i]<a || arr[i]>b) {
//             arr.splice([i], 1);
//         }
//     }
// }
//
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// ------------------------------------------------Сортировать в обратном порядке
// var arr = [5, 2, 1, -10, 8];

// arr.sort().reverse();// как я решил
//
// arr.sort(sortArray);
// function sortArray(a, b) {
//     return b-a;
// }
//
// console.log(arr);

// --------------------------------------------Скопировать и отсортировать массив
// var arr = ['HTML', 'JavaScript', 'CSS'];
//
// arrSorted массив метод sort= arr.slice(0).sort();
//
// console.log(arrSorted);
// console.log(arr);

// -------------------------------------------------Случайный порядок в массиве???

// -------------------------------------------------------------Сортировка объектов

// ------------------------------------------------------Вывести односвязный список

// --------------------------------------------------------Отфильтровать анаграммы

// -------------------------------------------Оставить уникальные элементы массива

// ------------------------------------------------------Перепишите цикл через map

// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = arr.map(function (name) {
//     return name.length;
// });
//
// console.log( arrLength ); // 4,5,2,5

// --------------------------------------------------------Массив частичных сумм

// var arr = [ 1, 2, 3, 4, 5 ];
// var array =[];
//
// var getSum = arr.reduce(function(sum, current) {
//     array.push(sum);
//     return sum + current;
// });
//
// array.push(getSum);
//
// console.log(array);

// --------------------------------------------------Проверка на аргумент-undefined
// function f(x) {
//     alert( arguments.length ? 1 : 0 );
// }
//
// f(undefined);
// f();

// ----------------------------------------------------------------Сумма аргументов
// function sum() {
//     var result = 0;
//
//     for (var i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//
//     return result;
// }
//
// alert( sum() ); // 0
// alert( sum(1) ); // 1
// alert( sum(1, 2) ); // 3
// alert( sum(1, 2, 3) ); // 6
// alert( sum(1, 2, 3, 4) ); // 10

// -----------------------------------------------------------------Создайте дату

// var date = new Date(2012, 1, 20, 3, 12);
// alert(date);

// -----------------------------------------------------------------Имя дня недели
// var date = new Date(2012,0,3);  // 3 января 2012
//
// function getWeekDay (d) {
//
//     var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//     var dateNumber = d.getDay();
//     return arr[dateNumber - 1];
// }
//
// alert( getWeekDay(date) );      // Должно вывести 'вт'

// ---------------------------------------------День недели в европейской нумерации

// function getLocalDay(date) {
//     var day = date.getDay();
//     if (day == 0) { // день 0 становится 7
//         day = 7;
//     }
//     return day;
// }
// alert( getLocalDay(new Date(2012, 0, 3)) ); // 2

// -------------------------------------------День указанное количество дней назад
// var date = new Date(2015, 0, 2);
//
// function getDateAgo(date, days) {
//     var copy = new Date(date);
//     copy.setDate(copy.getDate() - days);
//     return copy.getDate();
// }
//
//
// alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

// ----------------------------------------------------------Последний день месяца?
// function getLastDayOfMonth(year, month) {
//     var d = new Date(year, month +1, 0);
//     return d.getDate();
// }
//
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth(2013, 1));

// ----------------------------------------------Сколько секунд уже прошло сегодня?
// function getSecondsToday() {
//     var now = new Date();
//
//     // создать объект из текущей даты, без часов-минут-секунд
//     var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
//     var diff = now - today; // разница в миллисекундах
//     return Math.floor(diff / 1000); // перевести в секунды
// }
//
// alert( getSecondsToday() );

// -----------------------------------------------------Сколько секунд - до завтра?
// function getSecondsTomorrow() {
//     var dateNow = new Date();
//     var dateTomorrov = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);
//
//     diff = dateTomorrov - dateNow;
//     return Math.round(diff / 1000);
// }
//
//
//
// console.log(getSecondsTomorrow());

// --------------------------------------------------Вывести дату в формате дд.мм.гг

// ------------------------------------------------Относительное форматирование даты
// var arr = ["Почему", "надо", "учить", "JavaScript"];
//
//
// var arr2 = arr.slice(-2); // копировать от 2-го элемента с конца и дальше
//
//
// console.log(arr2);

// ------------------------------------------------------------Сумма через замыкание
// function sum (a) {
//   return function (aa) {
//       console.log(a+aa);
//   }
// }
// sum(1)(2);
// sum(5)(-1);

// --------------------------------------------------------Функция - строковый буфер

// function makeBuffer () {
//   var counret ='';
//   return function (name) {
//       if (arguments.length == 0) {
//         return counret;
//       }
//       counret += name;
//   }
//
// }
//
// var buffer = makeBuffer();
//
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// alert( buffer() );

// -------------------------------------------------------Строковый буфер с очисткой

// function makeBuffer() {
//   var text = '';
//
//   function buffer (piece) {
//     if (arguments.length == 0) { // вызов без аргументов
//       return text;
//     }
//     text += piece;
//   };
//
//   buffer.clear = function() {
//     text = "";
//   }
//
//   return buffer;
// };
//
// var buffer = makeBuffer();
//
// buffer("Тест");
// buffer(" тебя не съест ");
// alert( buffer() ); // Тест тебя не съест
//
// buffer.clear();
//
// alert( buffer() ); // ""

// ---------------------------------------------------------------------Сортировка

//-------------------------------------------------------------Создайте калькулятор

// var calculator = {
//     read: function () {
//         this.a = +prompt('a', '');
//         this.b = +prompt('b', '');
//     },
//     sum: function() {
//         return this.a + this.b;
//     },
//     mul: function() {
//         return this.a * this.b;
//     }
//
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// -------------------------------------------Сумма произвольного количества скобок
// function sum(a) {
//     var current = a;
//
//     function f(b) {
//         current += b;
//         return f;
//     }
//
//     f.toString = function() {
//         return current;
//     };
//
//     return f;
// }
//
// console.log(sum(1)(2));
// console.log(sum(1)(2)(3));
// console.log(sum(5)(-1)(2));
// console.log(sum(6)(-1)(-2)(-3));
// console.log(sum(0)(1)(2)(3)(4)(5));

// ---------------------------------------Создать Calculator при помощи конструктора
// function Calculator() {
//
//     this.read = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//
//     this.sum = function() {
//         return this.a + this.b;
//     };
//
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }
//
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

// -------------------------------------Создать Accumulator при помощи конструктора
// function Accumulator(startingValue) {
//     this.value = startingValue;
//
//     this.read = function() {
//         this.value += +prompt('Сколько добавлять будем?', 0);
//     };
//
// }
//
// var accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert( accumulator.value );

// ------------------------------------------------------------Создайте калькулятор
// function Calculator () {
//
//     var methods = {
//         '+': function (a, b) {
//             return a + b;
//         },
//         '-': function (a, b) {
//             return a - b;
//         }
//
//     };
//
//     this.calculate = function (param) {
//         var arr = param.split(' ');
//         a = +arr[0];
//         b = arr[1];
//         c = +arr[2];
//         if(isNaN(a) || isNaN(c)) {
//             return NaN;
//         }
//         return methods[b](a, c);
//     }
// }
//
//
//
// var calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// -------------------------------------------------------Добавить get/set-свойства
// function User(fullName) {
//     this.fullName = fullName;
//
//     Object.defineProperties(this, {
//
//         firstName: {
//
//             get: function() {
//                 return this.fullName.split(' ')[0];
//             },
//
//             set: function(newFirstName) {
//                 this.fullName = newFirstName + ' ' + this.lastName;
//             }
//
//         },
//
//         lastName: {
//
//             get: function() {
//                 return this.fullName.split(' ')[1];
//             },
//
//             set: function(newLastName) {
//                 this.fullName = this.firstName + ' ' + newLastName;
//             }
//
//         }
//
//     });
// }
//
// var vasya = new User('Василий Попкин');
//
// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин
//
// // запись в lastName
// vasya.lastName = 'Сидоров';
//
// alert( vasya.fullName ); // Василий Сидоров

// ----------------------------------------------------------------Счетчик объектов




