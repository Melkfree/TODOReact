import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = function(props){

    return(
        <div className="post">
            <div className="post__content">
                {props.number}. 
                
                {props.post.content}
                
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)} >Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem;