import TodoCard from "../components/TodoCard"
import { useSelector } from "react-redux"
import categories from "../data/todoCategory"
import { useEffect, useState } from "react"

const VIEW_ALL_FILTER_VALUE = 9999;

export default function TodoList() {
    const todos = useSelector((state) => state.todo.todos)
    const [filter, setFilter] = useState(VIEW_ALL_FILTER_VALUE)
    const [filteredTodos, setFilteredTodos] = useState([])
    const [hideDone, setHideDone] = useState(false)


    useEffect(() => {
        let filtered = []
        if ((filter == VIEW_ALL_FILTER_VALUE)) {
            filtered = todos
        } else {
            filtered = todos.filter((item) => item.categories.includes(filter))
        }

        if (hideDone) {
            filtered = filtered.filter((item) => !item.isDone)
        }

        setFilteredTodos(filtered)

    }, [filter, hideDone, todos])

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

            <div className="px-4 my-2">
                <div>
                    <input type="checkbox" className="w-4 h-4 text-blue-400 bg-transparent border-2 border-gray-300 rounded focus:ring-blue-300 focus:ring-2" checked={hideDone} onChange={() => setHideDone(!hideDone)} />
                    <label className="ml-1 text-sm">Hide Done</label>
                </div>
            </div>

            <div className="px-4 mt-4">
                <ul>
                    {
                        filteredTodos && filteredTodos.length > 0
                            ? filteredTodos.map((todo, key) => {
                                return (<TodoCard key={todo.id} todo={todo} />)
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