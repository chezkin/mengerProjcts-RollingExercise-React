import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErorrComponentsRuoter";
import ROUTES from "./routesModel";
import { RouterProvider } from "react-router-dom";
import SelectProject from "../components/SelectProject";
import CardProject from "../components/CardProject";

import Project from "../types/ProjectType";


type Props = {
    Projects: Project[]
}

const RouterTabs = (props: Props) => {
    // const [pojectRoutes , setPojectRoutes]
    const addTOrouter = [{
        path: '/',
        element: <SelectProject />,
        errorElement: <ErrorPage />,
    },]

    props.Projects.forEach((project, index) => {
        addTOrouter.push({
            path: `/${project.name.replace(/ /g, '-')}`, // You might want to use a unique identifier for the path
            element: <CardProject project={project} />,
            errorElement: <ErrorPage />,
        });
    });

    const router = createBrowserRouter(
        addTOrouter
    );
    return (
        <RouterProvider router={router} />
    )
}

export default RouterTabs

