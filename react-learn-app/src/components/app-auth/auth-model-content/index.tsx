import { Button, Checkbox, TextInput, MantineProvider, createTheme } from "@mantine/core";
import { RiAtLine, RiProhibited2Line } from '@remixicon/react'
// import { useState, useCallback } from "react";

interface IAuthModalContent {
    type: 'LOGIN' | 'SIGNUP'
}

const theme = createTheme({
    cursorType: 'pointer',
});

function AuthModalContent({ type }: Readonly<IAuthModalContent>) {
    // const [type, setType] = useState({type:'LOGIN'})
    // const setType = useCallback(() => {
    //     setType(({type}) => {type: 'LOGIN' ? 'SIGNUP' : 'LOGIN'})
    // })

    return (
        <div className="w-full h-full p-4 flex flex-col gap-10 !items-start !justify-start">
            <span className="font-semibold text-xl text-[#1A3F55]">{type}</span>
            <div className="w-full flex flex-col gap-3">
                <TextInput
                    className="w-full"
                    rightSection={<RiAtLine size={20} />}
                    label="Your Email"
                    placeholder="Your Email"
                    required
                />
                <TextInput
                    className="w-full"
                    rightSection={<RiProhibited2Line size={20} />}
                    label="Your Password"
                    placeholder="Your Password"
                    type="password"
                    required
                />

            </div>  

            <div className="w-full flex justify-between">
                <MantineProvider theme={theme}>
                    <Checkbox defaultChecked label="Remember Me" />
                </MantineProvider>
                <span className="font-bold text-sm cursor-pointer">Forgot Password?</span>
            </div>

            <Button fullWidth>{type}</Button>

            <p>
                {type === 'LOGIN' ? (
                    <>
                        Don't have an account? <span className="font-bold cursor-pointer">Sign up</span>
                    </>
                ) : (
                    <>
                        Already have an account? <span className="font-bold cursor-pointer">Login</span>
                    </>
                )}
            </p>
        </div>
    );
}

export default AuthModalContent;