//Filename- index.js

//Importing express module
const express= require("express");
const app= express();

//Handling GET / request
app.use("/", (req, resp, next) => {
    resp.send("This is the express server");

});

//Handling GET /hello request
app.use("/hello", (req, resp, next) => {
    resp.send("This is the hello response from server");
    
});

app.listen(3000, () => {
    console.log("Server in running");
});

//adding new features here