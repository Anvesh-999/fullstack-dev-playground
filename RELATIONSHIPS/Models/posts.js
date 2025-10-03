const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(()=> console.log("connection succesfully"))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username:String,
    email:String
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const User = mongoose.model('User',userSchema);
const Post = mongoose.model('Post',postSchema);

const addData=async()=>{
    // let user1=new User({
    //     username:"Rahul kumar",
    //     email:"rahul21@gmail.com"
    // });
    // let post1=new Post({
    //     content:"This is my first post",
    //     likes:100,
    // });
    //  post1.user=user1;
    // await user1.save();
    // await post1.save();
    let user = await User.findOne({username:'Rahul kumar'});
    let post2=new Post({
        content:"Bye Bye :)",
        likes:125,
    });
     post2.user=user;
    await post2.save();
};

// addData();

let getData= async ()=>{
    let res= await Post.find({}).populate("user");
    console.log(res);
}
getData();