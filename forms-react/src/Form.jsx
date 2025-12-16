import { useState } from "react";

export default function Form(){
    let [fullName, setFullName] = useState("");

    let handleChange= (e)=>{
        setFullName(e.target.value);
    }
    return(
        <form>
            <label htmlFor="username">Full Name</label> &nbsp;
            <input type="text" id="username" placeholder="enter full name" value={fullName} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}