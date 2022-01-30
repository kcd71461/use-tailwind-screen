import React, { useEffect, useState } from "react";
import { matchScreen } from ".";

export default function useMatchScreen(screenName: string) {
  const [matched, setMatched] = useState(matchScreen(screenName));
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const onResize = () => {
      if (matched !== matchScreen(screenName)) {
        setMatched(!matched);
      }
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [matched, screenName]);
  return matched;
}
