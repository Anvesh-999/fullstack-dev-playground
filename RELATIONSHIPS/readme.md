🧩 MongoDB Relationships using Mongoose

A practical mini-project demonstrating different types of relationships in MongoDB using Mongoose ODM.
This module includes three examples — showcasing Referenced and Embedded relationship patterns with real working code.

📘 Overview

| File          | Relationship Type        | Description                              |
| ------------- | ------------------------ | ---------------------------------------- |
| `customer.js` | One-to-Many (Referenced) | Customer → Orders with cascade delete    |
| `posts.js`    | One-to-Many (Referenced) | User → Posts using `populate()`          |
| `user.js`     | One-to-Many (Embedded)   | User → Addresses (embedded subdocuments) |

🗂️ Project Structure
```bash
RELATIONSHIPS/
│
├── Models/
│   ├── customer.js     # Customer & Orders (Referenced)
│   ├── posts.js        # User & Posts (Referenced)
│   └── user.js         # User & Addresses (Embedded)
│
├── package.json
└── package-lock.json
```

⚙️ Setup Instructions

Prerequisites:
->Node.js installed
->MongoDB installed and running locally

Installation:

1.Clone this repository

git clone https://github.com/yourusername/RELATIONSHIPS.git
cd RELATIONSHIPS

2.Install dependencies

npm install

3.Start MongoDB

mongod

4.Run examples

node Models/customer.js
node Models/posts.js
node Models/user.js

🧠 Key Concepts

🔗 Relationship Types
| Type                        | Description                                                     | Example                   |
| --------------------------- | --------------------------------------------------------------- | ------------------------- |
| **Referenced (Normalized)** | Data stored in separate collections and linked using `ObjectId` | `customer.js`, `posts.js` |
| **Embedded (Denormalized)** | Data stored directly within the parent document                 | `user.js`                 |

🧩 Mongoose Features Used

populate() – fetch complete referenced documents

post() middleware – cascade delete related documents

$in operator – delete multiple matching IDs

📖 Example Highlights

🧾 customer.js

One Customer → Many Orders

Uses populate() and cascade delete on customer removal

Key functions:

addOrders() → Create sample orders

addCustomer() → Link orders to customers

findCust() → Fetch populated customer data

delCust() → Delete customer and related orders

📝 posts.js

One User → Many Posts

Uses populate() to retrieve user details in posts

Key functions:

addData() → Create user and posts

getData() → Display populated posts

🏠 user.js

One User → Many Addresses

Addresses stored as embedded subdocuments

Key function:

addUser() → Create user with multiple addresses

🗄️ Database Info

Database Name: relationDemo

Connection URL: mongodb://127.0.0.1:27017/relationDemo

🤝 Contributing

Feel free to fork this project and explore new relationship patterns.