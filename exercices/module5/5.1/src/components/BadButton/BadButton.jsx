import {Context as CounterContext} from "../../contexts/CounterContext";
import {useContext} from "react";
const BadButton = () => {
    const {counterBad, increaseBad} = useContext(CounterContext)
    return(
        <p>Bad : {counterBad} <button onClick={increaseBad}>Increase Bad</button></p>
    )
}

export default BadButton;