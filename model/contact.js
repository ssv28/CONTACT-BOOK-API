const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema
const userDataSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    contact1: {
        type: String,
        required: true,
        unique: true
    },

    contact2: {
        type: String,
        required: true,
        unique: true
    },

    homeaddress: {
        type: String,
        required: true,
    },

    officeaddress: {
        type: String,
        required: true,
        unique: true
    },


});

const Contact = mongoose.model('Contact', userDataSchema);     // Create a model from the schema

module.exports = Contact;  // Export the model
