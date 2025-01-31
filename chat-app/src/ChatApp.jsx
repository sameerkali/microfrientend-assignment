import React, { useState, useEffect, useRef } from "react";
import "./ChatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("Sameer");
  const chatBodyRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([
        ...messages,
        {
          text: input,
          sender: user,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    chatBodyRef.current?.scrollTo(0, chatBodyRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with {user === "Sameer" ? "Devender" : "Sameer"}</h2>
        <button onClick={() => setUser(user === "Sameer" ? "Devender" : "Sameer")}>
          Switch to {user === "Sameer" ? "Devender" : "Sameer"}
        </button>
      </div>

      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === user ? "sent" : "received"}`}>
            <span className="sender">{msg.sender}</span>
            <p>{msg.text}</p>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp; 
