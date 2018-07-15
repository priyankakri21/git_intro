const express =require('express')
const server=express()

server.get('/',function(req,res,next){
    res.send("Hello world.. m")
})

//localhost:2121/greet/morning/priyanks
server.get('/greet/:tod/:name',function(req,res,next){
    let tod='Morning'
    switch(req.params.tod){
        case 'evening': tod ="Evening";break;
        case 'morning': tod ="Morning";break;
    }
    let greeting = "Good " + tod +" ," +req.params.name
    res.send(greeting)
})
 //localhost:2121/greet/morning?name=priyanka
server.get('/greet/:tod',function(req,res,next){
    let tod='Morning'
    switch(req.params.tod){
        case 'evening': tod ="Evening";break;
        case 'morning': tod ="Morning";break;
    }
    let greeting = "Good " + tod +" ," +req.query.name
    res.send(greeting)
})

//localhost:2121/html

server.get('/html',function(req,res,next){
res.send(`<html>
<body>
<h1>Helloooo it's working..</h1>
</body>
</html>
`)
}


)
server.listen(2121)
