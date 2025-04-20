import React, { useState } from 'react';
import messagesData from './messagesData';
import './MessagesPage.css';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(messagesData[0]?.id || null);
  const [messages, setMessages] = useState(() => {
    const initial = {};
    messagesData.forEach(chat => {
      initial[chat.id] = chat.messages;
    });
    return initial;
  });
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim() || selectedChat === null) return;
    const updated = {
      ...messages,
      [selectedChat]: [...(messages[selectedChat] || []), { from: 'me', text: newMessage, time: new Date().toLocaleTimeString() }],
    };
    setMessages(updated);
    setNewMessage('');
  };

  return (
    <div className="messages-container">
      <div className="chat-sidebar">
        {messagesData.map(chat => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat === chat.id ? 'active' : ''}`}
            onClick={() => setSelectedChat(chat.id)}
          >
            <img src={chat.profilePic} alt={chat.username} className="chat-avatar" />
            <div>
              <p className="chat-username">@{chat.username}</p>
              <p className="chat-last">
                {chat.messages[chat.messages.length - 1]?.text || "No messages yet"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-window">
        <div className="chat-messages">
          {(messages[selectedChat] || []).map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.from === 'me' ? 'sent' : 'received'}`}>
              <p>{msg.text}</p>
              <span className="chat-time">{msg.time}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            placeholder="Send a message..."
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
