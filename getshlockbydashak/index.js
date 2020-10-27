
var fs = require('fs');
var bychapter = "Please provide Chapter Number"

module.exports = async function (context, req) {

    if(req.query.chapter){
    console.log(req.query.chapter)
    data = JSON.parse(fs.readFileSync('data/dasbodh.json', 'utf8'))

    function contains(value) {
        return value.chapter == req.query.chapter;
    }

    bychapter = data.filter(contains)

}else{
    console.log("Blank")
}
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: bychapter
    };
}