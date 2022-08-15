require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routers = require('./routers')

const app = express();

var corsOptions ={
    origin: 'https://localhost:3000'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', routers)


app.listen(process.env.APP_PORT || 3000, ()=>{
    console.log("server is running on port ", process.env.APP_PORT || 3000)
})