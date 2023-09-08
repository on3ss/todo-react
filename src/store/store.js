import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slice/todoSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'todos',
    storage,
}

const persistedTodoStore = persistReducer(persistConfig, todoReducer)

const store = configureStore({
    reducer: {
        todo: persistedTodoStore
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

const persistor = persistStore(store)

export { store, persistor }