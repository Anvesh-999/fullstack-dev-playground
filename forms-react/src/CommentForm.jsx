import { useState } from "react"

export default function CommentForm({addNewComment}){
    let [formData,setFormData]= useState({
        username:"",
        remarks:"",
        rating:5
    });
    let inputHandler=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    let handleSubmit = (e)=>{
         console.log(formData);
        addNewComment(formData);
        e.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        });
    }
    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="username">Username</label>&nbsp;&nbsp;
                <input type="text" placeholder="username" id="username" value={formData.username} onChange={inputHandler}/><br /><br />
                <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;&nbsp;
                <textarea value={formData.remarks} id="remarks" onChange={inputHandler} placeholder="Add a remark"></textarea><br /><br />
                <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
                <input type="number" id="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={inputHandler}/><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}