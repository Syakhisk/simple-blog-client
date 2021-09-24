import axios from "lib/axios";
import { useEffect, useState } from "react";

const useFetchSinglePost = ({ match: { params } }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => await axios
        .get(`/posts/${params.slug}`)
        .then((res) => setPost(res.data))
        .catch(({ response: res }) => {
          if (res.status === 404) setPost({ notFound: true });
        });

    getPost();
  }, [params.slug]);

  return post;
};

export { useFetchSinglePost };
