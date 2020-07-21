const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')

const app = express()

const db = require("./app/models");
db.sequelize.sync();


db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

var corsOptions = {
    origin : 'http://localhost:8081'
}


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requst content type - application/json
app.use(bodyParser.json())

// parse request content type - applications /x-www-form urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//simple route
app.get('/',(req,res)=>{
    res.json({
        message : "Welcome Rest Api Sequelize"
    })
});

//app.get('/', (req, res) => res.send('Hello World!'))


// set Port
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))