const express = require('express');
const app=express()
const port =8000

require('./config')
var adminController = require('./controllers/adminController')
app.get('/',(req,res)=>{
    return res.status(200).send("Started")
})
app.get('/add',adminController.addUser)


app.listen(port,()=>console.log(`App is listening on port ${port}`))