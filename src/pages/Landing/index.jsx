import useLandingHooks from "./hooks";
import { Link } from "react-router-dom";

const Landing = () => {
  const { posts } = useLandingHooks();

  return (
    <div className="flex flex-col items-center my-3">
      <div className="my-3">
        <h1 className="text-2xl font-extrabold">Welcome to the Blog</h1>
      </div>

      <div className="container mx-auto flex flex-col space-y-3">
        {posts.results?.map((post) => (
          <Link key={post.id} to={`posts/${post.slug}`}>
            <div
              className="flex border border-gray-500 rounded p-3 
              hover:bg-indigo-900 transition-colors"
            >
              <img
                src={post.thumbnail}
                alt={post.excerpt}
                className="object-cover w-24 rounded"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p>{post.excerpt}</p>
                <p>{post.users.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Landing;
