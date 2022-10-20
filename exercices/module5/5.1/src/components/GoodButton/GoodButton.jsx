import {Context as CounterContext} from "../../contexts/CounterContext";
import {useContext} from "react";
const GoodButton = () => {
    const {counterGood, increaseGood} = useContext(CounterContext)
    return(
        <p>Good : {counterGood} <button onClick={increaseGood}>Increase Good</button></p>
    )
}

export default GoodButton;