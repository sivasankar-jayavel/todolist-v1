const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

// console.log(date());

const app = express();

const items = ["Buy Food","Cook Food","Eat Food","Sea Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {

    const day = date();
    res.render("list", { listTitle : day , newListItem : items });
});

app.post("/", function (req, res) {

    const item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    } else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",(req,res)=>{
    res.render("list",{listTitle :" Work List" , newListItem : workItems });  
})

app.post("/work",(req,res)=>{
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.listen(3000, function () {
    console.log("Server Started On Port 3000");
})






// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.get("/",function(req,res){
//     res.send("hai");
// });

// app.listen(3000,function(){
//     console.log("Server Started On Port 3000");
// })