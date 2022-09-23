import {useState} from "react";

const useLocalStorage = (key,initialValue) =>{
    const [counter,setCounter] = useState(JSON.parse(localStorage.getItem(key)) ?? initialValue)
    let value = JSON.parse(localStorage.getItem(key))
    if(value === null){
        value = counter
        localStorage.setItem(key, JSON.stringify(value))
    }
    const setValue = (newValue) =>{
        value = newValue
        setCounter(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return[
        value,
        setValue
    ]

}
export default useLocalStorage;