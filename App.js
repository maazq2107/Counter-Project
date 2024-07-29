import { useState } from 'react';
import "./App.css";

function App() {

  const [counter, setCounter] = useState(0);

  const AddValue = () => {
    setCounter(counter + 1);
  //  setCounter(prevcounter => prevcounter + 1);
  //  setCounter(prevcounter => prevcounter + 1);
  }

  const DeleteValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    else{
      setCounter(0);
      alert("Lower limit reached!!");
    }
  }

  return (
    <>
    <div className="mainDiv">
      <div className="centerDiv">
        <h1>{counter}</h1>
        <div className="btnDiv">
          <button onClick = {AddValue}>Increase</button>
          <button onClick = {DeleteValue}>Decrease</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;