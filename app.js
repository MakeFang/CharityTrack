const express = require('express');
const request = require('request');
const CharityNavigator = require('../CharityNavigator/index.js');
const appid='2256a6b1';
const appkey='44f52a1618a85953418e54a7270dcdbf';
const charitynavigator = new CharityNavigator(appid, appkey);
// charitynavigator.Organizations({pageSize: 20,rated:true});
var exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// url = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=' + appid + '&app_key=' + appkey;
// url1='https://api.data.charitynavigator.org/v2/Organizations?app_id=2256a6b1&app_key=44f52a1618a85953418e54a7270dcdbf&pageSize=10&rated=true&minRating=4'

app.get('/', (req, res) => {
    // request({url: url1,
    //     json:true}, (error, response, body) => {
    //         if (!error && response.statusCode === 200) {
    //             var charities = body;
    //             res.render('home', {charities: charities});
    //         }
    //     });
    charitynavigator.Organizations({pageSize: 20,rated:true, minRating: 4}).then((body)=>{
        res.render('home', {charities: body});
    }).catch((error) => {
        console.log(error);
    })
    // console.log(charities);
    // res.render('home', {charities: charities});
})

app.get('/',(req,res) => {
    req.send('Hello!');
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
})
