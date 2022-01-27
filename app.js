var express=require("express");
var app= express();
var request=require("request");
const path=require("path");
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("search");
})
app.get("/results",function(req,res){
    var searchName=req.query.search;

  
    request("https://api.themoviedb.org/3/search/movie?api_key=16e9a955599ce36c7234403ff8d6a8dc&query="+searchName,function(error,response,body){
   
        if(!error && response.statusCode==200)
        {
            var data=JSON.parse(body);
             res.render("results",{data:data});
            // res.send(data["results"]);
           
           
        }
    })
})
app.listen(3000);