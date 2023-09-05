export default function TodoCard({ todo }) {
    return (
        <li>
            <div className="p-4 my-4 bg-yellow-100 rounded-xl">
                <h1 className="text-xl text-gray-800 line-clamp-2">{todo.title}</h1>
                <p className="mt-2 text-gray-600 line-clamp-2">{todo.description}</p>
            </div>
        </li>
    )
}