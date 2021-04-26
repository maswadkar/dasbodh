module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    const https = require('https');

    if (myTimer.isPastDue) {
        context.log('JavaScript is running late!');
    }

    url = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?format=json&api-key=579b464db66ec23bdd0000015d0d42cb9328410e6bd0a1af77fa3f53&limit=10000"

    https.get(url, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('data', (d) => {
            //process.stdout.write(d);
            context.log('JavaScript timer trigger function ran!', timeStamp);
        });
    }).on('error', (e) => {
        console.error(e);
    })


};