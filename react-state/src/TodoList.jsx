import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let addTodo = () => {
        setTodos([...todos, {task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }
    return(
        <div>
            <input type="text" name="todo" placeholder="Add a task" onChange={updateTodoValue} value={newTodo}/>
            <button onClick={addTodo} >Add</button>
           <br />
           <br />
           <hr />
           <h4>Tasks to do</h4>
           <ul>
            {todos.map((todo)=>(
                 <li key={todo.id}>{todo.task}</li>
            ))}
           </ul>
        </div>
        )
}

