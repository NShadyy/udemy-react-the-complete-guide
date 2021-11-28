import { useEffect, useState } from "react";

const useCounter = (initialCounterValue, forwards = true) => {
  const [counter, setCounter] = useState(initialCounterValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
