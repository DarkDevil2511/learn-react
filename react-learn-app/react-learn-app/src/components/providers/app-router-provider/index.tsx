import React from "react";
import { RouterProvider } from "react-router-dom";
import useAppRouter from "./useAppRouters";

interface Props {
    children?: React.ReactNode
}

function AppRouterProvider({ children }: Readonly<Props>) {
    const router =  useAppRouter()
    return (
        <>
            {children}
            <RouterProvider router={router}/>
        </>
    );
}

export default AppRouterProvider;