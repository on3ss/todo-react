import NavBar from "./components/navbar"

function App() {

  return (
    <>
      <header className="px-4 py-6">
        <div className="flex justify-between align-middle">
          <div className="text-3xl">Todo</div>
          <button className="text-3xl focus:outline-none">+</button>
        </div>
      </header>
      <NavBar />
      <main className="px-4">
        Main
      </main>
    </>
  )
}

export default App
