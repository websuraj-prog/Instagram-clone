import React from 'react';
import './NotificationsPage.css';
import notificationsData from './notificationsData';

const NotificationsPage = () => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-heading">Notifications</h2>

      {Object.entries(notificationsData).map(([sectionTitle, sectionNotifications]) => (
  <div className="notification-section" key={sectionTitle}>
    <h3 className="notification-section-title">{sectionTitle}</h3>
    {sectionNotifications.map((notif, index) => (
      <div className="notification-item" key={index}>
        <div className="notification-left">
          <img src={notif.profilePic} alt="Profile" className="notification-avatar" />
          <div className="notification-text">
            <span
              className="notification-message"
              dangerouslySetInnerHTML={{ __html: notif.message }}
            />
            <span className="notification-time">{notif.time}</span>
          </div>
        </div>
        {notif.image && (
          <img src={notif.image} alt="Preview" className="notification-preview" />
        )}
        {notif.action === "follow" && (
          <button className="notification-follow-btn">Follow</button>
        )}
      </div>
    ))}
  </div>
))}
    </div>
  );
};

export default NotificationsPage;
