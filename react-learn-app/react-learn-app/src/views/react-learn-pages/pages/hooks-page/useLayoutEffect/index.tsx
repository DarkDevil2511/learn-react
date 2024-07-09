import { Button } from "@mantine/core";
import { RiAddLine } from "@remixicon/react";
import { useLayoutEffect, useState } from "react";
import AppBlockQuotes from "../../../../../components/block-quotes";
import { Table, TableData } from '@mantine/core'

// Add Table into the Page View
const tableData: TableData = {
	caption: 'Comparision between useEffect and useLayoutEffect',
	head: ['useEffect', 'useLayoutEffect'],
	body: [
	[ '1. Cập nhật state',  '1. Cập nhật state' ],
	[ '2. Cập nhật DOM (mutated)',  '2. Cập nhật DOM (mutated)' ],
	[ '3. Render UI',  '3. Gọi clean up func nếu deps thay đổi (sync)'],
	[ '4. Gọi clean up func nếu deps thay đổi',  '4. Gọi useEffect callback func (sync)' ],
	[ '5. Gọi useEffect callback func',  '5. Render UI' ],
	]
}
function UseLayoutEffectPageView() {
    const [count, setCount] = useState<number>(0)

    // UseEffect(()=>)
    useLayoutEffect( ()=> {
        if (count > 3) {
            setCount(0)
        }
    }, [count])
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <Button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                    radius="xs"
                    size="xs"
                    variant="filled"
                >
                    <RiAddLine />
                </Button>
                <h2 className="text-lg font-semibold">{ count }</h2>
            </div>

            <AppBlockQuotes>
				<Table horizontalSpacing="lg" data={tableData} />
			</AppBlockQuotes>

            {/* <AppBlockQuote>
				<p className="text-red-400">## useEffect</p>
				<p>1. Cập nhật state</p>
				<p>2. Cập nhật DOM (mutated)</p>
				<p>3. Render UI</p>
				<p>4. Gọi clean up func nếu deps thay đổi</p>
				<p>5. Gọi useEffect callback func</p>
			</AppBlockQuote>
			<AppBlockQuote>
				<p className="text-red-400">## useLayoutEffect</p>
				<p>1. Cập nhật state</p>
				<p>2. Cập nhật DOM (mutated)</p>
				<p>3. Gọi clean up func nếu deps thay đổi (sync)</p>
				<p>4. Gọi useEffect callback func (sync)</p>
				<p>5. Render UI</p>
			</AppBlockQuote> */}
        </>
    );
}

export default UseLayoutEffectPageView;