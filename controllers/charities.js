const CharityNavigator = require('charitynavigator-promise');
const appid='2256a6b1';
const appkey='44f52a1618a85953418e54a7270dcdbf';
const charityNavigator = new CharityNavigator(appid, appkey);
const Donation = require('../models/donation.js');

function charities(app){

    app.get('/', (req, res) => {

        // charityNavigator.orgsEin('010202467').then((body) =>{
        //     console.log(body);
        // }).catch((error)=>{
        //     console.log(error);
        // })
        searchTerm = req.query['search-term'] || '';
        charityNavigator.orgs({ minRating: 4, rated: true, pageSize: 10, search: searchTerm}).then((body)=>{
            res.render('home', {charities: body});
        }).catch((error) => {
            console.log(error);
        })

    })

    app.get('/charities/:id', (req,res)=>{
        charityNavigator.orgsEin(req.params.id).then((org) => {
            // res.send(body);
            Donation.find({orgsEin: req.params.id}).then((donations)=>{
                // res.send(donations);
                res.render('charities-show', {org: org, donations: donations});
            })
        })
    })

    app.listen(3000, () => {
        console.log('App listening on port 3000!');
    })

}

module.exports = charities;
