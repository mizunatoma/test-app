import React from "react";
import { posts } from "./data/posts";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-300 m-4 p-4">
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">
            {post.title}
          </h2>
          <p className="text-blue-600 text-sm">{post.categories.join(", ")}</p>
          <div
            className="mt-2 text-gray-700 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      ))}
    </>
  );
}

export default App;
