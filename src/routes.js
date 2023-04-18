import {AUTHORISATION_ROUTE, ERROR_ROUTE, FEEDBACK_ROUTE, HOME_ROUTE} from "./utils/consts";
import Authorisation from "./pages/Authorisation";
import Feedback from "./pages/Feedback";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
export const authRoutes = [
    {
        path: AUTHORISATION_ROUTE,
        Component: Authorisation
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: FEEDBACK_ROUTE,
        Component: Feedback
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    },
]

export const publicRoutes = [
    {
        path: AUTHORISATION_ROUTE,
        Component: Authorisation
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ERROR_ROUTE,
        Component: ErrorPage
    },
]