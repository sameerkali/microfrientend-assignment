import React, { useState, useEffect, lazy, Suspense } from "react";
const ChatAppComp = lazy(() => import("ChatApp/ChatApp"));
import '../style.css'

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
