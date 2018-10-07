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
const charities = require('./controllers/charities.js')

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/charity-navigator', { useMongoClient: true });
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

donations(app);
charities(app);

module.exports = app;
