# 🚀 Fullstack Dev Playground

[![HTML](https://img.shields.io/badge/HTML-%23E34F26?logo=html5&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?logo=javascript&logoColor=black)]()
[![CSS](https://img.shields.io/badge/CSS-%231572B6?logo=css3&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)]()
[![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)]()
[![EJS](https://img.shields.io/badge/EJS-4B0082?logo=EJS&logoColor=white)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)]()

> **fullstack-dev-playground** — a curated collection of learning projects (mini apps, exercises and APIs) covering HTML/CSS, Bootstrap, Tailwind, vanilla JS, React basics, Node.js/Express, EJS templating, MongoDB, SQL practice and RESTful CRUD patterns.  
> This repo is a hands-on lab for learning and experimentation — intended to be read, run, and iterated daily.

---

## 🎯 Purpose
- Central place for **mini-projects** and practice exercises.
- Showcase learning progress: frontend UIs, backend APIs, DB schema & relations, and small games.
- Provide runnable examples for interview prep and portfolio pieces.

---

## 🗂️ Repo structure (high level)
> Each top folder contains one or more focused mini-projects. Every project should ideally have its own `README.md`.
```bash

fullstack-dev-playground/
├─ Bootstrap/ # Bootstrap examples & templates
├─ Html files/ # pure HTML/CSS examples
├─ RESTFUL_API_CRUD operations/ # Express + Mongo small APIs
├─ RELATIONSHIPS/ # DB relationships demos (one-to-many, many-to-many)
├─ MONGO3/ # MongoDB practice
├─ SQLCLASS/ # SQL exercises / scripts
├─ SimonSaysGame/ # small JS game
├─ Spotify_Clone using html&CSS/ # static UI clone
├─ Todo using js/ # vanilla JS todo
├─ js practice/ # general JS snippets
├─ .gitignore
└─ README.md # ← this file
```


## ▶️ How to run projects (common cases)

### For a Node/Express project
```bash
cd path/to/project-folder
# create .env with required env vars (MONGO_URI, PORT, etc)
npm install
npm start                # or `node app.js` if start not configured
# open http://localhost:3000 or the port you set
For a React project
cd project-folder
npm install
npm start                # runs local dev server (http://localhost:3000)
For static HTML/CSS/JS
Simply open the index.html in browser or use VS Code Live Server extension:

Right-click index.html → Open with Live Server
For SQL scripts
Use MySQL Workbench / pgAdmin to run .sql scripts. Include a README in each SQL folder explaining schema creation steps.
