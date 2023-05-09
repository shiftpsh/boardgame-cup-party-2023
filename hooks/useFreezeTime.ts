import { db } from "@/utils/database";
import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

const defaultFreezeAt = 1683963000000;

const useFreezeTime = () => {
  const [freezeAt, setFreezeAt] = useState<number>(defaultFreezeAt);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, "freeze"), (snapshot) => {
      if (snapshot.exists()) {
        setFreezeAt(snapshot.val() as number);
      }
    });
    return () => unsubscribe();
  }, []);

  const setFreezeTime = async (time: number) => {
    await set(ref(db, "freeze"), time);
  };

  return [freezeAt, setFreezeTime] as const;
};

export default useFreezeTime;
