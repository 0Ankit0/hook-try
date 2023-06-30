type Props ={
    
    changevalue: (newstate:string)=>void,
}

function ChildComponentState({changevalue}:Props) {
    return (
        <div>
            
            <button onClick={()=>{changevalue("This is from child")}} className="text-white wh px-3 py-3 bg-purple-500 m-3">Child</button>
        </div>
    );
}

export default ChildComponentState;