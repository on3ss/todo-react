import { useEffect, useState } from "react"
import categories from "../data/todoCategory"

export default function TodoCard({ todo }) {
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        setIsDone(todo.isDone)
    }, [])

    const toggleIsDone = () => {
        setIsDone(!isDone)
    }

    return (
        <li>
            <div className="p-4 my-4 bg-yellow-100 rounded-xl">
                <h4 className="text-xl text-gray-800 line-clamp-2">{todo.title}</h4>
                <p className="mt-2 text-gray-600 line-clamp-2">{todo.description}</p>

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