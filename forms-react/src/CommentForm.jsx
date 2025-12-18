import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if(!values.username) {
      errors.username = 'Username is required';
    } 
    return errors;
}

export default function CommentForm({addNewComment}){
    // let [formData,setFormData]= useState({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // });

    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // // let inputHandler=(e)=>{
    // //     setFormData({
    // //         ...formData,
    // //         [e.target.id]: e.target.value
    // //     });
    // // }

    // // let handleSubmit = (e)=>{
    // //      console.log(formData);
    // //     addNewComment(formData);
    // //     e.preventDefault();
    // //     setFormData({
    // //         username:"",
    // //         remarks:"",
    // //         rating:5
    // //     });
    // }
    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={formik.handleSubmit}> 
                <label htmlFor="username">Username</label>&nbsp;&nbsp;
                <input type="text" placeholder="username" id="username" value={formik.values.username} onChange={formik.handleChange}/><br /><br />
                {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                <label htmlFor="remarks">Remarks</label>&nbsp;&nbsp;&nbsp;
                <textarea value={formik.values.remarks} id="remarks" onChange={formik.handleChange} placeholder="Add a remark"></textarea><br /><br />
                <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
                <input type="number" id="rating" placeholder="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}