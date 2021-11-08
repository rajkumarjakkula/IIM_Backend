const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const database= require('../models');
router.get('/all', (req, res)=>{
  database.Employee_list.findAll().then((list)=>{
    res.send(list);
  });
});

router.post('/add-employee', (req, res)=>{
  database.Employee_list.create({
    employee_name: req.body.name,
    employee_email: req.body.email,
  }).then((submit)=>{
    res.send(submit);
  });
});


module.exports=router;
