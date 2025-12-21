import {useState,useEffect} from "react";

export default function Joke(){
    const[joke,SetJoke] = useState({});
    const url="https://official-joke-api.appspot.com/random_joke";

    const fetchJoke=async()=>{
        const response = await fetch(url);
        const data = await response.json();
        SetJoke({setup: data.setup, punchline: data.punchline});
    }

    useEffect(()=>{
        // async function firstJoke() {
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     SetJoke({setup: data.setup, punchline: data.punchline});
        // }
        fetchJoke();
    },[]);

    return(
        <div>
            <h2>Joke Component</h2>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <button onClick={fetchJoke}>New Joke!</button>
        </div>
    )
}