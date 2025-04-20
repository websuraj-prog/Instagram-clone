import React, { useState } from "react";
import "./MessagesPage.css";

const ChatWindow = ({ selectedUser }) => {
  const [messages, setMessages] = useState([
    { from: "me", text: "Hey!" },
    { from: "them", text: "Hi, how are you?" },
    { from: "me", text: "Doing good, you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { from: "me", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-window">
      {selectedUser ? (
        <>
          <div className="chat-header">
            <img src={selectedUser.profilePic} alt="user" />
            <h4>{selectedUser.username}</h4>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.from === "me" ? "sent" : "received"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </>
      ) : (
        <div className="no-user-selected">
          <p>Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
