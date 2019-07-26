import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(30);

  useInterval(() => {
    // count down every second 
    if (count > 0) {
      setCount(count - 1);
    }
  }, 1000);

  return <h1 style={{ color: count > 5 ? 'black' : 'red' }} >{count}</h1>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // remember the latest function
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer;