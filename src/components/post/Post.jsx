import React, { useState } from 'react';
import { FaHeart,FaRegHeart,FaRegComment,FaShare,FaBookmark,FaRegBookmark } from 'react-icons/fa';
import viratPic from '../../assets/virat-story.png';
import HaqSeSingle from '../../assets/haq-se-single-reel.mp4';
import HaqSeSingle2 from '../../assets/haq-se-single-story.png';
import iamsrk from '../../assets/srk-story.png';
import harshpic from '../../assets/harsh-story.png';
import './Post.css';

export default function Post() {
  const defaultPosts = [
    {
      id: 1,
      profilePic: viratPic,
      username: 'virat.kohli',
      postImage: viratPic,
      likes: 120,
      caption: 'Enjoying the game!',
      timeAgo: '2h',
    },
    {
      id: 2,
      profilePic: HaqSeSingle2,
      username: 'HaqSeSingle',
      postImage: HaqSeSingle,
      likes: 450,
      caption: 'Wedding time!',
      timeAgo: '2 Days ago',
    },
    {
      id: 3,
      profilePic: iamsrk,
      username: 'iamsrk',
      postImage: iamsrk,
      likes: 200,
      caption: 'Movie time!',
      timeAgo: '3h',
    },
    {
      id: 4,
      profilePic: harshpic,
      username: '_harsh_01',
      postImage: harshpic,
      likes: 90,
      caption: 'Sunset vibes',
      timeAgo: '1h',
    },
  ];

  const [posts, setPosts] = useState(defaultPosts);
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [postedComments, setPostedComments] = useState({});
  const [likeAnim, setLikeAnim] = useState({});

  const toggleLike = (id) => {
    setLikedPosts((prev) => {
      const isLiked = !prev[id];
      setPosts((posts) =>
        posts.map((post) =>
          post.id === id
            ? { ...post, likes: isLiked ? post.likes + 1 : post.likes - 1 }
            : post
        )
      );
      if (!isLiked) return { ...prev, [id]: isLiked };
      setLikeAnim((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setLikeAnim((prev) => ({ ...prev, [id]: false }));
      }, 500);
      return { ...prev, [id]: isLiked };
    });
  };

  const toggleSave = (id) => {
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCommentChange = (id, value) => {
    setComments((prev) => ({ ...prev, [id]: value }));
  };

  const handlePostComment = (id) => {
    if (!comments[id] || comments[id].trim() === '') return;

    setPostedComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), comments[id]],
    }));

    setComments((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  const isVideo = (url) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  return (
    <>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img className="profile-pic" src={post.profilePic} alt="Profile" />
            <span className="username">{post.username}</span>
          </div>

          {isVideo(post.postImage) ? (
            <video
              className="post-video"
              src={post.postImage}
              controls
              autoPlay
              loop
              playsInline
            />
          ) : (
            <img className="post-image" src={post.postImage} alt="Post" />
          )}

          <div className="post-actions">
            <div className="action-left">
              <span onClick={() => toggleLike(post.id)} className={likeAnim[post.id] ? 'like-anim' : ''}>
                {likedPosts[post.id] ? (
                  <FaHeart className="icon liked" />
                ) : (
                  <FaRegHeart className="icon" />
                )}
              </span>
              <FaRegComment className="icon" />
              <FaShare className="icon" />
            </div>
            <span className="save-icon" onClick={() => toggleSave(post.id)}>
              {savedPosts[post.id] ? (
                <FaBookmark className="icon save" />
              ) : (
                <FaRegBookmark className="icon save" />
              )}
            </span>
          </div>

          <div className="likes">{post.likes} likes</div>
          <div className="caption">
            <strong>{post.username}</strong> {post.caption}
          </div>
          <div className="time">{post.timeAgo}</div>

          {/* Posted Comments */}
          <div className="posted-comments">
            {(postedComments[post.id] || []).map((cmt, idx) => (
              <div key={idx} className="comment">
                <strong>You</strong> {cmt}
              </div>
            ))}
          </div>

          {/* Comment Box */}
          <div className="comment-box">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comments[post.id] || ''}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
            />
            <span
              className={`comment-post-btn ${
                comments[post.id] && comments[post.id].trim() !== '' ? 'active' : ''
              }`}
              onClick={() => handlePostComment(post.id)}
            >
              Post
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
