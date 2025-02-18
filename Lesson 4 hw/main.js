// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b){
//    const result = a*b;
//     console.log(result);
//    return result;
// }
// square(3,2);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function roundSquare(radius){
//     const result = Math.PI*radius*radius;
//     console.log(result);
//     return result;
// }
// roundSquare(3);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderSquare(radius, height) {
//     return 2*Math.PI*radius*height;
// }
// console.log(cylinderSquare(5, 4));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// function qux(array){
//     for(const item of array){
//         console.log(item);
//     }
// }
// const array = [1,2,3,4,5,6];
// qux(array);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// function writer(){
//     document.write(`<p>yfouygchkh</p>`);
// }
// writer();

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function create(text) {
//         document.write(`<ul>
// //                             <li>${text}</li>
// //                              <li>${text}</li>
// //                             <li>${text}</li>
// //
// //                         </ul>`);
// }
// create('zhjgfilerfh');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function create (counter) {
//     for (let i = 0; i < counter; i++) {
//
//         document.write(`<ul>
//                          <li>nmhkuyfykt</li>
//                     </ul>`);
//     }
// }
// create (99);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

// function create(arr) {
//    document.write(`<ul>`);
//    for (let item of arr) {
//       document.write(`<li>${item}</li>`)
//    }
//    document.write(`</ul>`);
// }
// create([1,'xdkdkl', false]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.
// function create(users){
//    for (const user of users){
//       document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//    }
// }
// create([
//                    {id: 1, name: 'vasya', age: 10},
//                    {id: 2, name: 'olha', age: 13},
//                    {id: 3, name: 'kolya', age: 11}
//                 ])
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// ------1-------
// function ArrayMin(numbers){
//    let min=numbers[0];
//    for (const number of numbers){
//       if(number<min){
//          min=number;
//       }
//    }
//    return min;
// }
// console.log(ArrayMin([0,10,100,1000, -50]));
// -------2-------
// function ArrayMin(numbers){
//    let min=numbers[0];
//    for (let i=1; i<numbers.length; i++){
//       let number=numbers[i];
//       if(number<min){
//          min=number;
//       }
//    }
//    return min;
// }
// console.log(ArrayMin([0,10,100,1000, -50]));


// #EKRNVPM
// // - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr){
// let basket=0;
//    for (let item of arr) {
//       basket=basket+item;
//    }
// return basket;
// }
// console.log(sum([1,2,10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, i1, i2){
//   if(i1<arr.length && i2<arr.length){
//      let temp = arr[i1];
//      arr[i1] = arr[i2];
//      arr[i2] = temp;
//      return arr;
//
//   }
// }
// console.log(swap([11,22,33,44], 2, 3))


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


//Последнее задание не понимаю.
