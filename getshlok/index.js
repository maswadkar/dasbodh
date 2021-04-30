var fs = require('fs');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    data = JSON.parse(fs.readFileSync('data/all.json', 'utf8'))
    let limited_data = data.map(({ dashak, samas, shlok }) => ({ dashak, samas, shlok }))
    //console.log(x)
    rand_shlok = Math.floor(Math.random() * data.length)
    console.log('the shlok# ' + rand_shlok)
    context.res = { 'body': limited_data[rand_shlok] }
}