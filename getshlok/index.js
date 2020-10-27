var fs = require('fs');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    data = JSON.parse(fs.readFileSync('data/dasbodh.json', 'utf8'))
    rand_shlok = Math.floor(Math.random() * data.length)
    console.log(data.length)
    context.res = { 'body': data[rand_shlok]['shlok'] }
}