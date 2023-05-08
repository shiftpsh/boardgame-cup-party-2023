import { useEffect, useState } from "react";

interface Props {
  start: Date | number;
}

const ElapsedTime = ({ start }: Props) => {
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

  const secs = Math.floor(elapsed / 1000);

  // mm:ss
  return (
    <>
      {[
        Math.floor(secs / 60)
          .toString()
          .padStart(2, "0"),
        (secs % 60).toString().padStart(2, "0"),
      ].join(":")}
    </>
  );
};

export default ElapsedTime;
