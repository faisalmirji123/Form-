import React from "react";
import "./style.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Hello World</h1>

      {/* function Example() { */}
      {/* // Declare a new state variable, which we'll call "count" */}
      <div style={{ textAlign: "center" }}>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}
