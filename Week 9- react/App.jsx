export default function App() {

    function onClickHandler () {
        const currentValue = document.getElementById("btn").innerHTML;
        const currentCounter = currentValue.split("")[1];
        const newCounter = parseInt(currentCounter) + 1 ;
        document.getElementById("btn").innerHTML = "Counter" + newCounter;
    }



    return (
        <div>
           <button onClick={onClickHandler} > Counter 1  </button>
        </div>
    )
}