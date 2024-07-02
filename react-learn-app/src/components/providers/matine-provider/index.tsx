import { MantineProvider } from "@mantine/core";
import React from "react";
import { useThemeContext } from "./theme-provider";

interface Props {
    children: React.ReactNode
}

function AppMatineProvider({ children }: Readonly<Props>) {
    const { theme } = useThemeContext()

    return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default AppMatineProvider;