import React from 'react';
import './MessagesPage.css';

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="chat-list">
      {chats.map(chat => (
        <div key={chat.id} className="chat-item" onClick={() => onSelectChat(chat)}>
          <img src={chat.profilePic} alt={chat.username} className="chat-avatar" />
          <div className="chat-info">
            <p className="chat-username">{chat.username}</p>
            <p className="chat-last">{chat.messages[chat.messages.length - 1]?.text || 'No messages yet'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ChatList;
