import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        if (!newTodo.trim()) return;
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos(prevTodos=> prevTodos.filter(todo=> todo.id !== id));
    }

    let upperCaseAll=()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
            return {
                ...todo,
                task:todo.task.toUpperCase()
            }
        })
    ));
    }

    let upperCaseOne=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id === id){
            return {
                ...todo,
                task:todo.task.toUpperCase()
            }
        }else{
            return todo;
        }
        })
    );
    }
    let markAsDone=(id)=>{
        setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id
        ? { ...todo, isDone: !todo.isDone } 
        : todo
    )
  );
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
                    <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                        {todo.task} 
                        </span>&nbsp;&nbsp;
                    <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                    <button onClick={()=>upperCaseOne(todo.id)}> upperCase one</button>
                    <button onClick={()=>markAsDone(todo.id)}> Mark as done</button>
                    <br />
                    <br />
                    </li>
            ))}
           </ul>
           <br />
           <button onClick={upperCaseAll}>UpperCase all Tasks</button>
        </div>
        )
}

