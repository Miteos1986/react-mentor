import { useState } from "react";

const CounterComponentWithState = () => {
    const [counter, setCounter] = useState(0);
  
    const handleIncrement = () => {
      setCounter(counter + 1);
      console.log('counter +', counter);
    };
  
    return (
      <>
        <button onClick={handleIncrement}>Increment</button>
        <p>{counter}</p>
      </>
    );
  };
  
 
  export default CounterComponentWithState