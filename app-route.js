/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/', (re, res)=>{
  res.status(200).send({'status': 'working...'});
});

module.exports=router;
