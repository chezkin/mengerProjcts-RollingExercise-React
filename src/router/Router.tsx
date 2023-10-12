import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErorrComponentsRuoter";
import ROUTES from "./routesModel";
import { RouterProvider } from "react-router-dom";
import SelectProject from "../components/SelectProject";
import CardProject from "../components/CardProject";

import Project from "../types/ProjectType";
import HomePage from "../pages/HomePage";


import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'


type Props = {
    
}

const RouterTabs = (props: Props) => {
    const projects = useSelector((state: RootState) => state.projects.value);
    const addTOrouter = [{
        path: '',
        element: <SelectProject />,
        errorElement: <ErrorPage />,
    },]

    projects.forEach((project, index) => {
        addTOrouter.push({
            path: `/${project.name.replace(/ /g, '-')}`, // You might want to use a unique identifier for the path
            element: <CardProject project={project} />,
            errorElement: <ErrorPage />,
        });
    });

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            errorElement: <ErrorPage />,
            children:
                addTOrouter
        }]
    );
    return (
        <RouterProvider router={router} />
    )
}

export default RouterTabs

