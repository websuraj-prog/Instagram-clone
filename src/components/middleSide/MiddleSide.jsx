import React, { useRef, useState, useEffect } from 'react';
import './MiddleSide.css';
import StoryViewer from '../middleSide/story/StoryViewer';
import Post from '../post/Post';
import viratStory from '../../assets/virat-story.png';
import SrkStory from '../../assets/srk-story.png';
import harshStory from '../../assets/harsh-story.png';
import GurnazarStory from '../../assets/gurnazar-story.png';
import ScoutStory from '../../assets/scout-story.png';
import TamannaStory from '../../assets/tamanna-story.png';
import AntaryamiStory from '../../assets/antaryami-story.png';
import DipanshuStory from '../../assets/dipanshu-story.png';
import devaStory from '../../assets/dev-story.png';
import PrettyStory from '../../assets/pretty-story.png';
import PayalStory from '../../assets/payal-story.png';

const MiddleSide = () => {
  const stories = [
    { img: viratStory, name: 'Virat...' },
    { img: SrkStory, name: 'iamsrk...' },
    { img: harshStory, name: '_harsh_01...' },
    { img: GurnazarStory, name: 'gurnazar_c...' },
    { img: ScoutStory, name: '_scoutop...' },
    { img: TamannaStory, name: 'tamanna...' },
    { img: AntaryamiStory, name: 'antaryamirb...' },
    { img: DipanshuStory, name: 'dipanshu...' },
    { img: devaStory, name: 'deva23...' },
    { img: PrettyStory, name: 'realpz...' },
    { img: PayalStory, name: 'payalga...' }
  ];

  const storyBlockRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  // Story Viewer
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Function to open viewer
const handleStoryClick = (index) => {
  setActiveStoryIndex(index);
  setIsViewerOpen(true);
};


  useEffect(() => {
    const handleScroll = () => {
      if (storyBlockRef.current) {
        setShowLeftArrow(storyBlockRef.current.scrollLeft > 0);
      }
    };

    const currentRef = storyBlockRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => {
        currentRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (storyBlockRef.current) {
      storyBlockRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (storyBlockRef.current) {
      storyBlockRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
  <div className="MiddleHomeSide">
    {/* 👇 Add StoryViewer here */}
    {isViewerOpen && (
      <StoryViewer
        stories={stories}
        currentIndex={activeStoryIndex}
        onClose={() => setIsViewerOpen(false)}
      />
    )}

    <div className="StoryBlock-container">
      {showLeftArrow && (
        <div className="scroll-arrow left" onClick={scrollLeft}>
          {'<'}
        </div>
      )}

      <div className="StoryBlock" ref={storyBlockRef}>
        {stories.map((story, index) => (
          <div
            className="StoryParticular"
            key={index}
            onClick={() => handleStoryClick(index)}
          >
            <div className="StoryImage">
              <img className="statusImg" src={story.img} alt="Story" />
            </div>
            <div className="StoryName">{story.name}</div>
          </div>
        ))}
      </div>

      <div className="scroll-arrow right" onClick={scrollRight}>
        {'>'}
      </div>
    </div>

    <div className="PostBlockContainer">
      <Post />
    </div>
  </div>
);
};

export default MiddleSide;
