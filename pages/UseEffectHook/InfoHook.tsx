
function Info() {
  
    return (
        <pre className="mx-9"> 
    {`             

1. No dependency passed:
useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
`}
</pre>
    );

}

export default Info;