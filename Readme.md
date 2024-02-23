# This project is been made to help people in learning the concept of Full Stack Microservice Application with AI.

if you download this project after download go to respected directory and type
## npm install
for setsup and learning from yourtube video follow the below steps

# initial Setup

## Step 1 : create react app using

npx create-react-app client

## step 2 :  Setup Nodejs Posts Service
a.  mkdir posts

b. cd posts

c. npm init -y

d. npm install express cors axios nodemon

## step 3 :  Setup Nodejs Comments Service
a.  mkdir  Comments

b. cd  Comments

c. npm init -y

d. npm install express cors axios nodemon

## Create Service for Post service

Go to Posts Service
create One File (Index.js)

let express = require("express");
let app = express();

app.get("/post",(req,res)=>{

});

app.post("/post",(req,res)=>{

});
app.listen(4000,function(req,res){
    console.log("app is running")
})

## add script to run nodejs
"scripts": {
    "start" : "nodemon index.js"
  },

Initial service for post service is ready

do same for Comments service and setup react app
for CSS use : https://getbootstrap.com/