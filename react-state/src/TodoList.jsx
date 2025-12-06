import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos)=>{
            todos.filter((prevTodos)=> prevTodos.id != id)
        });
    }

    return(
        <div>
            <input type="text" name="todo" placeholder="Add a task" onChange={updateTodoValue} value={newTodo}/>
            <button onClick={addNewTask} >Add</button>
           <br />
           <br />
           <hr />
           <h4>Tasks to do</h4>
           <ul>
            {todos.map((todo)=>(
                 <li key={todo.id}>
                    <span>{todo.task}</span>&nbsp;&nbsp;
                    <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                    <br />
                    <br />
                    </li>
            ))}
           </ul>
        </div>
        )
}

