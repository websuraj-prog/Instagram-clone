import './LeftSide.css';
import React from 'react';
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
    return (
        <div className="leftSidePart">
            <div className="logoPart">
                <img className="logoImg" src={instagramLogo} alt="Instagram" />
            </div>
            <div className="navLinkPart">
                <div className="navlink">
                    <HomeFilledIcon sx={{ fontSize: 30, margin: '0 13px 0 0'  }} /> 
                    <div className="navname">Home</div>
                </div>
                <div className="navlink">
                    <SearchIcon sx={{ fontSize: 32, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Search</div>
                </div>
                <div className="navlink">
                    <ExploreOutlinedIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Explore</div>
                </div>
                <div className="navlink">
                    <VideoLibraryIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Reels</div>
                </div>
                <div className="navlink">
                    <img className="MassegesIcon" src={MassegesIcon} alt="Masseges" /> 
                    <div className="navName">Messages</div>
                </div>
                <div className="navlink">
                    <FavoriteBorderIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Notifications</div>
                </div>
                <div className="navlink">
                    <AddBoxOutlinedIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">Create</div>
                </div>
                <div className="navlink">
                <img className="ProfileIcon" src={ProfileIcone} alt="Profile" /> 
                    <div className="navName">Profile</div>
                </div>
                <div className="navlink">
                    <PhotoFilterIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">AI Studio</div>
                </div>
                <div className="navlink">
                <img className="ThreadsIcon" src={ThreadsIcon} alt="Threads" /> 
                    <div className="navName">Threads</div>
                </div>
                <div className="navlink">
                    <MenuIcon sx={{ fontSize: 28, margin: '0 13px 0 0'  }} /> 
                    <div className="navName">More</div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
       