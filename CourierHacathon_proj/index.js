// Dependencies to install:
// $ npm install node-fetch --save

// Dependencies to install:
// $ npm install node-fetch --save

// Dependencies to install:
// $ npm install node-fetch --save
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { getMaxListeners } = require("process");
const app = express();
app.use(express.static("local"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){

  res.sendFile(__dirname + "/brandnew.html");
});

app.post("/",function(req, res){
const emails = ["mango.26june@gmail.com","arnavnpatil@gmail.com","manglam.26june@gmail.com"]
const fetch = require('node-fetch');

const name = req.body.fname;
const city = req.body.fcity;
const phone = req.body.fphone;
const blood = req.body.fblood;
const email = req.body.fmail;

  const options = {

  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer pk_prod_VGBTZZE3XD4D08H3R9ZDHGQJDEAN'
  },
  body: JSON.stringify({
    "message": {

      "to":

        [{
          "email": emails[0]
        },
       {
         "email":emails[1]}
       ,{
         "email":emails[2]
       }],
      "content":{
        "title":"Need Blood",
        "body":"name: "+name+",  city:  "+city+",  phone: "+phone+",    blood: "+blood+" please contact me ASAP!"
      }
    }
  })
};

fetch('https://api.courier.com/send', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
});
app.listen(3000,function(){
    console.log("server at 3000")
});
