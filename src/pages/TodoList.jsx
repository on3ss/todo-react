import TodoCard from "../components/TodoCard"
import { useSelector } from "react-redux"
import categories from "../data/todoCategory"
import { useEffect, useState } from "react"

const VIEW_ALL_FILTER_VALUE = 9999;

export default function TodoList() {
    const todos = useSelector((state) => state.todo.todos)
    const [filter, setFilter] = useState(VIEW_ALL_FILTER_VALUE)
    const [filteredTodos, setFilteredTodos] = useState([])


    useEffect(() => {
        if ((filter == VIEW_ALL_FILTER_VALUE)) {
            setFilteredTodos(todos)
        } else {
            setFilteredTodos(todos.filter((item) => item.categories.includes(filter)))
        }
    }, [filter])

    return (
        <>
            <nav className="py-4 overflow-x-auto">
                <ul className="flex justify-start">
                    <li>
                        <button className={filter == VIEW_ALL_FILTER_VALUE ? "flex gap-1 mx-2 px-4 py-2 align-middle bg-gray-200 rounded" : "flex gap-1 px-4 py-2 align-middle rounded"} onClick={() => setFilter(VIEW_ALL_FILTER_VALUE)}>
                            <span>All</span>
                        </button>
                    </li>
                    {
                        categories.map((category, index) => {
                            return (
                                <li key={index}>
                                    <button className={filter == index ? "flex gap-1 px-4 py-2 align-middle bg-gray-200 rounded" : "flex gap-1 px-4 py-2 align-middle rounded"} onClick={() => setFilter(index)}>
                                        <div className={"w-6 h-6 rounded-full " + category.color}></div>
                                        <span>{category.label}</span>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="px-4 mt-4">
                <ul>
                    {
                        filteredTodos.length > 0
                            ? filteredTodos.map((todo, key) => {
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