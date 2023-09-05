import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page";
import TodoList from "../pages/TodoList";
import TodoForm from "./form";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <TodoList />
            },
            {
                path: '/form',
                element: <TodoForm />
            },
        ]
    },
])

export default router