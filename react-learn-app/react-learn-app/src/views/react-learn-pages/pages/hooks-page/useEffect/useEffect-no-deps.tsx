import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

function UseEffectNoDeps() {
    const [toggle, setToggle] = useState<boolean>(true)

    const handleClick = () => [setToggle(!toggle)]

    return (
        <>
            <Button radius="xs" size="xs" variant="filled"  color={toggle ? 'lime' : 'red'} onClick={handleClick}>
                Click me
            </Button>
            {toggle ? <IsToggle /> : <IsNotToggle />}
        </>
    );
}

export default UseEffectNoDeps;

const IsToggle = () => {
    useEffect(() => {
        // Mounted in this block
        console.log('Green Mounted');
    })

    return (
        <>
            <p className="w-[300px] text-lime-700 mt-3 text-sm italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
            </p>
            {console.log('Green Rendered')};
        </>
    )
}

const IsNotToggle = () => {
    useEffect(() => {
        // Mounted is in this block
        console.log('Green is Mounted');
    })

    return (
        <>
            <p className="w-[300px] text-red-500 mt-3 text-sm italic">
                Lacus suspendisse faucibus interdum posuere lorem. Facilisis leo vel fringilla est ullamcorper eget
                nulla facilisi etiam. Imperdiet dui accumsan sit amet nulla facilisi morbi. Maecenas volutpat blandit
                aliquam etiam erat velit scelerisque in dictum. Vulputate mi sit amet mauris commodo.{' '}
            </p>
            {console.log('Red is Rendered')};
        </>
    )
}