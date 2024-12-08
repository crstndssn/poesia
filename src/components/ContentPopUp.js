"use client";

import React, { useState } from "react";
import Popup from "./Popup";

const ContentPopUp = ({ triggerText, triggerClass, content }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <span className={triggerClass} onClick={handlePopupToggle}>
        {triggerText}
      </span>
      {isPopupVisible && (
        <Popup
          isVisible={isPopupVisible}
          onClose={handlePopupToggle}
          title="Poema"
          content={content}
        />
      )}
    </>
  );
};

export default ContentPopUp;
