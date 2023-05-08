import useElapsedTime from "@/hooks/useElapsedTime";

interface Props {
  start: Date | number;
}

const ElapsedTime = ({ start }: Props) => {
  const elapsed = useElapsedTime(start);
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
