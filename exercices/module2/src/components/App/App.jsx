import Button from "components/Button/Button";
import Display from "components/Display/Display";
import {useState} from "react";



const App = ()=> {

    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")))
    const changeCount = (delta) => {
        let value = counter + delta
        setCounter(value)
        localStorage.setItem("counter", JSON.stringify(value))
    }

    return (
        <div>
            <h1>App Counter</h1>
            <Display counter ={counter}/>
            <Button change={changeCount} text={"Increase by one"} delta={1} />
            <Button change={changeCount} text={"Decrease by one"} delta={-1} />
            <Button change={changeCount} text={"Back to Zero"} delta={-counter} />
        </div>


    )
}
export default App