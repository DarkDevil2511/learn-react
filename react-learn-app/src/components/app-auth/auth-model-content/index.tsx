import { Button, Checkbox, TextInput } from "@mantine/core";
import { RiAtLine, RiProhibited2Line } from '@remixicon/react'

interface IAuthModalContent {
    type: 'LOGIN' | 'SIGNUP'
}

function AuthModalContent({ type }: Readonly<IAuthModalContent>) {
    return (
        <div className="w-full h-full p-4 flex flex-col gap-10 !items-start !justify-start">
            <span className="font-semibold text-xl text-[#1A3F55]">{ type }</span>
            <div className="w-full flex flex-col gap-3">
                <TextInput 
                    className="w-full"
                    rightSection = { <RiAtLine size={20} />}
                    label="Your Email"
                    placeholder="Your Email"
                />
                <TextInput 
                    className="w-full"
                    rightSection = { <RiProhibited2Line size={20} />}
                    label="Your Password"
                    placeholder="Your Password"
                    type="password"
                />

            </div>

            <div className="w-full flex justify-between">
                <Checkbox defaultChecked label="Remember Me" />
                <span className="font-bold text-sm">Forgot Password?</span>
            </div>

            <Button fullWidth>{type}</Button>

            <p>
                { type === 'LOGIN' ? (
                    <>
                        Don't have an account? <span className="font-bold">Sign up</span>
                    </>
                ) : (
                    <>
                        Already have an account? <span className="font-bold">Login</span>
                    </>
                )}
            </p>
        </div>
    );
}

export default AuthModalContent;