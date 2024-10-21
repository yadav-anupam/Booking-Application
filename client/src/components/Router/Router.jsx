import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import IndexPage from "../Pages/IndexPage";
import HelpPage from "../Pages/HelpPage";

const Router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path : "/",
            element: <IndexPage />
        },
        {
            path : "/help",
            element : <HelpPage />
        }
    ]
}]);

export default Router;