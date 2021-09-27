import { Link } from "react-router-dom";

const PostLayout = ({ children }) => {
  return (
    <>
      <Link to="/">
        <div className="container mx-auto my-6 flex space-x-1 text-gray-500 font-bold text-sm items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
          <p>back to home</p>
        </div>
      </Link>
      <div className="container mx-auto flex flex-col items-center my-6">
        {children}
      </div>
    </>
  );
};

export default PostLayout;
