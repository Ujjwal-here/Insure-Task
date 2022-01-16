import React from "react";
import "./Post.css";

const Posts = ({ p }) => {
  console.log(p);
  return (
    <>
      <div class="container">
        {p.map((post) => (
          <div key={post.id} class="card">
            <div class="circle">
              <h2>{post.userId}</h2>
            </div>
            
            <div class="content">
            <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
