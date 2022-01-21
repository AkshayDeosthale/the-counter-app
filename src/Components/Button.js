import React from "react";

function Button({ buttonTag, color }) {
  return <button style={{ backgroundColor: color }}>{buttonTag}</button>;
}

export default Button;
