# 🔧 Chat App with Middleware — Express + MongoDB + EJS

A robust chat application demonstrating **Express middleware**, **error handling**, and **MongoDB CRUD operations**.  
This project extends a basic chat app to include **async error handling**, **custom errors**, and **route-level middleware**.

---

## 🚀 Features

- ⚙️ Connects to MongoDB using **Mongoose**
- 📄 Dynamic **EJS templates** for views
- 🧩 Full CRUD functionality for chats
- ✏️ Edit & update chat messages
- 🗑️ Delete chat messages
- 🔐 Protected API routes using **custom middleware** (`checkToken`)
- ⚡ Handles async errors gracefully using `asyncWrap`
- 🛠️ Custom error class (`ExpressError`) for structured error responses
- 🌐 Demonstrates global error-handling middleware

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for routing & middleware |
| **Mongoose** | MongoDB ODM for data modeling |
| **MongoDB** | NoSQL database |
| **EJS** | Template engine for dynamic pages |
| **method-override** | Enables PUT & DELETE requests in forms |

---

## 📁 Folder Structure

```bash
MIDDLEWARES/
│
├── index.js              # Main server file
├── models/
│   └── chat.js           # Chat schema/model
├── views/
│   ├── index.ejs         # Shows all chats
│   ├── new.ejs           # Form for creating a chat
│   └── edit.ejs          # Form for editing chat
├── public/               # Static assets (CSS, JS)
├── ExpressError.js       # Custom error class
└── README.md
```

⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/Anvesh-999/fullstack-dev-playground.git
cd fullstack-dev-playground/MIDDLEWARES

2️⃣ Install dependencies
npm install express mongoose ejs method-override

3️⃣ Start MongoDB server
mongod
4️⃣ Run the project
node index.js
5️⃣ Open in browser
http://localhost:8080/chats

🧩 Key Routes

Method	Route	Description

GET	/	Root test route

GET	/chats	List all chats

GET	/chats/new	Form to create a new chat

POST	/chats	Create new chat

GET	/chats/:id	Show chat details

GET	/chats/:id/edit	Form to edit a chat

PUT	/chats/:id	Update chat message

DELETE	/chats/:id	Delete chat message

GET	/api	Protected API route (requires token giveaccess)

GET	/admin	Throws a custom forbidden error

🔐 Middleware & Error Handling

Async wrapper (asyncWrap)
Handles rejected promises in route handlers, avoiding repetitive try/catch blocks.

Custom middleware (checkToken)
Protects routes by validating a query token.

Custom error class (ExpressError)
Throws structured errors with status codes and messages.

Global error handling middleware
Catches validation errors, async errors, and unknown errors.

💬 Example: Protected API
GET /api?token=giveaccess
# Returns: "Welcome to API"
Invalid or missing token throws a 401 Access Denied error.

🧑‍💻 Author
[Anvesh Anumolu](https://github.com/Anvesh-999)
📧 anvesh.a9100@gmail.com