import { useState } from "react";

export default function Form(){
    let [formData, setFormData]= useState({
        fullName: "",
        username: ""
    });
    let inputHandler= (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    return(
        <form>
            <label htmlFor="fullName">Full Name</label> &nbsp;
            <input type="text" id="fullName" placeholder="enter full name" value={formData.fullName} onChange={inputHandler} name="fullName"/>
            <br/><br />
            <label htmlFor="username">User Name</label> &nbsp;
            <input type="text" id="username" placeholder="enter username" value={formData.username} onChange={inputHandler} name="username"/>
            <br /> <br />
            <button>Submit</button>
        </form>
    )
}