import { Button } from "@mantine/core";
import { useState } from "react";
import ChildComponent from './child'
import AppBlockQuotes from "../../../../../components/block-quotes";
function MemoPageView() {
    const [count1, setCount1] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)

    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <Button
                    onClick={() => {
                        setCount1((prev) => prev + 1)
                    }}
                    radius="xs"
                    size="xs"
                    variant="filled"
                >
                    setCount 1
                </Button>
                <h2 className="text-lg font-semibold">Parent Count 1: {count1}</h2>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3">
                <Button
                    onClick={() => {
                        setCount2((prev) => prev + 1)
                    }}
                    radius="xs"
                    size="xs"
                    variant="filled"
                >
                    setCount 2
                </Button>
                <h2 className="text-lg font-semibold">Parent count 2: {count2}</h2>
            </div>
            <ChildComponent count1={count1}/>
            <AppBlockQuotes>
				<p className="text-red-400">## Memo HOC</p>
				<p>1. is a HOC - Higher Order Component</p>
				<p>2. Memorizing all props of 1 component, avoiding rerender component unnecessary</p>
			</AppBlockQuotes>
        </>
    );
}

export default MemoPageView;