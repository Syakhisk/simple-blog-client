const Pagination = ({page, handleNextPage, handlePrevPage}) => {
  return (
    <div className="flex space-x-3 my-3">
      {page > 1 && (
        <button className="text-gray-500" onClick={handlePrevPage}>
          Prev
        </button>
      )}
      <div>{page}</div>
      {page < 10 && (
        <button className="text-gray-500" onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
