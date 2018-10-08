const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should()
const Donation = require('../models/donation.js')

chai.use(chaiHttp);

const fakeDonation = {
    orgsEin: 12345678,
    orgsName: 'Super Fake Org',
    amount: 1000000,
    notes: 'Very Fake Notes'
};

const newfakeDonation = {
    orgsEin: 12345679,
    orgsName: 'Super Fake Org',
    amount: 1000001,
    notes: 'Very Very Fake Notes'
};

describe('Donations', ()=>{

    describe('/Get donations', ()=>{

        after(()=>{
            Donation.deleteMany({orgsName: 'Super Fake Org'}).exec((err, donations)=>{
                console.log(donations);
                donations.remove();
            })
        });
        //index
        it('Should get all the donations', (done)=>{
            chai.request(server)
            .get('/donations')
            .end((err, res)=>{
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
        });
        //new
        it('Should get form for new donation', (done)=>{
            chai.request(server)
            .get('/donations/new')
            .end((err,res)=>{
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
        });
        //show
        it('Should get donation by its id', (done)=>{
            let donation = new Donation(fakeDonation);
            donation.save((err, data)=>{
                chai.request(server)
                .get(`/donations/${data._id}`)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
            });
        });
        //edit
        it('Should get the review form for _id of donation', (done)=>{
            let donation = new Donation(fakeDonation);
            donation.save((err, data)=>{
                chai.request(server)
                .get(`/donations/${data._id}/edit`)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
            });
        });
        //create
        it('Should create a donation POST', (done)=>{
            chai.request(server)
            .post('/donations')
            .send(fakeDonation)
            .end((err,res)=>{
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
        });
        //update
        it('Should update a single review PUT', (done)=>{
            let donation = new Donation(fakeDonation);
            donation.save((err, data)=>{
                chai.request(server)
                .put(`/donations/${data._id}`)
                .send(newfakeDonation)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
            });
        });
        //destroy
        it('Should destroy a single review DELETE', (done)=>{
            let donation = new Donation(fakeDonation);
            donation.save((err, data)=>{
                chai.request(server)
                .delete(`/donations/${data._id}`)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.should.be.html;
                    done();
                });
            });
        })
    });

})
