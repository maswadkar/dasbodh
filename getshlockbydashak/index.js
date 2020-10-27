
var fs = require('fs');

module.exports = async function (context, req) {

    console.log(req.query.chapter)
    data = JSON.parse(fs.readFileSync('data/dasbodh.json', 'utf8'))

    function contains(value) {
        return value.chapter == req.query.chapter;
    }

    bychapter = data.filter(contains)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: bychapter
    };
}