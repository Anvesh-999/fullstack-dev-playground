import { useState } from 'react'

export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [inputValue, setInputValue] = useState("");
    let addTodo = () => {
        console.log("Adding todo:", inputValue);
    }
    let updateTodoValue = (e) => {
        setInputValue(e.target.value);
    }
    return(
        <div>
            <input type="text" name="todo" placeholder="Add a task" onChange={updateTodoValue}/>
            <button onClick={addTodo} >Add</button>
           <br />
           <br />
           <hr />
           <h4>Tasks to do</h4>
           <ul>
            {todos.map((todo)=>{
                return <li>{todo}</li>
            })}
           </ul>
        </div>
        )
}