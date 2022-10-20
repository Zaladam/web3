import {useContext} from "react";
import {Context as CounterContext} from "../../contexts/CounterContext";

const ResetButton = () => {
    const {resetAll} = useContext(CounterContext)
    return (
        <button onClick={resetAll}>Reset Scores</button>
    )
}

export default ResetButton;