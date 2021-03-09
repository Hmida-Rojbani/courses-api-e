const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title : {type : String, required :true},
    author : String,
    tags : {type :[String], validate : {  validator: function(v){
        return v.length > 0
    }, message : 'Course Tags must contains at least one tag.'}},
    price : {type:Number, required : function() { return this.isPublished}, max : 500, min : 10},
    date : {type : Date, default : Date.now()},
    isPublished : Boolean
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;