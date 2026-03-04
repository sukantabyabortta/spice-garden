import { useState } from "react";

function Counter ( {className = ""} ) {
      const [value, setValue] = useState(0);
  
     // Arrow function
      const addCount = () => {
      setValue(prev => (prev < 5 ? prev + 1 : 5));
      };

      // Normal function
      function removeValue() {
      setValue(prev => (prev > 0 ? prev - 1 : 0));
      }

      return (
            <>
            <div className={`${className}`} style={{marginBottom: "150px"}}>
                  <h1 style={{color: "black"}}>Counter {value}</h1>
                  <button onClick={addCount}>Add Value</button>
                  <button onClick={removeValue}>Remove Value</button>
            </div>
            </>
      )
}

export default Counter;