import React, { useState } from "react";

function YourFirstComponent() {
  const [count, setCount] = useState(0);

  console.log("mount");  
  
  function increment() {
    console.log("do increment");  
    setCount((prev) => {
      console.log(prev);  
      return prev + 1
    });
  }
  return (
    <section>
      <button onClick={() => increment()}>+1</button>
      <button
        onClick={() => {
          console.log("a");  
          increment();
          console.log("b");  
          increment();
          console.log("c");  
          increment();
          console.log("d");  
        }}
      >
        +3
      </button>
      <h1>Score: {count}</h1>
    </section>
  );
}

export default YourFirstComponent;
