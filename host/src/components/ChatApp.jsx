import React, { useState, useEffect, lazy, Suspense } from "react";
import '../style.css'
const ChatAppComp = lazy(() => import("ChatApp/ChatApp"));

const ChatApp = () => {



  return (
    <>
   
      <div className="chat-container">
        <Suspense fallback={<p>Loading...</p>}>
        <ChatAppComp/>
        </Suspense>
      </div>
    </>
  );
};

export default ChatApp;
