import { useState } from "react";
import ChildComponentState from "./ChildComponentState";

function Counter() {
    const [count,setcount]=useState(0);
    const [value,setValue] = useState<string>("");

    const Increment =()=>{
        setcount(count +1);
    }
    const Decrement =()=>{
        setcount(count -1);
    }
    const Reset =()=>{
        setcount(0);
    }
    return (
        <>
        <div className="m-7 ">
            1. Changing the state in the same component
        <h1>The count is : {count}</h1>
        <button onClick={Increment} className="text-white wh px-3 py-3 bg-blue-500 m-3">Increase</button>
        <button onClick={Decrement}  className="text-white m-3 px-3 py-3 bg-yellow-500">decrease</button>
        <button onClick={Reset}  className="text-white m-3 px-3 py-3 bg-red-500">reset</button>
        </div>
        <div className="m-7">
            2. You can also change the usestate from the child component
            <br></br>
            {value}
            <br></br>
            <button onClick={()=>{setValue("This is from parent")}} className="text-white wh px-3 py-3 bg-green-500 m-3">Parent</button>
            <ChildComponentState  changevalue={setValue}></ChildComponentState>
        </div>
        </>
    );
}

export default Counter;