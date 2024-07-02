import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import { AppConfig } from "../../../app-config";
import NotFoundPage from "../../../pages/404";
import GeneralPage from "../../../pages/Home-page";
// import ReactLearnPageView from "../../../views/react-learn-pages";
import HooksPage from "../../../pages/react-learn-page/pages/hooks-page";
import MemoPageView from "../../../views/react-learn-pages/pages/hooks-page/memo";
import UseCallbackPageView from "../../../views/react-learn-pages/pages/hooks-page/useCallback";
import UseContextPageView from "../../../views/react-learn-pages/pages/hooks-page/useContext";
import UseEffectPageView from "../../../views/react-learn-pages/pages/hooks-page/useEffect";
import UseLayoutEffectPageView from "../../../views/react-learn-pages/pages/hooks-page/useLayoutEffect";
import UseImperativeHandlePageView from "../../../views/react-learn-pages/pages/hooks-page/useImperativeHandle";
import UseMemoPageView from "../../../views/react-learn-pages/pages/hooks-page/useMemo";
import UseReducerPageView from "../../../views/react-learn-pages/pages/hooks-page/useReducer";
import UseRefPageView from "../../../views/react-learn-pages/pages/hooks-page/useRef";
import UseStatePageView from "../../../views/react-learn-pages/pages/hooks-page/useState";
import ReactLearnPage from "../../../pages/react-learn-page";


function useAppRouter() {
    const routerObject = createBrowserRouter([
        {
            path: AppConfig.router.root.path,
            element: <App />,
            children: [
                {
                    path: '',
                    element: <GeneralPage />,
                },
                {
                    path: AppConfig.router.reactLearn.path,
                    element: <ReactLearnPage />,
                    children: [
                        {
                            path: AppConfig.router.reactLearn.children.hooks.path,
                            element: <HooksPage />,
                            children: [
                                {
                                    path: '',
                                    element: <UseStatePageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useState.path,
                                    element: <UseStatePageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useEffect.path,
                                    element: <UseEffectPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useLayoutEffect.path,
                                    element: <UseLayoutEffectPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useRef.path,
                                    element: <UseRefPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.Memo.path,
                                    element: <MemoPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useCallBack.path,
                                    element: <UseCallbackPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useMemo.path,
                                    element: <UseMemoPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useReducer.path,
                                    element: <UseReducerPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useContext.path,
                                    element: <UseContextPageView />,
                                },
                                {
                                    path: AppConfig.router.reactLearn.children.hooks.children.useImperativeHandle.path,
                                    element: <UseImperativeHandlePageView />,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
                {
                    path: AppConfig.router.notFound.path,
                    element: <NotFoundPage />,
                },
            ]
        }
    ])
    return routerObject;
}

export default useAppRouter;