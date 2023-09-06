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
                        todos.map((todo, key) => {
                            return (<TodoCard key={key} todo={todo} />)
                        })
                    }
                </ul>
            </div>
        </>
    )
}