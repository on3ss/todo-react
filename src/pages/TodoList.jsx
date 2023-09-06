import TodoCard from "../components/TodoCard"
import CategoriesFilter from '../components/NavBar'
import { useSelector } from "react-redux"


export default function TodoList() {

    const todos = useSelector((state) => state.todo.todos)

    return (
        <>
            <CategoriesFilter />
            <div className="mt-4">
                <ul>
                    {
                        todos.length > 0
                            ? todos.map((todo, key) => {
                                return (<TodoCard key={key} todo={todo} />)
                            }) : (
                                <div className="flex justify-center">
                                    <h5>No todos yet!</h5>
                                </div>
                            )
                    }
                </ul>
            </div>
        </>
    )
}