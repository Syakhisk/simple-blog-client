import axios from "lib/axios";
import { useEffect, useState } from "react";

const useLandingHooks = () => {
  const o = {}
   // [o.posts, o.setPosts] = useState([]);
   const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("/posts", {page:2});
      setPosts(res.data);
    }

    getPosts();
  }, []);

  // return o
  return {posts}
};

export default useLandingHooks;
