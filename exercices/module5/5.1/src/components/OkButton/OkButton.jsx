import {useContext} from "react";
import {Context as CounterContext} from "../../contexts/CounterContext";

const OkButton = () => {
    const {counterOk, increaseOk} = useContext(CounterContext)
    return(
        <p>Ok : {counterOk} <button onClick={increaseOk}>Increase Ok</button></p>
    )
}

export default OkButton;