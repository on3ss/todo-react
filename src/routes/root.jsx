import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root() {
    return (
        <div>
            <header className="px-4 py-6">
                <div className="flex justify-between align-middle">
                    <h1 className="text-3xl">Todo</h1>
                    <Link className="text-3xl focus:outline-none" to="/form">+</Link>
                </div>
            </header>
            <NavBar />
            <main className="px-4">
                <Outlet />
            </main>
        </div>
    )
}