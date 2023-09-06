import categories from '../data/todoCategory'

export default function NavBar() {
    return (
        <nav className="py-4 overflow-x-auto">
            <ul className="flex justify-start">
                {
                    categories.map((link, index) => {
                        return (
                            <li key={index} className="px-4">
                                <a href="#" className="flex gap-1 align-middle">
                                    <div className={"w-6 h-6 rounded-full " + link.color}></div>
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}