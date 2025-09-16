import React from "react";

function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "12px", color: "gray" }}>
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div>
          {post.categories.map((category) => (
            <span
              key={category}
              style={{
                fontSize: "12px",
                marginLeft: "8px",
                color: "blue",
                border: "1px solid blue",
                padding: "2px 6px",
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default PostCard;
