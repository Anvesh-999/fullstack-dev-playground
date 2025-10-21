RESTful CRUD Application — Express + EJS

A simple RESTful CRUD web application built with Express.js, EJS, and Method-Override.
This app demonstrates the core CRUD (Create, Read, Update, Delete) operations on in-memory data — ideal for beginners learning RESTful routing and template rendering with Express.

🚀 Features

Display all posts

Create a new post

View a specific post

Edit and update a post

Delete a post

Uses EJS templates for rendering dynamic views

Implements method-override to support PUT and DELETE requests from forms

Uses UUID for unique post IDs

🛠️ Tech Stack

Node.js

Express.js

EJS (Templating Engine)

Method-Override

UUID

HTML / CSS (Static files in /public)

📁 Project Structure
RESTFUL_API_CRUD operations/
│
├── public/              # Static assets (CSS, images, JS)
├── views/               # EJS templates (index, new, edit, show)
├── index.js             # Main server file
├── package.json
└── README.md

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/Anvesh-999/fullstack-dev-playground.git
cd "fullstack-dev-playground/RESTFUL_API_CRUD operations"


Install dependencies

npm install


Run the server

node index.js


Open your browser

Navigate to 👉 http://localhost:8080/posts

📖 Available Routes
HTTP Method	Route	Description
GET	/posts	Display all posts
GET	/posts/new	Form to create a new post
POST	/posts	Create a new post
GET	/posts/:id	View a specific post
GET	/posts/:id/edit	Form to edit a post
PATCH	/posts/:id	Update a specific post
DELETE	/posts/:id	Delete a specific post


🧩 Example Data

When you start the server, some sample posts are preloaded:

[
  { username: "Yash", content: "herooo of kgf!" },
  { username: "Prabhas", content: "herooo of Bahubali!" },
  { username: "NTR", content: "herooo of Temper!" }
]

💡 Notes

The data is stored in memory (resets when the server restarts).

To persist data, integrate a database like MongoDB or SQLite.

method-override is used to handle PATCH and DELETE requests via forms.


🧑‍💻 Author

Anvesh Anumolu