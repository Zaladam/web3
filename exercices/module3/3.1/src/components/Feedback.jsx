import Button from "./Button/Button";
import Statistics from "./Statistics/Statistics";
import {useState} from "react";

const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = ()=>{
        setGood(good+1)
    }
    const handleNeutral = ()=>{
        setNeutral(neutral+1)
    }
    const handleBad = ()=>{
        setBad(bad+1)
    }
    return(
      <div>
          <h1>Give Feedback</h1>

          <Button handle={handleGood} text={"Good"}/>
          <Button handle={handleNeutral} text={"Neutral"}/>
          <Button handle={handleBad} text={"Bad"}/>

          <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
}

export default Feedback