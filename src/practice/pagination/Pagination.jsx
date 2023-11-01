import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
// import Loading from "./Loading";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoading , setIsLoading ] = useState(true);

  useEffect(() => {
   fetchPosts();
  }, [currentPage, limit]);

  const fetchPosts = () => {
    // const limit = 10;
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .finally(() => {
       setTimeout(() => {
          setLoading(false);
         }, 1000);
      });
    }

    updatePagination();
    // axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`)
    // .then(res => setPosts(res.headers["x-total-count"]))
  };

  const updatePagination = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const totalPages = Math.ceil(data.length / 10);
        setTotalPages(totalPages);
      })
      .finally(setLoading(false));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageSelectChange = (event) => {
    const selectedPage = parseInt(event.target.value, 10);
    setCurrentPage(selectedPage);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div>      
      <h1>Posts {loading && <Loading/>}</h1>
      <div id="posts">
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.id}</h3>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div id="pagination">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Previous
        </button>
        <select value={currentPage} onChange={handlePageSelectChange}>
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          Next
        </button>

        <h3>total records per page</h3>

        <select value={limit} onChange={handleLimitChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
}

export default PostList;
