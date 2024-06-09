import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length > maxChars) {
    return (
      <div>
        {isExpanded ? children : children.substring(0, maxChars)}....
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default ExpandableText;
