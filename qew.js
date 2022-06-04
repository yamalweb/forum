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
function solution(list) {
    let result = [];
    let prev = 0;
    let index = 0;
    let begin = null;
    let end = null;
    list.forEach(key => {

        if (index !== 0) {
            if ((prev + 1) === key) {
                if (key !== 0) {
                    //result.push('-')
                    begin = key//-2
                }else{
                    end = prev
                }
            } else {
                result.push(key)
            }
        } else {
            result.push(key)
        }

        prev = key //-2
        index++
    })
    return result
}

console.log(
    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
)
//"-6,-3-1,3-5,7-11,14,15,17-20"
