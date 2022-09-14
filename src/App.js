import React from "react";
import "./App.css";
import { incNumber, decNumber } from './actions';
import { useSelector, useDispatch } from "react-redux";


function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  console.log(myState)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello REdux</h1>
      <div>
        <a title="Decrement" onClick={()=>dispatch(decNumber())}>
          <span>-</span>
        </a>
        <input type="text" value={myState}/>
        <a title="Increment" onClick={() => dispatch(incNumber(5))}>
          <span>+</span>
        </a>
      </div>
    </div>
  );
}

export default App;
