import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentForm";

export default function Comment(){
    let [comments, setComments] = useState([{
        username: "john_doe",
        remarks: "Great post!",
        rating: 5
    }]);

    let addNewComment = (newComment) => {
        setComments([...comments, newComment]);
        console.log(comments);
    }

    return(
    <>
       <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>Rating: {comment.rating}</span>
            <p>{comment.username}</p>
        </div>
        ))}
       
       </div>
       <hr></hr>
       <CommentForm addNewComment={addNewComment}/>
    </>
    )
}