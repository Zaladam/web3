import {useState} from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";

const App = ()=> {

    const [counter, setCounter] = useState(0)

    const inscrease = () => setCounter(counter+1);
    const decrease = () => setCounter(counter-1);
    const reset = () => setCounter(0);

    return (
        <div>
            <h1>App Counter</h1>
            <Display counter ={counter}/>
            <Button onClick={inscrease} text={"Increase by one"} />
            <Button onClick={decrease} text={"Decrease by one"} />
            <Button onClick={reset} text={"Back to Zero"} />
        </div>


    )
}
export default App