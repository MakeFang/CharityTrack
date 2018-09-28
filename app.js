const express = require('express');
const request = require('request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const CharityNavigator = require('charitynavigator-promise');
const appid='2256a6b1';
const appkey='44f52a1618a85953418e54a7270dcdbf';
const charityNavigator = new CharityNavigator(appid, appkey);
var exphbs = require('express-handlebars');

const donations = require('./controllers/donations.js')

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/charity-navigator', { useMongoClient: true });
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {

    // charityNavigator.orgsEin('010202467').then((body) =>{
    //     console.log(body);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    charityNavigator.orgs({ minRating: 4, rated: true, pageSize: 10}).then((body)=>{
        res.render('home', {charities: body});
    }).catch((error) => {
        console.log(error);
    })

})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
})
donations(app);
