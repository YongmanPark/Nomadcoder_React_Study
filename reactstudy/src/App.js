import Button from "./Button";
import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("effec사용")
  }, []);
  return <h1>HI</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  return (
    <div>
      {
        showing ? <Hello/> : null
      }
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
