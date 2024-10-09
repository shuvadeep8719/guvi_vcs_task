//Filename: main.js

//importing the http module
const http= require("http");

//Creating server
const server= http.createServer((req, resp) => {
    //Sending the response
    resp.write("This is the response from the server");
    resp.end();
});

//Server listening to port 3000
server.listen((3000), () => {
    console.log("Server is running");
})