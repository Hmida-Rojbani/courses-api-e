const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectID = require('joi-objectid')(Joi)
const courseSchema = new mongoose.Schema({
    title : {type : String, required :true},
    author : { id : { type: mongoose.Schema.Types.ObjectId , ref : 'Author'},
                name : String},
    tags : {type :[String], validate : {  validator: function(v){
        return v.length > 0
    }, message : 'Course Tags must contains at least one tag.'}},
    price : {type:Number, required : function() { return this.isPublished}, max : 500, min : 10},
    date : {type : Date, default : Date.now()},
    isPublished : Boolean
});

let course_validation_schema = Joi.object({
    title : Joi.string().min(5).required(),
    author : { id: Joi.objectID() , name : Joi.string().min(5).max(30)},
    tags : Joi.array().items(Joi.string().min(2)),
    price : Joi.number().positive(),
    isPublished : Joi.boolean()
})
function course_validation(body) {
    return course_validation_schema.validate(body);
}

let course_validation_update_schema = Joi.object({
    title : Joi.string().min(5),
    author : { id: Joi.objectID() , name : Joi.string().min(5).max(30)},
    tags : Joi.array().items(Joi.string().min(2)),
    price : Joi.number().positive(),
    isPublished : Joi.boolean()
})
function course_validation_update(body) {
    return course_validation_update_schema.validate(body);
}
const Course = mongoose.model('Course', courseSchema);

module.exports.Course = Course;
module.exports.course_validation = course_validation;
module.exports.course_validation_update = course_validation_update;