const https = require('https');
const chai = require("chai");

describe("SMOKE TEST SUITE for - DASBODH", function(){

    it("should run the test suite", function(){
        https.get("https://dasbodh.azurewebsites.net/api/getshlok?code=1111",(res)=>{
        chai.assert.equal(res.statusCode,200,"Status should be 200")
        })
    })
})