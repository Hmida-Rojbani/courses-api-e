const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name : {type : String, required :true},
    email : String,
    address : String
});

const Author = mongoose.model('Author',authorSchema);

module.exports = Author

// Performance vs coherance
// coherance: normalise
// author {}
// course { author_id : id}

// Performance : Embedded 
// course { author : { }}

// Hybrid 
//auhtor { }
// course { author : { id , name}}