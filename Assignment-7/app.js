

const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port=3000;



  // // server css as static
  // app.use(express.static(__dirname));
  
  
  
  app.use(urlencoded({extended:true}))
  
  app.get("/", (req, res) => {
    resp.setHeader("Content-Type","text/html")
    res.sendFile(__dirname + "/index.html");
  });
  
  app.post("/welcome", (req, res) => {
    var firstName = req.body.fname
    var lastName = req.body.lname;
    var city = req.body.city;
  
  console.log("First Name: " + firstName);  
  console.log(" Last Name: "+lastName); 
  console.log(" City: "+city);
  res.setHeader("Content-Type","text/html")
  res.sendFile(__dirname+"/welcome.html");
  
   
  });

  app.listen(port,()=>{

    console.log(`http://localhost:${port} started `);

});
