import StatisticLine from "../StatisticLine/StatisticLine";

const Statistics = (props) => {
    const good = props.good ;
    const neutral = props.neutral ;
    const bad = props.bad ;
    const all = () => {
      return good+bad+neutral
    }
    const average = () => {
      return 0
    }
    const positive = () => {
      return Math.round((good/(good+neutral+bad)) * 100)/ 100
      +" %"
    }
    if(good === 0 && bad ===0 && neutral ===0){
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return(


        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                <tr>
                    <td>Good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{neutral}</td>

                </tr>
                <tr>
                    <td>Bad</td>
                    <td>{bad}</td>
                </tr>
                <StatisticLine name={"All"} formula={all()}/>
                <StatisticLine name={"Average"} formula={average()}/>
                <StatisticLine name={"Positive"} formula={positive()}/>
                </tbody>
            </table>
        </div>

    )
}

export default Statistics