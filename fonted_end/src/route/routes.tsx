import {
    createBrowserRouter,
} from "react-router-dom";
import "../index.css";
import Square from "../pages/Square/Square.tsx";
import UserHome from "../pages/SelfPage/SelfPage.tsx";
import App from "../pages/App/App.tsx";
import PostDetail from "../pages/PostDetail/PostDetail.tsx";
import {ErrorPage} from "../pages/zError/ErrorPage.tsx";
import PublishArticlePage from "../pages/Publish/Publish.tsx";

export const routesName = {
    home: "/",
    post: "/post/:id",
    user: "/user",
    publish: "/publish"
}


export const router = createBrowserRouter([
    {
        path: routesName.home,
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: routesName.home,
                element: <Square/>,
            },
            {
                path: routesName.post,
                element: <PostDetail/>,
            },
            {
                path: routesName.user,
                element: <UserHome/>,
            },
        ],
    },
    {
        path: routesName.publish,
        element: <PublishArticlePage/>,
    }
]);