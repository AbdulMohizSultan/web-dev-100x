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


// conditional rendering

// import { useState , useEffect } from "react";

// function App() {
//   let [counterVisiable, setCounterVisible] = useState(true); 
    
//     useEffect(function() {
//       setInterval(function() {
//         setCounterVisible(c => !c)
//       }, 5000);
//     }, [])

//   return <div>
//     hi
//    {/* {counterVisiable ?  <Counter></Counter> : null } */}
   
//    {counterVisiable &&  <Counter></Counter>}
//    hello

//   </div>
// }

// function Counter() {
//    const [count, setCount] = useState(0);
   
//   //  console.log("counter");

//    useEffect(function() {
    
//     // setInterval(function() {
//     //    setCount(c => c + 1)
//     // }, 5000);
    
//     // console.log("hi there");

    
//     console.log(" on mount") ;
//     let clock =  setInterval(function () {
//       console.log("from inside interval");
//       setCount(c => c + 1)
//     }, 1000);

//      return function() {
//       // console.log("on unmount");  
//       clearInterval(clock)
//      }
//      }, []);

//     function increaseCount() {
      
//     console.log("unmount");
//       setCount(count + 1)
//     }

//       return <div> 
//      <h1>{count}</h1>
//       <button onClick={increaseCount}>increase Count</button>
//     </div>
 
  
//   }

// export default App



// import { useState , useEffect } from "react";

// function App() {
   
//   const [count, setCount] = useState(0) ;
//   const [count2, setCount2] = useState(0) ;

//   function increase() {
//     setCount(c => c + 1);
//   }

  
//   function decrease() {
//     setCount2(c => c 0    1);
//   }

//   return <div>
//     <Counter count={count} />
//     <button onClick={increase}>Incrrease Count</button>
//     <button onClick={decrease}>Decrrease Count</button>
//   </div>
    

//   }

//   function Counter(props) {
//     useEffect(function(){
//       console.log("mount");

//       return function() {
//         console.log("unmount")
//       }
//     }, []); 

//   useEffect(function() {
//     console.log("count has changed");
//   }, [props.count ])  

//    return <div>
//     Counter {props.count }
//     Counter {props.count2 }

//    </div> 
//   }

// export default App



