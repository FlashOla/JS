// нащо нам JS
<!--    1-->

// JS preview | Вступ. Нащо нам js?
// JS preview | Як підключати скріпти?
// JS preview | Змінні
// JS preview | Базові типи данних
// JS preview | Тип string та базові операції з ним
// JS preview | Числа та операції з ними
// JS preview | Булевий тип та операції з ним
// JS preview | Приведення конвертація типів
// JS preview | Визначення типів та інші типи і їх приведення

//---------------------------- Вступ. Нащо нам js? --------------------------------------------
// let h1 = document.querySelector('h1');         //дати елемент h1
// h1.innerText = 'okten';        //впровадити текст
// //2
// let msg = 'lorem ipsum';   // є змінна
// let p = document.createElement('p');   //створити елемент p
// p.innerText = msg;    //елемент p наповнити якимось контентом
// document.body.append(p);  //приєднати до нашого документа

//3
// let users = [      //11 об'єктів
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let menu = document.querySelector('.menu');
//
// for (const user of users) {      //яка дозволить мені витягнути почергово кожного користувача
//     let li = document.createElement('li');    // створити лішки
//     li.innerText = user.name;   //покладемо інформацію яка знаходиться в юзері name в лішка
//     menu.append(li);
//
// }
//4
//     let menu = document.querySelector('.menu');
//     fetch('https://jsonplaceholder.typicode.com/users')  // взяти інфу зі стороннєго ресурса
//         .then(value => value.json())
//         .then(users => {
//             for (const user of users) {
//                 let li = document.createElement('li');
//                 li.innerText = user.name;
//                 menu.append(li);
//             }
//         });
//5
//     navigator.geolocation.getCurrentPosition(position => console.log(position));   //відтрекати ваше місце перебування
//
//     navigator.mediaDevices.getUserMedia({video: true})   //хочемо отримати інформацію з камери
//         .then(stream => {   //зчитуємо цій потік
//             let videoplayer = document.getElementById('videoplayer');
//             videoplayer.srcObject = stream;
//             videoplayer.play();
//         });
//
console.log('3');

//--------------------- JS preview | Змінні ---------------------------------------

//
//number
//string
//boolean
// 1
// var d;    //спочатку задекларувати
// d='hello okten';  //а потім за якихось умов ії проініціолізувати
// //тоже самое
// var e='hello okten';   //давно ніхто не використовує
// 2
// {   //блок ініціалізації
//     let h = 'hello okten';   // видима в межах  блока ініціалізації
//     var o='hello okten';     //змінна типу var ігнорує блок ініціалізації доступна більш глобально це в майбутньому буде проблема
// }
// console.log(o);
// console.log(h);   //звернення до неї не можливо це майбутня безпека
// 3
// const PI = 3.14; //не починати з цифр, не розривати пробілами, не використовувати спецсимволи, тільки латиницею
// console.log(PI);   //константи тільки великими літерами
// //PI = 123;    отримаємо помилку, заборонено так робити
// // 4
// let a = 'ufhgasfdh';
// console.log(a);
// a = 'okten';
// console.log(a);

// ------------------------------JS preview | Базові типи данних --------------------------------
//
// let a = 'hello okten';
// a = '5';  //це не натуральне число чорними літерами
// console.log(typeof a, a);    //string 5
//
// let b = 100500;//числове значення блакитними літерами
// console.log(typeof b, b);   //number 100500
//
// let c = false;
// console.log(c);





// -------------------------------JS preview | Тип string та базові операції з ним-------------------------

// let a = '"asd"';
// let b = "'asd'"
// console.log(a, b);
//
// let c = `okten`;//шаблонна строка
// console.log(c);


// let greeting = 'hello';
// let intro = 'my name is vasya';
//
// let msg = greeting + ' ' + intro; //конкатенація
// console.log(msg);
// let msg2 = `${greeting} ${intro}`; //інтерполяція  посилання на змінну
// console.log(msg2);




// --------------------------------JS preview | Числа та операції з ними--------------------------------------
//1
// let a = 100500;//integer
// console.log(a);
// let b = 3.1231424;//float double
// console.log(b);
//2
// console.log(10 + 20);//30
// console.log(10 - 20);//-10
// console.log(10 * 20);//200
// console.log(10 / 20);
// console.log(11 % 3);//ділення по модулю   2 остача кратність парність
//
// console.log(0.1 + 0.2);//0,30000000000000004

//3
// let big = 1234615436143714634164361423n;    //потрібно поставити n
// let big = BigInt(1234615436143714634164361423);//інший спосіб
// console.log(big);


// //4
// let n1 = 100;
// let n2 = 200;
// console.log(n1 + n2);

// ------------------------------------JS preview | Булевий тип та операції з ним------------------------------

// let a = true;
// console.log(typeof a);

// > < >= <= == === != !==

// console.log(10 > 5);  //true
// console.log(10 > 20);  //false
// console.log(10 === 10);  //true
// console.log(10 !== 10);   //false

// --------------------------------------JS preview | Приведення конвертація типів-----------------------------
//1
// console.log(typeof (100500 + ''));   //перетворилось на string значення
// console.log(100 + 200 + '');   //300 string 300
// console.log('' + 100 + 200);    //100200 string заряжає


//2
// console.log(+'100500');//+ та числове значення 100500
// console.log(+'100500asd');//NaN

//3
// console.log(parseInt('100500asd'));//відсікає не число 100500
// console.log(parseInt('100500.123'));//100500 заокруглює
// console.log(parseFloat('100500.123'));//с плаваючою крапкою

//4 тільки 0 (нічого) false
// console.log(!!1000);      //true
// console.log(!!-1000);     //true
// console.log(!!0);    //false 0 кастується (приводиться) до false
//
// console.log(!!'asd'); //true
// console.log(!!''); // false нічого
//
// console.log(!!'0'); //true 0 символ щось

// 5
// console.log(true + '');//приведення до string напис true
// console.log(+false);  //0
// console.log(+true);  //1
//
// console.log(100 - true);//99




// -------------------------------------JS preview | Визначення типів та інші типи і їх приведення-------------
//1
// let n = 100;
// let s = 'asd';
// let b = true;
//
// console.log(typeof n);//number (string напис)
// console.log(typeof s);//string (string напис)
// console.log(typeof b);//boolean (string напис)

//2
// let arr = [11, 22, 33, true];  //масив

// let user = {                //обєкт
//     name: 'vasya', n кількість значень
//     age: 31
// }
//
// function asd() {   //функція
//
// }


// console.log(typeof arr);//object
// console.log(typeof user);//object
// console.log(typeof asd);//function

//3
// let x;       // undefined змінна задекларована але не визначена
// console.log(x);

// let x = undefined;       //
// console.log(x);

//4
// console.log(typeof undefined);// undefined
// console.log(typeof null);//пустота object
// console.log(typeof NaN); //число number в ваших діях щось пішло не так
// console.log([]/'asd');//Nan не є нормальною

//5
// console.log(!!100); //скастувати до булевого true
// console.log(!!-100);//true
// console.log(!!'asd'); //true


// //6 нічого  - false
// console.log(!!0);//false
// console.log(!!null);//false
// console.log(!!undefined);//false
// console.log(!!'');//false
//
// //7
// console.log(!!'0');//true
// console.log(!!' ');// буде пробіл це символ, наявність чогось це true

