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
        <p className="text-[10px] sm:text-[12px] md:text-[14px]">{text}</p>
      ) : (
        <>
          {text.length > maxLength ? (
            <p className="text-[10px] sm:text-[12px] md:text-[14px]">
              <span>{text.slice(0, maxLength)}</span>
              <button
                onClick={toggleReadMore}
                className="italic cursor-pointer"
              >
                ...More
              </button>
            </p>
          ) : (
            <p>{text}</p>
          )}
        </>
      )}
    </div>
  );
}

export default ReadMore;
