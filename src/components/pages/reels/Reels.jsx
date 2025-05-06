import React, { useEffect, useRef, useState } from "react";
import reelsData from "../reels/ReelsData";
import "./ReelsPage.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ReelsPage = () => {
    const [likes, setLikes] = useState({});
    const [saved, setSaved] = useState({});
    const [showMore, setShowMore] = useState({});
    const [likeAnim, setLikeAnim] = useState({});

    const videosRef = useRef([]);

    const toggleLike = (id) => {
        setLikes(prev => ({ ...prev, [id]: !prev[id] }));
        setLikeAnim(prev => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setLikeAnim(prev => ({ ...prev, [id]: false }));
        }, 500);
    };

    const toggleSave = (id) => {
        setSaved(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleShowMore = (id) => {
        setShowMore(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                entry.isIntersecting ? video.play() : video.pause();
            });
        }, { threshold: 0.7 });

        videosRef.current.forEach(video => video && observer.observe(video));

        return () => {
            videosRef.current.forEach(video => video && observer.unobserve(video));
        };
    }, []);

    return (
        <div className="reels-page">
            {reelsData.map((reel, index) => (
                <div className="reel fade-in" key={reel.id}>
                    <video
                        src={reel.videoUrl}
                        ref={(el) => (videosRef.current[index] = el)}
                        loop
                        className="reel-video"
                        controls
                    />
                    <div className="reel-info">
                        <div className="reel-header">
                            {reel.profilePic && (
                                <img src={reel.profilePic} alt="Profile" className="profile-pic" />
                            )}
                            <p className="username">@{reel.username}</p>
                            <button className="follow-btn">Follow</button>
                        </div>

                        <div className="reel-desc">
                            <p>
                                {showMore[reel.id] ? reel.description : reel.description.slice(0, 50)}
                                {reel.description.length > 50 && (
                                    <button
                                        className="view-more"
                                        onClick={() => toggleShowMore(reel.id)}
                                    >
                                        {showMore[reel.id] ? "View less" : "View more"}
                                    </button>
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="reel-actions">
                        <div onClick={() => toggleLike(reel.id)} className={likeAnim[reel.id] ? 'like-anim' : ''}>
                            {likes[reel.id] ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                            <p>{likes[reel.id] ? reel.likes + 1 : reel.likes}</p>
                        </div>
                        <div>
                            <CommentIcon />
                            <p>{reel.comments || 0}</p>
                        </div>
                        <div><ShareIcon /></div>
                        <div onClick={() => toggleSave(reel.id)}>
                            {saved[reel.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ReelsPage;
