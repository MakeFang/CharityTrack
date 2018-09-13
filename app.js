const express = require('express');
const request = require('request');
var exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

appid='2256a6b1';
appkey='44f52a1618a85953418e54a7270dcdbf';
url = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=' + appid + '&app_key=' + appkey;
url1='https://api.data.charitynavigator.org/v2/Organizations?app_id=2256a6b1&app_key=44f52a1618a85953418e54a7270dcdbf&pageSize=10&rated=true&minRating=4'

app.get('/', (req, res) => {
    request({url: url1,
        json:true}, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                var charities = body;
                res.render('home', {charities: charities});
            }
        });
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
})
