import {useState} from 'react';

export default function LikeButton() {
    let [liked, setLiked] = useState(false);
    let toggleLike = () =>{
        setLiked(!liked);
    }
    let styles={color:"red"};
    return (
        <div>
        <p onClick={toggleLike}>
            {liked ? <i className="fa-solid fa-heart" style={styles}></i> : <i className="fa-regular fa-heart"></i>}
        </p>
        </div>
    );
}