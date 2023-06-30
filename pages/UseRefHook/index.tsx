import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<number>(0);

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const increment = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current);
  };

  return (
    <div className="p-20 text-justify">
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick} className="px-2 py-1 bg-slate-400">
        Change Name
      </button>
      <div>
        Unlike useState, the value stored in a useRef object does not trigger a
        re-render when it changes. This makes it suitable for storing mutable
        values that don't affect the component's rendering or need to be
        accessed within event handlers or other imperative code.<br></br>
        <hr className="font-bold" />
        You can view changes in the console but as the page is not being
        re-rendered it sill not be reflected in the page.The value in ref
        remains even after the page rerenders so if you click on useref on the
        navbar the updated value will be shown.
        <h1>Counter: {countRef.current}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default RefTutorial;
