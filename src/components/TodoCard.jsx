import { useEffect, useState } from "react"
import categories from "../data/todoCategory"
import { useDispatch } from "react-redux"
import { removeTodo, toggleDone } from "../store/slice/todoSlice"

export default function TodoCard({ todo }) {
    const [isDone, setIsDone] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsDone(todo.isDone)
    }, [])

    const toggleIsDone = () => {
        setIsDone(!isDone)
        dispatch(toggleDone({ id: todo.id }))
    }

    return (
        <li>
            <div className="p-4 my-4 bg-yellow-100 rounded-xl">
                <div className="flex items-start justify-between">
                    <div>
                        <h4 className={isDone ? "text-xl text-gray-800 line-clamp-2 line-through" : "text-xl text-gray-800 line-clamp-2"}>{todo.title}</h4>
                        <p className={isDone ? "mt-2 text-gray-600 line-clamp-2 line-through" : "mt-2 text-gray-600 line-clamp-2"}>{todo.description}</p>
                    </div>
                    <button className="w-4 h-4" onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                        <svg className="text-red-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex justify-start gap-2 my-2">
                        {
                            todo.categories.map((category, key) => {
                                const color = categories[parseInt(category)].color
                                return (
                                    <div key={key} className={"w-6 h-6 rounded-full " + color}></div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <input type="checkbox" className="w-4 h-4 text-blue-400 bg-transparent border-2 border-gray-300 rounded focus:ring-blue-300 focus:ring-2" checked={isDone} onChange={toggleIsDone} />
                        <label className="ml-1 text-sm">Done</label>
                    </div>
                </div>
            </div>
        </li>
    )
}