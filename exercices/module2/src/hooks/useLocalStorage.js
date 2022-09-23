import {useState} from "react";

const useLocalStorage = (key,initialValue) =>{
    const [counter,setCounter] = useState(JSON.parse(localStorage.getItem(key)) ?? initialValue)


    const setValue = (newValue) =>{
        setCounter(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }
    return[
        counter,
        setValue
    ]

}
export default useLocalStorage;