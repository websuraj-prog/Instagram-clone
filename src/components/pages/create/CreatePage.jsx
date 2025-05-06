import React, { useState } from 'react';
import './CreatePage.css';

const CreatePage = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (image && caption) {
      console.log("Posted:", { image, caption });
      alert("Post Created Successfully!");
      setImage(null);
      setCaption('');
    }
  };

  return (
    <div className="create-wrapper">
      <div className="create-card">
        <h2>Create New Post</h2>

        <div className="upload-section">
          {image ? (
            <img src={image} alt="Preview" className="preview-img" />
          ) : (
            <label className="upload-placeholder">
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
              Click to upload
            </label>
          )}
        </div>

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="caption-input"
        />

        <button className="post-btn" onClick={handlePost} disabled={!image || !caption}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
