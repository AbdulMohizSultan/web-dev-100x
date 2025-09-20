// import { useState } from "react";

// function App() {
//   return <div>
//     <b>
//        hi there
//     </b>
//     <Counter></Counter>
//   </div>
// }

// function Counter() {
//    const [count, setCount] = useState(0);

//    function increaseCount() {
//       setCount(count + 1);
//    }

//    function decreaseCount() {
//     setCount(count -1);
//    }

//    function resetCount() {
//     setCount(0);
//    }

//   return <div>
//     <h1>{count}</h1>
//     <button onClick={increaseCount} >Increase count</button>
//     <button onClick={decreaseCount} >decrease count</button>
//     <button onClick={resetCount} >reset count</button>
//     </div>
//   }  

// export default App



import { useState , useEffect } from "react";

function App() {
  return <div>
    <Counter></Counter>
  </div>
}

function Counter() {
   const [count, setCount] = useState(0);
   
   console.log("counter");

   useEffect(function() {
    setInterval(function() {
      setCount(function(count){
        return count + 1
      })
    }, 1000)
    console.log("montued");
   }, []);


  return <div> 
    <h1>{count}</h1>
   </div>
 }

export default App
