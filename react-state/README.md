🌟 React State Playground

A React + Vite project demonstrating different types of state management using useState.
This playground includes examples such as a Like Button, a Ludo move tracker, and a fully functional Todo List.

Perfect for beginners practicing React state updates, immutability, and UI re-rendering.

----

📁 Components Overview

This project contains three main state-driven components:

✔️ LikeButton.jsx

A simple toggle button that switches between a filled and unfilled heart icon.

Concepts Learned:

- Boolean state (liked)

- Click event handling

- Conditional rendering

- Inline styling

✔️ LudoBoard.jsx

Simulates moves for four Ludo players — Red, Yellow, Blue, and Green.
Each button increments the move count, and every move logs an entry to an array.

Concepts Learned:

- Managing object state with useState

- Using functional updates (setState(prev => ...))

- Maintaining array history in state

- Rendering lists dynamically

✔️ TodoList.jsx

A small CRUD-style todo manager with tasks that can be added, deleted, and marked as done.

Concepts Learned:

- Managing arrays of objects in state

- Immutable state updates

- Controlled input elements

- Updating specific items using .map()

- Filtering items using .filter()

- Marking all tasks as done at once
----

🛠️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/Anvesh-999/fullstack-dev-playground.git
```
2️⃣ Navigate to the project folder
```bash
cd fullstack-dev-playground/react-state
```
3️⃣ Install dependencies
```bash 
npm install
```
4️⃣ Start the development server
```bash
npm run dev
```
The project will start on:
```bash 👉 http://localhost:5173 ```
----
📦 Component Documentation

Below is a breakdown of each component with code explanation.


❤️ LikeButton Component

File: LikeButton.jsx

Purpose:

A heart icon that toggles between liked (solid red) and unliked (regular outline).

How it Works:

- liked state stores whether the button is active

- Clicking the icon toggles the boolean

- Uses FontAwesome icons for display

State Visualization:
```bash  
let [liked, setLiked] = useState(false);  ```
----
🎲 LudoBoard Component

File: LudoBoard.jsx

Purpose:

- Tracks move counts for each Ludo color and logs each move.

State Used:
```bash
const [moves, setMoves] = useState({ red: 0, blue: 0, green: 0, yellow: 0 });
const [arr, setArr] = useState(["no moves"]);
```
```Features```

- Track moves per color

- Maintain history of moves

- Display all moves in a log

- Demonstrates functional updates for safe state mutation

----

📝 TodoList Component

File: TodoList.jsx

Purpose:

- Full Todo List with adding, deleting, and marking tasks as done.

State Used:
```bash
let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
let [newTodo, setNewTodo] = useState("");
```
```Features```

- Add new task

- Delete any task

- Mark individual task as done

- Mark all tasks as done

- Line-through styling applied for completed tasks

- Ids generated using uuidv4()
----

🤝 Contributing

Feel free to fork this repo and experiment with more state-based components.
PRs are welcome!

👤 Author

-  Anvesh Anumolu