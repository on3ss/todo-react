import defaultCategories from "../data/todoCategory";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/todoSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    categories: yup.array().min(1).required()
}).required()

export default function TodoForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const onSubmit = (data) => {
        console.log(data)
        // dispatch(addTodo({ ...data, isDone: false }))
        // return navigate('/')
    }

    return (
        <form className="px-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input
                    {...register("title", { required: true, maxLength: 255 })}
                    type="text" id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Title" />
                {
                    errors.title && (
                        <div className="my-2">
                            <p className="text-sm text-red-600">{errors.title.message}</p>
                        </div>
                    )
                }
            </div>
            <div className="mt-4">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea
                    {...register("description", { required: true, maxLength: 255 })}
                    id="description" rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write the description here..."></textarea>
                {
                    errors.description && (
                        <div className="my-2">
                            <p className="text-sm text-red-600">{errors.description.message}</p>
                        </div>
                    )
                }
            </div>

            <div className="mt-4">
                <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                <select
                    {...register('categories', { required: true })}
                    multiple id="categories"
                    className={`bg-gray-50 border ${errors.categories ? "border-red-600" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}>
                    <option disabled>Choose categories</option>
                    {
                        defaultCategories.map((category, key) => {
                            return (
                                <option key={key} value={key}>{category.label}</option>
                            )
                        })
                    }
                </select>
                {
                    errors.categories && (
                        <div className="my-2">
                            <p className="text-sm text-red-600">{errors.categories.message}</p>
                        </div>
                    )
                }
            </div>

            <div className="mt-4">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" type="submit">Save</button>
            </div>
        </form>
    )
}