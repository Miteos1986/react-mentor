// rafce

import { useState } from "react";
import CounterComponentWithState from "../CounterComponent/CounterComponentWithState";
import CounterComponent from "../CounterComponent/CounterComponent"


const CounterCompWithState = () => {
  
    <CounterComponentWithState/>

  const [state, setState] = useState({
    a: 0,
    b: 0,
  });
  const handleIncrementA = () => {
    setState({ ...state, a: state.a + 1 });
  };
  const handleIncrementB = () => {
    setState({ ...state, b: state.b + 1 });
  };
  return (
    <>
      <CounterComponent value={state.a} handleIncrement={handleIncrementA} />
      <CounterComponent value={state.b} handleIncrement={handleIncrementB} />
      <p>Total: {state.a + state.b} </p>
    </>
  );

}

export default CounterCompWithState