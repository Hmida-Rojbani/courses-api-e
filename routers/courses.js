const router = require('express').Router();
const _ = require('lodash')
const Course = require('../models/course');

router.get('', async (req,res)=>{
    res.send(await Course.find());
});

router.get('/:id', async (req,res)=>{
    let course = await Course.findById(req.params.id);
    if(!course)
        return res.status(404).send('Id not found')
    res.send();
});

router.post('', async (req,res) => {
    /* let course = new Course({
        title : req.body.title, 
        author : req.body.author
    }); */
    let course = new Course(_.pick(req.body,['title','author','price','tags','isPublished']));
    course = await course.save();
    res.status(201).send(course);
});


module.exports = router