import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const DEFAULT_FORMAT = (value: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

interface Props {
  value: number;
  format?: (value: number) => string;
}

const AnimatedNumber = ({ value, format = DEFAULT_FORMAT }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(
    () =>
      springValue.onChange((latest: number) => {
        if (ref.current) {
          ref.current.textContent = format(latest);
        }
      }),
    [format, springValue]
  );

  return <span ref={ref}>{format(value)}</span>;
};

export default AnimatedNumber;
