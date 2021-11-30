import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = function(props){

    const removePost = (e) =>{
        e.preventDefault();

        fetch(`http://localhost:5000/todos/remove/${props.post._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {console.log(res);
            props.remove(props.post);})
            

        
        // 
    }

    return(
        <div className="post" id={props.post._id} >
            <div className="post__content">
                {props.number}. 
                
                {props.post.content}
                
            </div>
            <div className="post__btns">
                <MyButton onClick={removePost} >Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem;