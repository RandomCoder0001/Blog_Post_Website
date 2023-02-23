// js esversion:6

const express = require("express");
const body_Parser = require("body-parser");
const app = express();
const _ = require("lodash");
const { lowerCase } = require("lodash");

app.use(body_Parser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum optio placeat assumenda, dolore non nemo. Enim deleniti reprehenderit nisi. Earum quaerat porro obcaecati. Veritatis blanditiis corporis quae est eos porro!Nostrum libero rem exercitationem blanditiis quasi dolor inventore architecto nesciunt provident, quam similique corporis animi ut vel iste corrupti aliquam minima officiis eius, ullam culpa pariatur? Eum dolorum id tenetur?Tempore excepturi laboriosam eos dolor optio iusto recusandae, aut in minus cumque nesciunt, ullam esse rerum dolore voluptatibus! Unde sit debitis dicta libero saepe magnam iste quod? Iusto, sed aliquam.";
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum optio placeat assumenda, dolore non nemo. Enim deleniti reprehenderit nisi. Earum quaerat porro obcaecati. Veritatis blanditiis corporis quae est eos porro!Nostrum libero rem exercitationem blanditiis quasi dolor inventore architecto nesciunt provident, quam similique corporis animi ut vel iste corrupti aliquam minima officiis eius, ullam culpa pariatur? Eum dolorum id tenetur?Tempore excepturi laboriosam eos dolor optio iusto recusandae, aut in minus cumque nesciunt, ullam esse rerum dolore voluptatibus! Unde sit debitis dicta libero saepe magnam iste quod? Iusto, sed aliquam.";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum optio placeat assumenda, dolore non nemo. Enim deleniti reprehenderit nisi. Earum quaerat porro obcaecati. Veritatis blanditiis corporis quae est eos porro!Nostrum libero rem exercitationem blanditiis quasi dolor inventore architecto nesciunt provident, quam similique corporis animi ut vel iste corrupti aliquam minima officiis eius, ullam culpa pariatur? Eum dolorum id tenetur?Tempore excepturi laboriosam eos dolor optio iusto recusandae, aut in minus cumque nesciunt, ullam esse rerum dolore voluptatibus! Unde sit debitis dicta libero saepe magnam iste quod? Iusto, sed aliquam.";

const posts = [];

app.listen(3000 , function(){
    console.log("Server is on");
});

app.get("/" , (req , res) =>{
    res.render("home" ,{homepage_content:homeStartingContent , posts:posts});
});

app.get("/about" , (req , res) =>{
    res.render("about" ,{about_content:aboutContent});
});

app.get("/contact" , (req , res) =>{
    res.render("contact" ,{contact_content:contactContent});
});

app.get("/compose" , (req , res) =>{
    res.render("compose");
});

app.post("/compose" , (req, res) =>{

    posts.push(req.body);
    res.redirect("/");
});

app.get("/posts/:title", (req,res)=>{
    for(var i = 0; i < posts.length; i++){
        if(_.lowerCase(req.params.title) === _.lowerCase(posts[i].title)){
            res.render("post" , {title:posts[i].title , content:posts[i].content});
            break;
        }
    }
});

