import React, { useEffect, useState } from 'react';
import './StoryViewer.css';

const StoryViewer = ({ stories, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 50);

    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          if (index < stories.length - 1) {
            setFade(false);
            setTimeout(() => setIndex(i => i + 1), 300);
          } else {
            onClose();
          }
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [index, onClose, stories.length]);

  const nextStory = () => {
    if (index < stories.length - 1) {
      setFade(false);
      setTimeout(() => setIndex(index + 1), 300);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (index > 0) {
      setFade(false);
      setTimeout(() => setIndex(index - 1), 300);
    }
  };

  return (
    <div className="StoryViewerOverlay" onClick={onClose}>
      <div className="StorySliderWrapper" onClick={(e) => e.stopPropagation()}>
        {index > 0 && (
          <div className="StoryPreview left" onClick={prevStory}>
            <img src={stories[index - 1].img} alt="prev" />
          </div>
        )}

        <div className={`StoryMain ${fade ? 'fade-in' : 'fade-out'}`}>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="story-username">{stories[index].name}</div>
          <img className="story-image" src={stories[index].img} alt="Main story" />
          <div className="close-btn" onClick={onClose}>×</div>
        </div>

        {index < stories.length - 1 && (
          <div className="StoryPreview right" onClick={nextStory}>
            <img src={stories[index + 1].img} alt="next" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryViewer;
