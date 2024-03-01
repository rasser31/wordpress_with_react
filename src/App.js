import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
 
// Define a React functional component named App
function App() {
  // Initialize state 'posts' with an empty array. This state will hold the fetched posts.
  const [posts, setPosts] = useState([])
 
  // useEffect hook to fetch posts from the WordPress REST API when the component mounts
  useEffect(()=>{
      // Use axios to make a GET request to the WordPress REST API for posts
      axios.get('http://localhost:8000/wp-json/wp/v2/posts?_embed')
      .then((res)=>setPosts(res.data)) // On success, update the 'posts' state with the fetched data
  },[]) // The empty dependency array means this effect runs only once after the initial render
 
  // Map each post in the 'posts' state to an <li> element with its content
  // const postsJsx = posts.map((post)=>(
  //     // Set the inner HTML of the <li> to the post's content. Note: This can be a security risk (XSS)
  //     <li key={post.id} dangerouslySetInnerHTML={{__html:post.content.rendered}}></li> 

  // ))
 
  // Render the list of posts inside a <ul> element
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </div>
      ))}
    </div>
  );

}
 
export default App;