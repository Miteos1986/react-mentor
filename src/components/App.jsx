import { useEffect, useState } from 'react';
// import Timer from './Timer/Timer';
// import Posts from './Posts/Posts';
// import CounterCompWithState from './CounterCompWithState/CounterCompWithState';

const createInitialCounter = (key) => {
  const localCounter = localStorage.getItem(key)
  return localCounter ? JSON.parse(localCounter) : 0
}

function App() {
  // const [isShowTimer, setIsShowTimer] = useState(false)

  const [counter, setCounter] = useState (() => createInitialCounter("counter"));
  const [counter2, setCounter2] = useState (() => createInitialCounter("counter2"))
  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  useEffect(() => {
    localStorage.setItem('counter2', counter2);
   
  }, [counter2]);

  return (
    <>
      {/* {console.log('render')} */}
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
      {/* <button onClick={()=>setIsShowTimer(!isShowTimer)}>{isShowTimer ? "Hide" : "Show"}</button>
  {isShowTimer && <Timer/>} */}
    </>
  );

  // <Posts/>
  // <CounterCompWithState/>
}

export default App;
