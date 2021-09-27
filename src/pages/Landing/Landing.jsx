import useLandingHooks from "./Landing.hooks";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Landing = () => {
  const { posts, page, handleNextPage, handlePrevPage } = useLandingHooks();

  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col items-center my-3">
        <div className="mb-6 flex flex-col items-center max-w-2xl text-center">
          <h1 className="text-2xl font-extrabold">Welcome to the Blog</h1>
          <div className="text-gray-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
          </div>
        </div>

        <div className="container mx-auto flex flex-col space-y-3 max-h-[340px] overflow-y-auto">
          {posts.results?.map((post) => (
            <Link key={post.id} to={`post/${post.slug}`}>
              <div
                className="flex border border-gray-500 rounded p-3 
              hover:bg-indigo-900 transition-colors"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover w-24 rounded"
                />
                <div className="ml-3">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-gray-500">{post.excerpt}</p>
                  <p className="text-gray-500">{post.users.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          page={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default Landing;
