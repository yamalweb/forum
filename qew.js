// global.fetch = require("node-fetch");
//
// let fetchResource = function (source, id) {
//     return fetch(`https://api.yamal-web.ru/${source}/${id}`)
// }
// let makeFetcher = source => id =>  fetchResource(source, id)
// let fetchPr = makeFetcher('api')
// fetchPr('projects')
// const ew = {
//     a:'a',
//     b:'b'}
// function sum(x, y, z) {
//     return x + y + z;
// }
//
// const ew2 = [1, 2, 3]
// function solution(list) {
//     let result = [];
//     let prev = 0;
//     let index = 0;
//     let begin = null;
//     let end = null;
//     list.forEach(key => {
//
//         if (index !== 0) {
//             if ((prev + 1) === key) {
//                 if (key !== 0) {
//                     //result.push('-')
//                     begin = key//-2
//                 }else{
//                     end = prev
//                 }
//             } else {
//                 result.push(key)
//             }
//         } else {
//             result.push(key)
//         }
//
//         prev = key //-2
//         index++
//     })
//     return result
// }
//
// console.log(
//     solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
// )
//"-6,-3-1,3-5,7-11,14,15,17-20"
// создадим новый промис
// const promise = new Promise((resolve, reject) => {
//     // оценку, которые мы получим определим случайным образом спустя некоторое время (например, 5 секунд)
//     setTimeout(() => {
//         // сгенерируем оценку от 2 до 5
//         const mark = Math.floor(Math.random() * 4) + 2;
//         // если оценка больше 3, то...
//         if (mark > 3) {
//             // завершим промис успешно: для этого вызовем функцию resolve() и передадим ей в скобках полученную оценку
//             // (это нужно для того, чтобы мы затем её могли получить в методе then())
//             resolve(mark);
//         }
//         // завершим промис с ошибкой
//         reject(mark);
//     }, 1000);w
// });

// выполнение действий после завершения промиса выполняется с помощью методов: then (в случае успеха) и catch (при ошибке)
// promise
//     .then(result => console.log(`Ура! Я сдал экзамен на ${result}! Папа, как и обещал дал мне 100$.`))
//     .catch(result => console.log(`Увы, я получил оценку ${result}! Папа мне не дал 100$`));
// сдал ли экзамен
global.fetch = require('node-fetch')
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res=>res.json())
//     .then(res=>console.log(res))
//     .catch(function(error) {
//     console.log(error);
// });

// const fu = async ()=>{
//     const data = await fetch('https://dog.ceo/api/breeds/image/random')
//     const jsonData = await data.json()
//     console.log(jsonData)
// }
// fu()
const firstP = () => new Promise(resolve => resolve('i resolved'))
const secondP = async () => 'i resolved'

firstP().then(res=>console.log(res))
secondP().then(res=>console.log(res))
