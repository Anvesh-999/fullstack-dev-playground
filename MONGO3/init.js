const mongoose=require('mongoose');
const Chat=require('./models/chat.js');
main()
.then(()=>{
        console.log('connected to databse');
    })
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1/whatsapp')
}

let allChats=[
    {
        from:'neha',
        to:'priya',
        msg:'send me ur exam sheet',
        created_at:new Date()
    },
    {
        from:'neha',
        to:'rahul',
        msg:'send me ur exam sheet',
        created_at:new Date()   
    },
    {   
        from:'raj',
        to:'rakul',
        msg:'send me ur exam sheet',
        created_at:new Date()
    },
    {
        from:'ramya',
        to:'sita',
        msg:'send me ur exam sheet',
        created_at:new Date()
    }
];
Chat.insertMany(allChats);