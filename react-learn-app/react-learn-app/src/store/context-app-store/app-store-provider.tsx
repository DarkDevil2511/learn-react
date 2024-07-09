import React, {createContext, useContext, useReducer} from "react";
import { initialGlobalState } from "./init-state";
import { globalStateHandler } from "./action-state";

const AppStoreContext = createContext<any>(null)

interface IAppStore {
    children: React.ReactNode
}

const useAppStore = () => {

    const context = useContext(AppStoreContext)
    return context
}

function AppStoreContextProvider({children}: Readonly<IAppStore>) {
    const [state, dispatch] = useReducer(globalStateHandler, initialGlobalState)
    
    return <AppStoreContext.Provider value={{state, dispatch}}>{children}</AppStoreContext.Provider>;
}

export {AppStoreContextProvider, useAppStore};