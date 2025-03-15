import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesRequest } from "../redux/movieSlice";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchMoviesRequest(query));
    }
  };

  return (
    <div className="p-4 text-center">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default MovieSearch;
