require('dotenv').config();
var multer  = require('multer')
const express = require('express');
const cors = require('cors');
const routers = require('./routers')

const app = express();


const genRand = (len) => {
    return Math.random().toString(36).substring(2,len+2);
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
       const  randString=genRand(10)
       const filename=file.originalname.split(".");
      cb(null, filename[0]+"_"+randString+"."+filename[1])
    }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    return res.status(200).send("welcome")
})


app.post('/protien-image-upload', upload.single('protein-img'), function (req, res, next) {
    // req.file is the `protein-img` file
    // req.body will hold the text fields, if there were any
    // console.log(JSON.stringify(req.file))
    //console.log(req.file.path)
    return res.send(req.file.path)
  })

app.use('/api', routers)


app.listen(process.env.APP_PORT || 8080, ()=>{
    console.log("server is running on port ", process.env.APP_PORT || 8080)
})