// export default function App() {

import { title } from "process";
import { useState } from "react";

//     function onClickHandler () {
//         const currentValue = document.getElementById("btn").innerHTML;
//         const currentCounter = currentValue.split("")[1];
//         const newCounter = parseInt(currentCounter) + 1 ;
//         document.getElementById("btn").innerHTML = "Counter" + newCounter;
//     }



//     return (
//         <div>
//            <button onClick={onClickHandler} > Counter 1  </button>
//         </div>
//     )
// }


// import {useState} from "react";


// export default function App()   {
//     const [count, setCount] = useState(0);


//     function onClickHandler() {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <button id="btn" onClick={onClickHandler}>
//                 Counter {count}
//             </button>
//         </div>
//     )
// }
 



export default function App() {
    const [todos, setTodos] = useState([
        {
        title: "Go to Gym",
        description: "Hit the regularly",
        done:false,
        },
    ]);


    function addTodo() {
        let newArray = [];
        for(let i = 0; i < todos.length; i++) {
            newArray.push(todos[i]);        
        }
        newArray.push({
            title: document.getElementById("title").value  ,
            description: document.getElementById("description").value,
            done: true,
        });
        setTodos(newArray);
    }

    return (
        <div>
            <input type="text" placeholder="Title"></input>
            <input type="text"  placeholder="description"></input>
            <br />
            <button onClick={addTodo}>Add todo</button>
            <br />
            <Todo  title={'mohiz'} description={"Abdul Mohiz"}   done={false} />
        </div>
    )
}
 

function Todo(props) {
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h1>{props.done}</h1>
    </div>
}