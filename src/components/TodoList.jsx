import createTodo from "../utils/faker/createTodo"
import TodoCard from "./TodoCard"

const todos = Array.from({ length: 20 }, createTodo)

export default function TodoList() {
    return (
        <div className="mt-4">
            <ul>
                {
                    todos.map((todo, key) => {
                        return (<TodoCard key={key} todo={todo} />)
                    })
                }
            </ul>
        </div>
    )
}