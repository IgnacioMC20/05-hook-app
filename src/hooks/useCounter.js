import { useState } from "react"

export const useCounter = (second = 10) => {

    const [counter, setCounter] = useState(second);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(second);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}
