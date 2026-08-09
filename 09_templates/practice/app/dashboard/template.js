"use client";

import { useState } from "react";

export default function Template({ children }) {
  const [count, setCount] = useState(0);

  return (
    
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h2>🔄 Dashboard Template</h2>

      <button onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>

      <hr />

      {children}
    </div>
  );
}