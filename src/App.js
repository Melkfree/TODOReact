import React, { useRef, useState, useEffect} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import PostItem from "./Components/PostItem";
import PostsList from "./Components/PostsList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import './styles/App.css';
import axios from "axios";



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setPosts(result.posts);
        },
      )
  }, [])


  
  const [selectedSort, setSelectedSort] = useState('')
  

  function getSortedPosts(){
    if( selectedSort){
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    } return posts
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=> p._id !== post._id))
  }
    
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <MySelect defaultValue="Sort by" 
        value={selectedSort}
        onChange={sortPosts}
          options={[
            {value: 'date', name: 'By date'},
            {value: 'content', name: 'By description'}
        ]} />
      </div>
        {posts.length ?<PostsList remove={removePost} posts={sortedPosts} title="Post List"/>: <h1 style={{textAlign: 'center', verticalAlign: 'end'}}>Posts not found!</h1> }
    </div>
  );
}

export default App;
