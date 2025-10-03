const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Chat =require('./models/chat.js');
const methodOverride= require('method-override');
const ExpressError=require('./ExpressError.js');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main()
.then(()=>{
        console.log('connected to databse');
    })
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1/fakewhatsapp')
}

//index route
app.get('/chats',async (req,res)=>{
    try{
let chats=await Chat.find({});
res.render('index.ejs',{chats});
    }catch(err){
        next(err);
    }
});

const checkToken =(req,res,next)=>{
    const {token}=req.query;
    if(token==='giveaccess'){
        next();
    }
    throw new ExpressError(401,"Access Denied");
}
app.get("/api",checkToken,(req,res)=>{
    res.send("Welcome to API");
    res.send(err);
})


app.get('/err',(req,res)=>{
    aba=abba;
})

app.get('/admin', (req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden");
});

// app.use((req,res)=>{
//     res.status(404).send('Page Not Found');
// }) 

//new route
app.get("/chats/new", (req,res)=>{
    // throw new ExpressError(404,"Page not found");
    res.render('new.ejs');
});

//create route
app.post('/chats',asyncWrap(async(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat= new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    await newChat.save()
    res.redirect('/chats');
}));

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch(err=>next(err));
    }
}


//show route
app.get('/chats/:id', asyncWrap(async(req,res,next)=>{
    let {id}=req.params;
        let chat= await Chat.findById(id);
        if(!chat){
            throw next(new ExpressError(500,"Chat Not Found"));
        }
        res.render('edit.ejs',{chat});
}));

//edit route
app.get('/chats/:id/edit', async(req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    res.render('edit.ejs',{chat});

});

//update route
app.put('/chats/:id', asyncWrap(async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(
        id,{msg:newMsg},
        {runValidators:true, new:true});
        console.log(updatedChat);
        res.redirect('/chats');
}))

//delete route
app.delete('/chats/:id', asyncWrap(async (req,res)=>{
    let {id}=req.params;
    let deletedchat= await Chat.findByIdAndDelete(id);
    console.log(deletedchat);
    res.redirect('/chats');
}))

app.get('/',(req,res)=>{
    res.send('Root is working');
});

//mongoose erros handling
const handleValidationErr=(err)=>{
    console.log("This is a Validation Error. Please follow rules");
    console.dir(err.message);
    return err;
}
app.use((err,req,res,next)=>{
   console.log(err.name);
   if(err.name ==='ValidationError'){
    err = handleValidationErr(err);
   }
    next(err);
})

//Error handling middleware
app.use((err,req,res,next)=>{
    let{status=500,message="Some Error occured"}=err;
    res.status(status).send(message);
})


app.listen(8080,()=>{
    console.log('server is running on port 8080');
});