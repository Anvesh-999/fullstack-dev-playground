const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(()=> console.log("connection succesfully"))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item:String,
    price:Number
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

const Order=mongoose.model('Order',orderSchema);
const Customer=mongoose.model('Customer',customerSchema);

const addCustomer= async ()=>{
    let cust1=new Customer({
        name:"Rahul kumar",
    });
    let order1= await Order.findOne({item:'samosa'});
    let order2= await Order.findOne({item:'biryani'});
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let res=await cust1.save();
    console.log(res);
}
// addCustomer();

const findCust= async()=>{
    //it stores complete order object instead of id
    let cust= await Customer.find({}).populate("orders"); 
    console.log(cust[0]);
}
// findCust();

const addOrders= async ()=>{
    let res=await Order.insertMany([
        {item:'samosa',price:30},
        {item:'biryani',price:200},
        {item:'pasta',price:100}
    ]);
    console.log(res);
}
// addOrders();
