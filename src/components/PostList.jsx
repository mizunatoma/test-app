// src/components/PostList.jsx
import React from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}

