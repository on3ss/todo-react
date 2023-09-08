import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.todos.unshift(action.payload)
            },
            prepare: (todo) => {
                const id = nanoid()
                return {
                    payload: {
                        id,
                        ...todo
                    }
                }
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload.id)
        },
        toggleDone: (state, action) => {
            state.todos = state.todos.map((item) => {
                if (item.id === action.payload.id) {
                    item.isDone = !item.isDone
                }
                return item
            })
        },
    }
})

export const { addTodo, removeTodo, toggleDone } = todoSlice.actions

export default todoSlice.reducer