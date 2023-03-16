const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Candidate', candidateSchema);