const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');  
const express=require('express');
const app=express();
const Path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', Path.join(__dirname,'./views'));

const connection = mysql.createConnection({
  host: 'localhost', 
  user:'root',
  database: 'delta_app',
  password:'Anvesh@2005'
});

let  getRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password()
  ];
};

//home route
app.get('/', (req, res) => {
  let q='select count(*) from users';
  try{
  connection.query(q ,(err,result)=>{
  if(err) throw err;
  let count = result[0]['count(*)'];
  res.render("home.ejs",{count});
});
}catch(err){
  console.log("Error connecting to the database:", err);
  res.send("some error in DB"); 
}
});

//show route
app.get('/user', (req, res) => {
  let q='select * from users';
  try{
  connection.query(q ,(err,users)=>{
  if(err) throw err;
  res.render("showusers.ejs",{users});
});
  }catch(err){
    console.log("Error connecting to the database:", err);
    res.send("some error in DB"); 
  }
});


app.get('/user/:id/edit', (req, res) => {
  let { id }=req.params;
  let q=`select * from users where id='${id}'`;
  try{
  connection.query(q ,(err,result)=>{
  if(err) throw err;
  let user = result[0];
  res.render("edit.ejs",{user}); 
});
  }catch(err){
    console.log("Error connecting to the database:", err);
    res.send("some error in DB"); 
  }
}) ;

app.patch('/user/:id', (req, res) => {
  let { id }=req.params;  
  let {password: formPass, username : newUsername}=req.body;
   let q=`select * from users where id='${id}'`;
  
   try{
  connection.query(q ,(err,result)=>{
  if(err) throw err;
  let user = result[0];
   if(formPass !== user.password){
    res.send("Incorrect password");
  }else{
    let q2=`update users set username='${newUsername}' where id='${id}'`;
    connection.query(q2 ,(err,result)=>{
      if(err) throw err;
      res.redirect('/user');
    });
  }
   });
  }catch(err){
    console.log("Error connecting to the database:", err);
    res.send("some error in DB"); 
  } 
});
//add
app.get("/user/add", (req, res) => {
  res.render("adduser.ejs");
});

app.post("/user/add", (req, res) => {
  let {id,username, email, password} = req.body;
  let q = `insert into users values('${id}','${username}','${email}','${password}')`;
  try{
  connection.query(q, (err, result) => {
    if (err) throw err;
    res.redirect('/user');
  });
  }catch(err){
    console.log("Error connecting to the database:", err);
    res.send("some error in DB"); 
  }
});


app.get("/user/:id/deleteform", (req, res) => {
  let { id }=req.params;
  let q=`select * from users where id='${id}'`;
  try{
  connection.query(q ,(err,result)=>{
  if(err) throw err;
  let user = result[0];
  res.render("deleteform.ejs",{user});
});
  }catch(err){  
    console.log("Error connecting to the database:", err);
    res.send("some error in DB"); 
  }
});

app.delete("/user/:id", (req, res) => {
  let { id }=req.params;  
  let {password: UserPass ,email: UserEmail}=req.body;
   let q=`select * from users where id='${id}'`;
  
   try{
  connection.query(q ,(err,result)=>{
  if(err) throw err;
  let user = result[0];
   if(UserPass !== user.password || UserEmail !== user.email){
    res.send("Invalid emali or password!"); 
  }
  else{
    let q2=`delete from users where id='${id}'`;
    connection.query(q2 ,(err,result)=>{
      if(err) throw err;
      res.redirect('/user');
    });
  }
    });
  }catch(err){
    console.log("Error connecting to the database:", err);
    res.send("some error in DB"); 
  }
}
);

app.listen("8080", () => {
  console.log('Server is running on port 8080');
});



