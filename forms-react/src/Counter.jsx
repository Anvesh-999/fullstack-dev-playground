import {useState,useEffect} from "react"

export default function Counter(){
    const [count,setCount]= useState(0);

    let incCounter=()=>{
        setCount(incCount=>incCount+1);
    }
    useEffect(()=>{
        console.log("Counter updated to ", count);
    })

    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={incCounter}>+1</button>
        </div>
    )
}