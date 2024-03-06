const express = require('express')
const {db} = require('./db.js');
const dotenv = require('dotenv');
const cors = require('cors');
const {readdirSync} = require('fs') ; 
const bodyParser = require('body-parser');

dotenv.config() ; 

const app =  express() ; 
const PORT = process.env.PORT ; 

app.use(bodyParser.json());

app.use(express.json()) 
app.use(cors()) 



app.get("/" , (req , res) => {
    res.send("hello ") ; 
})

readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)))


const server = () => {
    db();
    app.listen(PORT , () => {
        console.log('you are listening to port ' , PORT)
    })
}
server() ; 
