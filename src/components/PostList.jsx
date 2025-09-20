import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostList() {
  return (
  <div>
    {posts.map((post) => (
      <div key={post.id} className="border border-gray-300 m-4 p-4">
        <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div className="flex gap-2">
          {post.categories.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm border border-blue-500 text-blue-600 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/posts/${post.id}`}
        className="text-x1 font-semibold text-gray-800 mt-2 hover:underline"
      >
        {post.title}
      </Link>
      <div
        className="mt-2 text-gray-700 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      </div>
    ))}
  </div>
  );
}