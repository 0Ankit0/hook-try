import React, { useReducer } from "react";
type stateprops ={
    count: number,
    showText?: boolean,
}
type actionprops={
    type: 'INCREMENT'| 'toggleShowText',
}
const reducer = (state:stateprops, action:actionprops) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
      
    default:
      return state;
  }
};
type countprops={
    value:number;
}
type Todoprops ={
    WhatToDo: 'INCREASE'| 'DECREASE' | 'RESET',
}
const counter=(count:countprops,action:Todoprops)=>{
    switch(action.WhatToDo){
        case 'INCREASE':
            return{value : count.value+1}
        case 'DECREASE':
            return{value : count.value-1}
        case 'RESET':
            return{value : 0}
        default:
             return count;
    }
}
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  const [count,setcount]= useReducer(counter,{value:0});
  return (
    <div className="m-7">
      <h1>You have clicked the button {state.count} times</h1>
      <button
        onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
        }}
        className="text-white wh px-3 py-3 bg-orange-500 m-3"
        >
        Click Here
      </button>
          {state.showText && <h1>This will toggle on clicking the button</h1>}
      <h1>{count.value}</h1>
        <button onClick={()=>setcount({WhatToDo:'INCREASE'})} className="text-white wh px-3 py-3 bg-blue-500 m-3">Increase</button>
        <button onClick={()=>setcount({WhatToDo:'DECREASE'})}  className="text-white m-3 px-3 py-3 bg-yellow-500">decrease</button>
        <button onClick={()=>setcount({WhatToDo:'RESET'})}  className="text-white m-3 px-3 py-3 bg-red-500">reset</button>

    </div>
  );
};

export default ReducerTutorial;
