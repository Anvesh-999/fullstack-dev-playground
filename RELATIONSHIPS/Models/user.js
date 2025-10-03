const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(()=> console.log("connection succesfully"))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    address:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
})

const User=mongoose.model('User',userSchema);

const addUser= async()=>{
    let user1 = new User({
        username:"John",
        address:[{location:"New York",city:"NY"},{location:"Los Angeles",city:"CA"}]
    });
    user1.address.push({location:"Chicago",city:"IL"});
    let res = await user1.save();
    console.log(res);
}
addUser();