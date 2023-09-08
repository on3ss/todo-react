import { useState } from "react";
import defaultCategories from "../data/todoCategory";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/todoSlice";
import { useNavigate } from "react-router-dom";

export default function TodoForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // TODO: Validate and submit using Form Hooks package
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])

    const handleSelectChange = (e) => {
        const updatedOptions = [...e.target.options].filter(option => option.selected).map(x => parseInt(x.value))
        setCategories(updatedOptions)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo({ title, description, categories, isDone: false }))
        return navigate('/')
    }

    return (
        <form className="px-4 mt-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mt-4">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write the description here..."></textarea>
            </div>

            <div className="mt-4">
                <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                <select multiple id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={categories} onChange={handleSelectChange}>
                    <option disabled>Choose categories</option>
                    {
                        defaultCategories.map((category, key) => {
                            return (
                                <option key={key} value={key}>{category.label}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="mt-4">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Save</button>
            </div>
        </form>
    )
}