const express = require('express')
const { connect } = require('./database/dbConfig')
const userRouter = require('./routes/UserRouter')
require('dotenv').config();

// Database-connection
connect()

// middleware
const app = express()
app.use(express.json())

//all-work
app.use('/api',userRouter);



const Port = process.env.PORT || 8000;
app.listen(Port)