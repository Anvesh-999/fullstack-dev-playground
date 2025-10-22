# 💬 Chat CRUD App — MongoDB + Express + EJS

A simple full-stack CRUD (Create, Read, Update, Delete) chat application built using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, and **EJS templates**.  
This project demonstrates how to perform complete database operations with a clean UI — similar to a basic **WhatsApp-like chat interface**.

---

## 🚀 Features

- ⚙️ Connects to MongoDB using **Mongoose**
- 📄 Uses **EJS templates** for dynamic HTML rendering
- 🧩 RESTful CRUD routes for managing chats
- ✏️ Edit & update messages
- 🗑️ Delete chat entries
- 🕓 Displays timestamps using `created_at`
- 📁 Organized file structure with `models`, `views`, and `public`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for routing & middleware |
| **Mongoose** | MongoDB Object Data Modeling |
| **MongoDB** | NoSQL database |
| **EJS** | Template engine for dynamic pages |
| **method-override** | Enables PUT & DELETE requests in forms |

---
```bash ...
## 📁 Folder Structure

MONGO3/
│
├── index.js              # Main server file
├── models/
│   └── chat.js           # Chat schema/model
├── views/
│   ├── index.ejs         # View for showing all chats
│   ├── new.ejs           # Form for creating a new chat
│   └── edit.ejs          # Form for editing an existing chat
├── public/               # Static files (CSS, JS)
└── README.md
 ```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/Anvesh-999/fullstack-dev-playground.git
cd fullstack-dev-playground/MONGO3

2️⃣ Install dependencies
npm install express mongoose ejs method-override

3️⃣ Start your MongoDB server
Ensure MongoDB is running locally (default port 27017):

4️⃣ Run the application

node index.js

5️⃣ Access in your browser
http://localhost:8080/chats

💬 CRUD Functionality

🟢 CREATE

Route: POST /chats
Description: Add a new chat with from, to, and msg fields.
Form: Submitted via new.ejs

let newChat = new Chat({
  from: "Alice",
  to: "Bob",
  msg: "Hey Bob!",
  created_at: new Date()
});
newChat.save();

🔵 READ
Route: GET /chats
Description: Displays all chat messages from the database using index.ejs.

🟡 UPDATE

Routes:

GET /chats/:id/edit — Displays edit form

PUT /chats/:id — Updates the message content

Example:

Chat.findByIdAndUpdate(id, { msg: "Updated message" }, { new: true });

🔴 DELETE
Route: DELETE /chats/:id
Description: Deletes a chat message by ID and redirects to /chats.

🧠 Model: Chat Schema (models/chat.js)
const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
  from: String,
  to: String,
  msg: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
🎨 Views (EJS Templates)
index.ejs — Displays all chats in a table or card layout

new.ejs — Form for creating a new chat

edit.ejs — Form for updating an existing chat message

Each form uses method-override to support PUT and DELETE operations.

📦 Example MongoDB Connection
await mongoose.connect('mongodb://127.0.0.1/whatsapp');
To use MongoDB Atlas instead, replace the URI with your connection string:

mongodb+srv://<username>:<password>@cluster0.mongodb.net/whatsapp

🌐 Routes Summary

Method	Route	Description
GET	/	Root test route
GET	/chats	List all chats
GET	/chats/new	Form to create a new chat
POST	/chats	Create new chat
GET	/chats/:id/edit	Form to edit chat
PUT	/chats/:id	Update chat
DELETE	/chats/:id	Delete chat

🧑‍💻 Author
Anvesh Anumolu
📧 anvesh.a9100@gmail.com
[🔗 GitHub Profile](https://github.com/Anvesh-999)

