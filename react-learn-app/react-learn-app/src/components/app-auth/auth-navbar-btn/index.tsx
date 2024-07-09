import { Button } from "@mantine/core";
import { useAppModal } from "../../app-model/store/useAppModel";
import AuthModalContent from "../auth-model-content";
import ThemeSwitch from "../../theme-switch";


function AuthNavbarButtons() {
    const { open, setModalContent, setModalSize } = useAppModal((state) => ({
        open: state.open,
        setModalContent: state.setModalContent,
        close: state.close,
        setModalSize: state.setModalSize,

    }))

    const handleLoginClick = () => {
        setModalSize('sm')
        setModalContent(<AuthModalContent type="LOGIN"/>)
        open()
    }
    const handleSignupClick = () => {
		setModalSize('sm')
		setModalContent(<AuthModalContent type="SIGNUP" />)
		open()
    }

    return (
        <>
        <Button variant="filled" size="xs" onClick={handleLoginClick}>
            Login 
        </Button>
        <Button variant="filled" size="xs" onClick={handleSignupClick}>
            Sign up
        </Button>
        <ThemeSwitch />
        </>
    )
}
export default AuthNavbarButtons