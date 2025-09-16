import React from "react";
import { posts } from "./data/posts";
import PostCard from "./components/PostCard";

function App() {
  return (
    <>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "24px 0",
        }}
      >
        Blog
      </h1>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default App;
