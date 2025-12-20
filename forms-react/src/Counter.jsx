import {useState,useEffect} from "react"

export default function Counter(){
    const [countx,setCountx]= useState(0);
    const [county,setCounty]= useState(0);

    let incCounterx=()=>{
        setCountx(countx=>countx+1);
    }
    let incCountery=()=>{
        setCounty(county=>county+1);
    }

    useEffect(()=>{
        console.log("Counter updated");
    },[countx]);

    return(
        <div>
            <h2>Countx : {countx}</h2>
            <button onClick={incCounterx}>+1</button>
            <h2>County : {county}</h2>
            <button onClick={incCountery}>+1</button>
        </div>
    )
}