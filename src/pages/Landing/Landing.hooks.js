import axios from "lib/axios";
import { useEffect, useState } from "react";

const useLandingHooks = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("/posts", {
        params: {
          page: page,
          count: count,
        },
      });
      setPosts(res.data);
    }

    getPosts();
  }, [page, count]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return { posts, count, setCount, page, handleNextPage, handlePrevPage };
};

export default useLandingHooks;
