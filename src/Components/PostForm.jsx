import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const PostForm = ({create}) => {
    const [post, setPost] = useState({content:'', _id:''})

    const addNewPost = (e)=>{
        e.preventDefault();
        
        
        fetch("http://localhost:5000/todos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...post}),
        })
            .then(res => res.json())
            .then((res) => {
                const newPost = res.post;
                create(newPost);
                setPost({content: '', _id:''});
            })
    }

    return(
        <form >
            <MyInput type="text" placeholder="Post description" value={post.content} onChange={e => setPost({...post, content: e.target.value, _id: post._id})} />
            <MyButton onClick={addNewPost} >Create POST</MyButton>        
        </form>
    )
}



export default PostForm;