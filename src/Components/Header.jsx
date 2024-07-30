import logo from "../assets/Designer (6).png"

export default function Header() {
    return (
            <header className="bg-slate-800 py-8">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                    <a href="#">
                        <img className="h-[100px] w-[100px]" src={logo} />
                    </a>
                    <button className="btn btn-sm">Ready to work</button>
                    </div>
                </div>
            </header>
    )
}