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
    res.send(course);
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

router.put('/:id', async (req,res)=>{
    let course = await Course.findById(req.params.id);
    if(!course)
        return res.status(404).send('Id not found')
    /* if(req.body.title)
        course.title = req.body.title;
    if(req.body.author)
        course.author = req.body.author; */
    course = _.merge(course,req.body);
    course = await course.save();
    res.send(course);
});

router.delete('/:id', async (req,res)=>{
    let course = await Course.findByIdAndDelete(req.params.id);
    if(!course)
        return res.status(404).send('Id not found')
    res.send(course)
})

module.exports = router