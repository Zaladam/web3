import Button from "components/Button/Button";
import Display from "components/Display/Display";
import useLocalStorage from "hooks/useLocalStorage";



const App = ()=> {

    const [counter, setCounter] = useLocalStorage("counter",0)
    const changeCount = (delta) => {
        setCounter(counter+delta)
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