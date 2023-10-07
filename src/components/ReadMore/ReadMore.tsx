"use client";
import React, { useState } from "react";

function ReadMore({ text, maxLength }: { text: string; maxLength: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? (
        <p>{text}</p>
      ) : (
        <p className="cursor-pointer">
          {text.length > maxLength ? text.slice(0, maxLength) + "   ..." : text}
          <button onClick={toggleReadMore} className="italic cursor-pointer">
            More
          </button>
        </p>
      )}
    </div>
  );
}

export default ReadMore;
