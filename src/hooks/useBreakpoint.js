import { useState, useEffect } from "react";

export const useBreakpoint = () => {

  const [width, setWidth] = useState(undefined);
  const [breakpoint, setBreakpoint] = useState(undefined);

  useEffect(() => {

    function handleBreakpoint() {
      let size = window.innerWidth;
      setWidth(size);
      let breakpointRef = (size <= 480)
        ? "sm"
        : (size >= 1025)
          ? "lg"
          : null;
      setBreakpoint(breakpointRef);
    }

    window.addEventListener("resize", handleBreakpoint);
    handleBreakpoint();
    return () => window.removeEventListener("resize", handleBreakpoint)
  }, [])


  return {
    width,
    breakpoint
  };
}