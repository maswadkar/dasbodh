module.exports = async function (context, req) {
    responseMessage = 0
    if (req.query.number) {
        number = req.query.number
        function fact(n) {
            if (n == 0) {
                return 1
            }
            else {
                return n * fact(n - 1)
            }
        }
    }

    
    responseMessage = fact(number)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}