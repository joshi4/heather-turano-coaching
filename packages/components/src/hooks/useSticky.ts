import { useState, RefObject, useEffect } from "react";

export function useSticky<RefType extends HTMLElement>({
  offset = 0,
  ref = null
}: {
  offset?: number;
  ref: RefObject<RefType> | null;
}): boolean {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const top = 0 + offset;
        const stick = ref.current.getBoundingClientRect().top <= top;
        setSticky(stick);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [offset, ref]);

  return isSticky;
}
