let express = require('express')
var fs = require("fs")

let app = express()

var data = fs.readFileSync('users.json');
var users = JSON.parse(data);

//http://localhost:8081/user?uid=1
app.get('/user', (req,res) => {
    let userId = parseInt(req.query.uid);
    console.log(userId);
    var response;
    response = users.find(user => user.id === userId);
    try{
        if(response.id <= users.length){
        res.send(response);
    }}catch(err){
        res.send("No user found!")
    }   
});

//http://localhost:8081/users/all
app.get('/users/all', (req,res) => {
        res.send(users);
});

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));
