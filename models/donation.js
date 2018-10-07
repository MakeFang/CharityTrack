const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const donation = new Schema({
    donationId: { type: Schema.Types.ObjectId, ref: 'Donation' },
    orgsEin: {type: String, required: true},
    orgsName: {type: String, required: true},
    amount: {type: Number, min: 0, required: true},
    notes: String
}, {
    timestamps: true
});

const Donation = mongoose.model('Donation', donation);
module.exports = Donation;
