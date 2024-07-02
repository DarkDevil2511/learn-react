import { Button, Loader } from "@mantine/core";
import { useState, useEffect } from "react";

function UseEffectEmptyDeps() {
    const [reload, setReload] = useState<boolean>(false)

    const handleClick = () => {
        setReload(!reload)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Button radius="xs" size="xs" variant="filled" color={reload ? 'lime' : 'red'} onClick={handleClick}>
                Reload
            </Button>
            {reload && <ChildComponent />}
        </div>
    );
}

export default UseEffectEmptyDeps;

const ChildComponent = () => {
    const [data, setData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleFetchData = () => {
        setIsLoading(true)
        setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then((res) => setData(res))
				.finally(() => {
					setIsLoading(false)
				})
		}, 3000)
        
    }

    useEffect(() => {
        // only called once when the component is MOUNTED
        // avoiding the case that callback setState continuiously make the component has infinity render
        handleFetchData()
    },[])

    if (isLoading) {
        <div className="flex items-center justify-center mt-4">
            <Loader />
        </div>
    }
    
    return (
        <div className="mt-4">
			{data?.map((user: any) => {
				return (
					<div key={user?.id} className="mt-2">
						<div className="w-[500px] text-left"></div>
						{user?.id}. {user?.username}: {user?.email}
					</div>
				)
			})}
		</div>
    )
}