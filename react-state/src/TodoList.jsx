import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id:uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        if (!newTodo.trim()) return;
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4(),isDone:false}];
        });
        setNewTodo("");
    }
    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        setTodos(prevTodos=> prevTodos.filter(todo=> todo.id !== id));
    }

    let markAllDone=()=>{
        setTodos((prevTodos)=>(
            prevTodos.map((todo)=>{
            return {
                ...todo,
                isDone:true
            }
        })
    ));
    }

    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
            if(todo.id === id){
            return {
                ...todo,
                isDone:true
            }
        }else{
            return todo;
        }
        })
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
                    <span style={ todo.isDone ? { textDecorationLine: 'line-through' } : {}}>
                        {todo.task} 
                        </span>&nbsp;&nbsp;
                    <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                    <button onClick={()=>markAsDone(todo.id)}> Mark as Done</button>
                    <br />
                    <br />
                    </li>
            ))}
           </ul>
           <br />
           <button onClick={markAllDone}>Mark all as Done</button>
        </div>
        )
}

