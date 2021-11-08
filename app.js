const express = require('express');
const app = express();
const database = require('./models');
const routes=require('./routes/route');
const port = 5000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', routes);

database.sequelize.sync().then(()=>{
  app.listen(port, ()=>{
    console.log('working at port '+port);
  });
});
