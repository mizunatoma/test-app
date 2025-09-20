import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <p className="text-red-600">記事が見つかりません</p>;
  }

  return (
    <article className="max-w-3x1 mx-auto p-6">
      <img
        src="https://placehold.jp/800x400.png"
        alt="{post.title}"
        className="w-full rounded-lg mb-6"
      />

      <div className="flex justify-between items-center mb-6">    
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

      <h1 className="text-3x1 font-bold mb-4">{post.title}</h1>

      <div
        className="prose max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{__html: post.content}}
      />
    </article>
  );
}