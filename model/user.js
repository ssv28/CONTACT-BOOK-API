const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema
const userDataSchema = new Schema({
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

  password: {
    type: String,
    required: true, 
  },

  cpassword: {
    type: String,
    required: true, 
  },

  contact : {
    type: String,
    required: true, 
  },

  profileImage : [{       //multi [{}]   //single {}
    type : String,
    required : true
  }],

  post : [{       //Feilds [{}]    
    type : String,
    required : true
  }]
  

});

const User = mongoose.model('User', userDataSchema);     // Create a model from the schema

module.exports = User;  // Export the model
