const express = require("express");
const app = express()
const ExpressError = require("./ExpressError");


app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if (token == "giveaccess") {
        next()
    }
    throw new ExpressError(401,"Access Denied")     
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Route forbidden")
})

app.get("/api",(req,res)=>{
    res.send("data")
})

app.get("/err",(req,res)=>{
    abcd = abcd
    throw new ExpressError(401,"Error")
})

app.use((err,req,res,next)=>{
    let {status = 405, message} = err
    res.status(status).send(message)
})


// app.use((req,res,next)=>{
//     req.time= Date.now()
//     console.log(req)
//     console.log(req.method,req.hostname,req.time)
//     next()
// })

app.get("/",(req,res)=>{
    res.send("This is Root path");
})

app.get("/abcd",(req,res)=>{
    res.send("This is ABCD path");
})

app.listen("7302",()=>{
    console.log("listening");
})