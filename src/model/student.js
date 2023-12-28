const mongoose = require('mongoose');

const regSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    address :{
        type : String,
        required : true
    },
    street :{
        type : String,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    district :{
        type : String,
        required : true
    },
    state :{
        type : String,
        required : true
    },
    postal :{
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        require : true
    }

});
const regCollection = new mongoose.model('regcollection', regSchema);

module.exports = regCollection;