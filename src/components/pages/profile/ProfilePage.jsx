import React from "react";
import "./ProfilePage.css";
import profilePic from "/src/assets/profile.png";
import { highlights, posts } from "./ProfileData";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="top-section">
        <img src={profilePic} alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <div className="top-row">
            <h2>alone_rider.___</h2>
            <button>Edit Profile</button>
            <button>View Archive</button>
          </div>
          <div className="stats">
            <span><strong>12</strong> posts</span>
            <span><strong>1,497</strong> followers</span>
            <span><strong>74</strong> following</span>
          </div>
          <div className="bio">
            <strong>Suraj Vishwakarma</strong>
            <p>Happiness never goes out of style 😌</p>
            <p>🚀 Visionary & Innovator</p>
            <p>📚 Learning From Every Step</p>
            <a href="#">Facebook profile + 1 link</a>
          </div>
        </div>
      </div>

      <div className="highlights">
        {highlights.map(h => (
          <div className="highlight" key={h.id}>
            <img src={h.image} alt={h.label} />
            <span>{h.label}</span>
          </div>
        ))}
      </div>

      <div className="tabs">
        <span className="active-tab">POSTS</span>
        <span>SAVED</span>
        <span>TAGGED</span>
      </div>

      <div className="post-grid">
        {posts.map((post, idx) => (
          <img key={idx} src={post} alt={`Post ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
