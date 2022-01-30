import { useEffect, useState } from "react";
import { getCurrentScreen } from ".";

export default function useTailwindScreen() {
  const [screen, setScreen] = useState(getCurrentScreen());
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const onResize = () => {
      const currentScreen = getCurrentScreen();
      if (currentScreen !== screen) setScreen(currentScreen);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [screen]);
  return screen;
}
