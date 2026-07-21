import { useState } from "react"; // state를 사용하려면 해당 import필요 이게 유즈스테이트구나

const Counter= ()=>{
  const [count, setCount]= useState(0);

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{
        setCount(count + 1)
     }}>
      +
     </button>
    </div>
  );
}

export default Counter;