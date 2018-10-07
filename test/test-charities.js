const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should()
const Donation = require('../models/donation.js')

chai.use(chaiHttp);

let testEin = '010202467';

describe('Charities', ()=>{
    it('Should get a single charity by ein GET', (done)=>{
        chai.request(server)
        .get(`/charities/${testEin}`)
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.html;
            done();
        })
    })
})
