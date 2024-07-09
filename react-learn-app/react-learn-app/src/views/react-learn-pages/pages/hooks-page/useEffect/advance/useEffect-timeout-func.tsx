import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

function UseEffectTimeOutFunc() {
    const [toggle, setToggle] = useState<boolean>(false)

    const handleClick = () => {
        setToggle(!toggle)
    }
    
    return (
        <div>
            <Button radius="xs" size="xs" variant="filled" color={toggle ? "lime" : "red"} onClick={handleClick}>
                Click Me!
            </Button>
            {toggle && <CountDown />}
        </div>
    );
}

export default UseEffectTimeOutFunc;

function CountDown() {
    const [counter, setCounter] = useState<number>(1000)

    useEffect(() => {
        const counting = setInterval(() => {
            // setCounter(counter - 1) should not use counter - 1 for updating countDown
            setCounter((prev) => prev - 1)
        }, 100)

        return() => {
            clearInterval(counting) // have to clear interval before the component is unmounted
        }
    },[])

    return <div>{counter}</div>
}

