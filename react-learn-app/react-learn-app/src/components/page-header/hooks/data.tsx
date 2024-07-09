import { RiHomeHeartLine,RiErrorWarningLine } from "@remixicon/react";
import { AppConfig } from "../../../app-config";

function useNavData() {
    return [
        {
            path: AppConfig.router.root.path,
            icon: <RiHomeHeartLine  />,
            innerText: ''
        },
        {
            path: AppConfig.router.reactLearn.path,
            icon: '',
            innerText: 'React Learn'
        },
        {
            path: AppConfig.router.notFound.path,
            icon: <RiErrorWarningLine />,
            innerText: '404'
        },
    ]
}
export default useNavData;