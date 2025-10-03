const mongoose = require('mongoose');

main()
.then((res)=>{
  console.log('Connected to MongoDB');
})
.catch((err)=>console.log('Error connecting to MongoDB:', err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
 
const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  age:Number
});
const User= mongoose.model('User', userSchema);


// Example usage of the User model
  //for seeing all the documents in the collection
// const user1=new User({name:'Tony', email:'tony777@gmail.com',age:30});
// user1.save();


// User.insertMany([
//   {name:'prabhas', email:'prabhas24@gmail.com', age:35},
//   {name:'ntr', email:'ntr77@gmail.com', age:40}
// ])
// .then((res) => {
//   console.log('Users inserted:', res);
// });
// User.find({}).then((res) => {
//   console.log('Users found:', res);
// }).catch((err) => {
//   console.log('Error finding users:', err);
// });


// User.updateOne({name:'adam'},{age:30})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// })

// User.findOneAndUpdate({name:'Tony'},{age:35},{new :true})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// });


// User.deleteOne({name:'Tony'})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)});
// User.findOneAndDelete({name:'Steve'})
// .then((res)=>{
//   console.log('User deleted:', res);
// });

const user2=new User({
  name:'eve',
  email:'eve999@gmail.com',
  age:25
});


// user2.save()
// .then((res)=>{
//   console.log('User saved:', res);
// })
// .catch((err)=>{
//   console.log('Error saving user:', err);
// });