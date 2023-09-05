const links = [
    {
        label: 'work',
        color: 'bg-purple-300'
    },
    {
        label: 'study',
        color: 'bg-violet-300'
    },
    {
        label: 'entertainment',
        color: 'bg-red-300'
    },
    {
        label: 'family',
        color: 'bg-green-300'
    },
];

export default function NavBar() {
    return (
        <nav className="py-4 overflow-x-auto">
            <ul className="flex justify-start">
                {
                    links.map((link, index) => {
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