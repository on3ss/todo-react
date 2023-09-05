import NavBar from "./components/NavBar"
import TodoList from "./components/TodoList"

function App() {

  return (
    <div>
      <header className="px-4 py-6">
        <div className="flex justify-between align-middle">
          <div className="text-3xl">Todo</div>
          <button className="text-3xl focus:outline-none">+</button>
        </div>
      </header>
      <NavBar />
      <main className="px-4">
        <TodoList />
      </main>
    </div>
  )
}

export default App
