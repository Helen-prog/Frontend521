import { useState, useEffect } from "react";

function Counter(){
    let [cnt, setCnt] = useState(0);

    function increment (){
        setCnt(cnt + 1);
    }
    
    let decrement = () => setCnt(cnt - 1);

    useEffect(() => {
        console.log("Hello from Counter", cnt); 
        return () => console.log("Goodbue Counter");
               
    }, [cnt]);

    return (
        <div>
            <button onClick={() => setCnt(cnt - 1)}>--</button>
            <button onClick={decrement}>-</button>
            <span> {cnt} </span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;