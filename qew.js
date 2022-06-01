global.fetch = require("node-fetch");

let fetchResource = function (source, id) {
    return fetch(`https://api.yamal-web.ru/${source}/${id}`)
}
let makeFetcher = source => id =>  fetchResource(source, id)
let fetchPr = makeFetcher('api')
fetchPr('projects')
