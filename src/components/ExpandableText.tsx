import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  if (children.length <= maxChars) return <p>{children}</p>;
  const [isExpanded, setExpanded] = useState(false);

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};
export default ExpandableText;
