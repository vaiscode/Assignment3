const express = require('express');
  const morgan  = require('morgan');
  require('dotenv').config();
  const routerFile = require ('./Routes/hospitals');


  const app = new express();
 app.use(morgan('dev'));

 const PORT = process.env.PORT;

 app.use('/hospitals',routerFile);

 app.listen(PORT,(req,res)=>{
    console.log(`Server is up and running on port ${PORT}`)
  })