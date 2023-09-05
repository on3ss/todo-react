import createTodo from "../mock/faker/createTodo"
import TodoCard from "../components/TodoCard"
import CategoriesFilter from '../components/NavBar'

const todos = Array.from({ length: 20 }, createTodo)

export default function TodoList() {
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