import React from 'react';
import EmailForm from '../more/email/EmailForm';
import './MorePage.css';
import {
  Settings, HelpOutline, Info, Archive,
  Bookmark, Favorite, Group, QrCode2, Logout
} from '@mui/icons-material';

const MorePage = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="more-container">
      <h2>More Options</h2>

      <div className="section">
        <div className="option"><Archive /> Archive</div>
        <div className="option"><Bookmark /> Saved</div>
        <div className="option"><Group /> Close Friends</div>
        <div className="option"><Favorite /> Favorites</div>
      </div>

      <div className="section">
        <div className="option"><QrCode2 /> QR Code</div>
        <div className="option"><Settings /> Settings</div>
        <div className="option help-option">
          <HelpOutline /> Help
          <div className="EmailInfo">
            <EmailForm />
          </div>
        </div>
        <div className="option"><Info /> About</div>
      </div>

      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          <Logout style={{ marginRight: '8px' }} /> Logout
        </button>
      </div>
    </div>
  );
};

export default MorePage;
