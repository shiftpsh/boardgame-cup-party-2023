import { useGranularEffect } from "@/hooks/useGranularEffect";
import { animate, useMotionValue } from "framer-motion";
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
  // const springValue = useSpring(motionValue);

  useGranularEffect(
    () => {
      animate(motionValue, value, {
        duration: 0.5,
        ease: "easeOut",
      });
    },
    [value],
    [motionValue]
  );

  useEffect(
    () =>
      motionValue.onChange((latest: number) => {
        if (ref.current) {
          ref.current.textContent = format(latest);
        }
      }),
    [format, motionValue]
  );

  return <span ref={ref}>{format(value)}</span>;
};

export default AnimatedNumber;
