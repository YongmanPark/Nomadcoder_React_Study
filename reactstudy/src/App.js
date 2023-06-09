import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return ;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo(""); 
  };
  return (
    <div>
      <h1>Todo Practice {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="todo"/>
        <button>Click</button>
      </form>
      <hr/>
      {
        toDos.map((item , i) => <li key={i}>{item}</li>)
      }
    </div>
  );
}

export default App;
