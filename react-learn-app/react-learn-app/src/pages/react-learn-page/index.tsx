import PageNavigationHeader from "../../components/page-header";
import ReactLearnPageView from "../../views/react-learn-pages";
import PageLayout from "../../components/layouts/page-layout";
import useReactLearnSidebarMap from "./sidebar-data";

function ReactLearnPage() {
    const sidebarData = useReactLearnSidebarMap()
    return (
        <>
            <PageNavigationHeader />
            <PageLayout sidebarData={sidebarData}>
                <ReactLearnPageView />
            </PageLayout>
        </>
    )
}

export default ReactLearnPage