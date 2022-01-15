const request = require('request');

function userInfo(req, res) {
    let options = {
        url:"http://dummy.restapiexample.com/api/v1/employees",
        method:"GET"
    }
    request(options, (err, response, body) => {
        console.log(response),
            res.send(body);
    })
}
module.exports = userInfo ;