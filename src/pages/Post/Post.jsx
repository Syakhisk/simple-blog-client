import React, { useState } from "react";
import { Loading } from "components/Loading";
import PlaneIcon from "components/Loading/PlaneIcon";

import PostLayout from "./Post.layout";
import { useFetchSinglePost } from "./Post.hooks";

export const Post = (props) => {
  const post = useFetchSinglePost(props);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  const handleThumbnail = (e) => {
    setThumbnailLoaded(true);
  };

  const formatDate = (datetz) => {
    return new Date(datetz).toLocaleDateString(
      {},
      { day: "numeric", month: "long", year: "numeric" }
    );
  };

  if (!post)
    return (
      <div className="w-screen h-screen grid place-items-center animate-pulse">
        Loading...
      </div>
    );

  if (post.notFound)
    return (
      <div className="w-screen h-screen grid place-items-center animate-pulse">
        Post did not exist
      </div>
    );

  return (
    <PostLayout>
      {!thumbnailLoaded && (
        <div className="h-96 -mx-32 rounded-xl border grid place-items-center max-w-sm">
          <PlaneIcon />
        </div>
      )}
      <img
        style={{ display: thumbnailLoaded ? "block" : "none" }}
        src={post.thumbnail}
        alt={post.title}
        onLoad={handleThumbnail}
        className="object-contain h-96 -mx-32 rounded-xl border"
      />
      <div className="my-3 flex flex-col space-y-1">
        <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-500">Written by {post.users.name}</p>
          <p className="text-gray-500">{formatDate(post.created_at)}</p>
      </div>

      <div className="max-w-2xl text-justify mt-6">{post.content}</div>
    </PostLayout>
  );
};
