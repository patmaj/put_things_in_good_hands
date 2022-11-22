const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i)
  }
  if (pageNumbers.length > 1) {
      return (
          <div className="foundation__pagination">
              {pageNumbers.map(number => (
                  <button className="button button--small"
                          key={number}
                            onClick={() => paginate(number)}
                  >
                      {number}
                  </button>
              ))}
          </div>
      )
  }
};

export default Pagination;