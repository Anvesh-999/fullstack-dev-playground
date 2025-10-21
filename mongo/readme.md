# 🍃 MongoDB CRUD Practice — Mongoose & Node.js

A simple project demonstrating how to connect Node.js with **MongoDB** using **Mongoose** and perform basic **CRUD (Create, Read, Update, Delete)** operations.  
This serves as a beginner-friendly example for understanding how to work with MongoDB in backend applications.

---

## 🚀 Features

- ✅ Connects to a local MongoDB database using **Mongoose**
- 🧩 Defines a simple **User schema** with name, email, and age fields
- ➕ Insert new users (single or multiple documents)
- 🔍 Retrieve all users or filter using conditions
- ✏️ Update existing documents using `updateOne` and `findOneAndUpdate`
- 🗑️ Delete documents using `deleteOne` and `findOneAndDelete`
- 💡 Great for learning **MongoDB CRUD operations** with Node.js

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Node.js** | JavaScript runtime |
| **Mongoose** | ODM (Object Data Modeling) library for MongoDB |
| **MongoDB** | NoSQL database |
| **npm** | Dependency management |

---

## 📁 Project Structure

mongo/
│
├── index.js # Main server / database script
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Anvesh-999/fullstack-dev-playground.git
cd "fullstack-dev-playground/mongo"

2️⃣ Install dependencies
npm install mongoose

3️⃣ Start your MongoDB server
Make sure MongoDB is running locally (default port 27017), or update the connection URL in the code.

4️⃣ Run the project

node index.js
If successful, you’ll see:

Connected to MongoDB

🧠 Example CRUD Operations

🟢 Create
const user1 = new User({ name: 'Tony', email: 'tony777@gmail.com', age: 30 });
user1.save();
Or insert multiple:

User.insertMany([
  { name: 'Prabhas', email: 'prabhas24@gmail.com', age: 35 },
  { name: 'NTR', email: 'ntr77@gmail.com', age: 40 }
]);

🔵 Read
User.find({}).then(res => console.log(res));

🟡 Update
User.updateOne({ name: 'Tony' }, { age: 35 });
User.findOneAndUpdate({ name: 'Tony' }, { age: 35 }, { new: true });

🔴 Delete
User.deleteOne({ name: 'Tony' });
User.findOneAndDelete({ name: 'Steve' });

💡 Notes
Uses a local MongoDB connection:
mongodb://127.0.0.1:27017/test

To use MongoDB Atlas, replace this URL with your Atlas connection string.

Uncomment specific CRUD sections in the code to test each operation.

All operations are asynchronous and return Promises.

For production apps, add proper error handling and environment variables.

🧑‍💻 Author

Anvesh Anumolu
📧 anvesh.a9100@gmail.com