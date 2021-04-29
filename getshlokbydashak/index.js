
var fs = require('fs');

module.exports = async function (context, req) {

    var bychapter = "Please provide chapter Number AND paragraph number"
    if (req.query.chapter && req.query.paragraph) {
        console.log(req.query.chapter)
        data = JSON.parse(fs.readFileSync('data/all.json', 'utf8'))

        function contains(value) {
            return (value.chapter == req.query.chapter) && (value.paragraph == req.query.paragraph);
        }

        bychapter = data.filter(contains)

    } else {
        console.log("Blank")
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: bychapter
    };
}