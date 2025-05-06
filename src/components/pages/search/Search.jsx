import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";

const ACCESS_KEY = "3SP3szPeopEzWlTRE28knFyZDffWaV_2DaQvsGHfCZ8";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    setResults(data.results);
    setLoading(false);
  };

  return (
    <>
      <div className="search-container">
        <div className="close-search" onClick={() => navigate(-1)}>
          ✖
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search photos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="search-results">
            {results.map((photo) => (
              <div className="result-card" key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
                <div className="user-info">
                  <img src={photo.user.profile_image.medium} alt="User" />
                  <div>
                    <p className="username">{photo.user.username}</p>
                    <p className="name">{photo.user.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="blur-backdrop" onClick={() => navigate(-1)} />
    </>
  );
};

export default SearchPage;
