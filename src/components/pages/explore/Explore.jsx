import React, { useEffect, useState } from "react";
import "./ExplorePage.css";

const ACCESS_KEY = "3SP3szPeopEzWlTRE28knFyZDffWaV_2DaQvsGHfCZ8";

const ExplorePage = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(
        `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&per_page=30`
      );
      const data = await res.json();
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  return (
    <div className="explore-container">
      <h2>Explore</h2>
      <div className="explore-grid">
        {photos.map((photo) => (
          <div
            className="explore-card"
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
      </div>

      {selectedPhoto && (
      <div className="modal" onClick={() => setSelectedPhoto(null)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={selectedPhoto.urls.regular} alt={selectedPhoto.alt_description} />
          <p>📸 {selectedPhoto.user.name}</p>
          <button onClick={() => setSelectedPhoto(null)}>Close</button>
        </div>
      </div>
    )}

    </div>
  );
};

export default ExplorePage;
