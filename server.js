require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routers = require('./routers')

const app = express();

// var corsOptions ={
//     origin: 'http://localhost:3000'
// }

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', routers)


app.listen(process.env.APP_PORT || 8080, ()=>{
    console.log("server is running on port ", process.env.APP_PORT || 3000)
})