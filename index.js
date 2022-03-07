const express=require("express");
//console.log(express);
const app=express()
//console.log(app)
const port=5000;

const Urlcheck=function(req,res,next){
    console.log("current url is",req.originalUrl);
    next();
}

app.use(Urlcheck);

app.get("/books",(req,res)=>{
console.log("books")
res.send({ route: "/books"})

});

app.get("/libraries",(req,res)=>{

    res.send({ route: "/libraries", permission: true});
});

app.get("/authors",(req,res)=>{

    res.send({ route: "/authors", permission: false});
});

app.listen(port,()=>{

    console.log("app is listening on port 5000")
})
