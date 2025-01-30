import React, { useState, useEffect, lazy, Suspense } from "react";
const ChatApp = lazy(() => import("ChatApp/ChatApp"));

const FoodList = () => {



  return (
    <>
   
      <div className="detail-list-container">
        <Suspense fallback={<p>Loading...</p>}>
        <ChatApp/>
        </Suspense>
      </div>
    </>
  );
};

export default FoodList;
