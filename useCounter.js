import { useState } from "react"


export const useCounter = (defaultState=10) => {
    
    const [counter, setCounter] = useState(defaultState)

    const increment=()=>setCounter(counter + 1)
    
    const decrement=()=>{
        setCounter(counter - 1)
        
    }
    
    const reset=()=>setCounter(defaultState)
    

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
