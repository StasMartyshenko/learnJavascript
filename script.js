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

for (i=2; i<=20; i++) {
    for (j=1; j<=20;j++) {
        if (i%j!=0&&i%2!=0&&i%3!=0){
            console.log(i);
        }
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    

