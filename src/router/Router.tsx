import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErorrComponentsRuoter";

import ROUTES from "./routesModel";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [

        ]
    },


]);

export default  router;