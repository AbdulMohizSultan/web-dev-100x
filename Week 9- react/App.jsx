// export default function App() {

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


import {useState} from "react";


export default function App()   {
    const [count, setCount] = useState(0);


    function onClickHandler() {
        setCount(count + 1);
    }

    return (
        <div>
            <button id="btn" onClick={onClickHandler}>
                Counter {count}
            </button>
        </div>
    )
}
