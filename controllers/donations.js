const Donation = require('../models/donation.js')

function donations(app){
    app.get('/donations', (req,res)=>{
        Donation.find().then((donations) =>{
            res.render('donations-index.handlebars', {donations: donations});
        }).catch((err) =>{
            console.log(err);
        })
    })

    app.get('/donations/new', (req,res)=>{
        // console.log(req.query);
        res.render('donations-new.handlebars', {donation: req.query});
    })

    app.get('/donations/:donationId', (req,res)=>{
        // res.send(req.params.donationId);
        Donation.findById(req.params.donationId).then(donation=>{
            res.render('donations-show', {donation : donation});
        }).catch((err)=>{
            console.log(err.message);
        })
    })

    app.post('/donations', (req,res)=>{
        console.log(`body`, req.body);
        Donation.create(req.body).then(donation=>{
            console.log(donation);
            res.redirect(`/donations/${donation._id}`);
        }).catch((err)=>{
            console.log(err.message);
        })
    })

    app.get('/donations/:donationId/edit', (req,res)=>{
        Donation.findById(req.params.donationId).then((donation)=>{
            res.render('donations-edit', {donation: donation});
        }).catch((err)=>{
            console.log(err.message);
        })
    })

    app.put('/donations/:donationId', (req,res)=>{
        console.log(req.body);
        Donation.findOneAndUpdate(req.params.donationId, req.body).then((donation)=>{
            res.redirect(`/donations/${donation._id}`);
        }).catch((err)=>{
            console.log(err.message);
        })
    })

    app.delete('/donations/:donationId', (req,res)=>{
        console.log(req.body);
        Donation.findOneAndRemove(req.params.donationId).then((donation)=>{
            res.redirect(`/donations/`);
        }).catch((err)=>{
            console.log(err.message);
        })
    })

}

module.exports = donations;
