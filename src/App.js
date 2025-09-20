import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 【ヒント】API連携部のコード例 より
  // APIでpostsを取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log("記事一覧の取得に失敗しました", error);
      } finally {
        setLoading(false);
      }
    };
    fetcher();
  }, []); // ← [] にすることで、最初の1回だけ実行

  if (loading) return <p className="p-6 text-gray-500">読み込み中...</p>;

  return (
    <div>
      <Link to="/" className="tetx-3x1 font-bold my-6 p-6">
        Blog
      </Link>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
