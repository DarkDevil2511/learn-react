import { Button } from "@mantine/core";
import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import { useState } from "react";
import AppBlockQuotes from "../../../../../components/block-quotes";

function UseStatePageView() {
    const [counter, setCounter] = useState<number>(1)

    const handleClickIncrease = () => {
        setCounter(counter + 1)
    }

    const handleClickDecrease = () => {
        setCounter(counter - 1)
    }
    return (
        <div className="">
            <div className="flex items-center justify-center gap-2">
                <Button onClick={handleClickDecrease} radius="xs" size="xs" variant="filled">
                    <RiSubtractLine />
                </Button>

                <h2 className="text-lg font-semibold">{counter}</h2>
                <Button onClick={handleClickIncrease} radius="xs" size="xs" variant="filled">
                    <RiAddLine />
                </Button>
            </div>

            <AppBlockQuotes>
                <p># Component has been re-rendered after being setState</p>
                <p># InitialState use for the first value</p>
                <p># SetState is replaced the new value for the State </p>
            </AppBlockQuotes>
        </div>
    );
}

export default UseStatePageView;