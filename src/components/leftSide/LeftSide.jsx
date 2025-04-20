import './LeftSide.css';
import React from 'react';
import { useNavigate} from 'react-router-dom';
import instagramLogo from '../../assets/instagramlogo.png';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MassegesIcon from '../../assets/messenger.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ProfileIcone from '../../assets/profile.png';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import ThreadsIcon from '../../assets/threads.png';
import MenuIcon from '@mui/icons-material/Menu';


const LeftSide = () => {
    const navigate = useNavigate();

    // Handle search button click
    const handleSearchClick = () => {
      navigate("/search");
    };

    const handleExploreClick = () => {
        navigate("/explore");
      };

      const handleReelsClick = () => {
        navigate("/reels");
      };
      const handleMassegesClick = () => {
        navigate("/messages");
      };
      const handleNotificationsClick = () => {
        navigate("/notifications");
      };
      const handleCreateClick = () => {
        navigate("/create");
      };
      const handleProfileClick = () => {
        navigate("/profile");
      };
      const handleAIStudioClick = () => {
        navigate("/aiStudio");
      };
      const handleMoreClick = () => {
        navigate("/more");
      };


    return (
        <div className="leftSidePart">
            <div className="logoPart">
                <img className="logoImg" src={instagramLogo} alt="Instagram" />
            </div>
            <div className="navLinkPart">
                <div className="navlink">
                    <HomeFilledIcon sx={{ fontSize: 30, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Home</div>
                </div>
                <div className="navlink hide-on-mobile" onClick={handleSearchClick}>
                    <SearchIcon sx={{ fontSize: 32, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Search</div>
                </div>
                <div className="navlink" onClick={handleExploreClick}>
                    <ExploreOutlinedIcon sx={{ fontSize: 28, margin: '0 13px 0 0' }} /> 
                     <div className="navName">Explore</div>
                        </div>
                <div className="navlink" onClick={handleReelsClick}>
                    <VideoLibraryIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Reels</div>
                </div>
                <div className="navlink" onClick={handleMassegesClick}>
                    <img className="MassegesIcon" src={MassegesIcon} alt="Masseges" /> 
                    <div className="navName">Messages</div>
                </div>
                <div className="navlink" onClick={handleNotificationsClick}>
                    <FavoriteBorderIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Notifications</div>
                </div>
                <div className="navlink" onClick={handleCreateClick}>
                    <AddBoxOutlinedIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Create</div>
                </div>
                <div className="navlink" onClick={handleProfileClick}>
                <img className="ProfileIcon" src={ProfileIcone} alt="Profile" /> 
                    <div className="navName">Profile</div>
                </div>
                <div className="navlink hide-on-mobile" onClick={handleAIStudioClick}>
                    <PhotoFilterIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">AI Studio</div>
                </div>
                <div className="navlink hide-on-mobile">
                <img className="ThreadsIcon" src={ThreadsIcon} alt="Threads" /> 
                    <div className="navName">Threads</div>
                </div>
                <div className="navlink hide-on-mobile" onClick={handleMoreClick}>
                    <MenuIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">More</div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
       