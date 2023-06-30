import { useEffect, useState } from "react";
import Info from "./InfoHook";

function index() {
  const [count,setcount]=useState(0);
  const [show,setshow] = useState(false);
  const [showcount,setshowcount] = useState(false);
  useEffect(()=>{
   document.title= `clicked ${count} times`
  },[show])
  const toggleshow=()=>{
    setshow(current =>!current);
    setcount(count+1);
  }
  const toggleshowcount=()=>{
    setshowcount(current =>!current);
    
  }
    return (
        <div className="ml-9">
            <h1>Using UseEffect we can run some code every time a page renders.<br></br>
               The heading will only change when you click this button.<br></br>
            <button onClick={toggleshow} className="px-3 py-1 bg-slate-300">Toggle show</button><br></br>
            and not this button<br></br>
            <button onClick={toggleshowcount} className="px-3 py-1 bg-slate-300">Show count</button>
            {showcount && `${count}`
            }
            {show && <Info></Info>
            }
            
            </h1>
        </div>
    );
}

export default index;