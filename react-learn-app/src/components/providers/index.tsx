import React from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppStoreContextProvider } from "../../store/context-app-store/app-store-provider";
import AppModal from "../app-model";
import { Toaster } from 'react-hot-toast'
import AppReduxStoreProvider from "./app-redux-store-provider";
import { ThemeProvider } from "./matine-provider/theme-provider";
import AppMatineProvider from "./matine-provider";

interface IProvider {
    children: React.ReactNode
}
const queryClient = new QueryClient()

function AppProvider({ children }: Readonly<IProvider>) {

    return (
        <ThemeProvider>
            <AppMatineProvider>
                <QueryClientProvider client={queryClient}>
                    <AppReduxStoreProvider>
                        <AppStoreContextProvider>{children}</AppStoreContextProvider>
                    </AppReduxStoreProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <AppModal />
                    <Toaster />
                </QueryClientProvider >
            </AppMatineProvider>
        </ThemeProvider>
    );
}

export default AppProvider;