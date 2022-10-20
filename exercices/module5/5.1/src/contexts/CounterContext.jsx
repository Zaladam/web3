import React, {useState} from "react";

const Context = React.createContext(null)


const ProviderWrapper = (props) => {

    const [counterGood, setCounterGood] = useState(0)
    const [counterOk, setCounterOk] = useState(0)
    const [counterBad, setCounterBad] = useState(0)
    const increaseGood = () => {
        setCounterGood(counterGood + 1)
    }
    const increaseOk = () => {
        setCounterOk(counterOk + 1)
    }
    const increaseBad = () => {
        setCounterBad(counterBad + 1)
    }

    const resetAll = () => {
        setCounterBad(0)
        setCounterGood(0)
        setCounterOk(0)
    }
    const exposedValue = {
        counterGood,
        increaseGood,
        counterOk,
        increaseOk,
        counterBad,
        increaseBad,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}
