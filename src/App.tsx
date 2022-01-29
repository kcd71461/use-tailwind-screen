import React from "react";
import { useMatchScreen } from "./lib";
import useTailwindScreen from "./lib/useTailwindScreen";

function App() {
  const screen = useTailwindScreen();
  const screen1Matched = useMatchScreen("screen1");
  const screen2Matched = useMatchScreen("screen2");
  const screen3Matched = useMatchScreen("screen3");
  return (
    <div className="debug-screens mt-5">
      <h1>current screen: {screen}</h1>
      <h1>screen1 matched: {screen1Matched.toString()}</h1>
      <h1>screen2 matched: {screen2Matched.toString()}</h1>
      <h1>screen3 matched: {screen3Matched.toString()}</h1>
    </div>
  );
}

export default App;
