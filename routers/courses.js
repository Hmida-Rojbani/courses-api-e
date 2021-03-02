const router = require('express').Router();
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

module.exports = router