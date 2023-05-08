import { useEffect, useState } from "react";

const useElapsedTime = (start: Date | number) => {
  const [now, setNow] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (start instanceof Date) {
      setElapsed(now - start.getTime());
    } else {
      setElapsed(now - start);
    }
  }, [now, start]);

  return elapsed;
};

export default useElapsedTime;
