const { request } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended:false}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let student = {
        name:'Lâm',
        age:19
    }
    res.render('home',{student});
});

app.get('/product',(req,res)=>{
    let products = [
        {name:'Cường',sex:true,age:'18'},
        {name:'Lan Anh',sex:true,age:'18'},
        {name:'Minh',sex:false,age:'18'},
    ]
    res.render('product',{products});
});

app.get('/product/:id',(request,res)=>{
    res.send(request.params.id);
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/register',(req,res)=>{
    // console.log(req.body);
    res.send(req.body.email);
});

app.get('/about',(req,res)=>{
    res.send("About nè");
});

app.listen(3000,()=>{
    console.log("Server running 3000");
});