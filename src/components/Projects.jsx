import "../App.css";

export default function Projects () {
    return (
        <main style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="font-mono text-white pb-4">Projects</h1>
            <div className="grid grid-cols-4 gap-4">
                {/* Tripmates */}
                <div className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">Tripmates</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        An itinerary planner app developed with Android studio, Spring Boot, and Java.
                    </p>
                    <a
                        href="https://www.youtube.com/watch?v=Q8cpGkN5yD8&list=PL6BdlkdKLEB-RhBjBTGRFWf87xXYjf9tq&index=18"
                        target="_blank"
                        className="flex block mb-4 items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Demo</span>
                    </a>
                    <a
                        href="https://github.com/MadHyyper/Tripmates"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
                {/* Taco Truck */}
                <div className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">Taco Truck</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        A group project where we wrote C scripts to embedded hardware 
                        to make an autonomous motor vehicle deliver prop tacos to points
                        on a map.
                    </p>
                    <a
                        href="https://github.com/MadHyyper/Taco-Truck-Project"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
                {/* Real Simple File System */}
                <div className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">Real Simple File System</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        A simple UNIX file system implemented in C.
                    </p>
                    <a
                        href="https://github.com/MadHyyper/Real-Simple-File-System"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
                {/* Portfolio */}
                <div className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">This Website!</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        Portfolio website created with React and JavaScript using tsparticles.
                    </p>
                    <a
                        href="https://github.com/MadHyyper/Portfolio"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
                {/* Memory Game */}
                <div className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">Memory Game</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        A console game written with C using a PS4 controller
                        for input.
                    </p>
                    <a
                        href="https://github.com/MadHyyper/Memory-Game"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
                {/* Color Splash */}
                <div className="flex flex-col items-center px-6 py-3 bg-yellow-200 rounded-xl">
                    <h2 className="font-mono text-black text-4xl pb-2">Color Splash</h2>
                    <p className="font-mono text-black text-xl pb-2">
                        Rudimentary platformer video game developed in Godot with GDScript.
                    </p>
                    <a
                        href="https://github.com/MadHyyper/color-splash"
                        target="_blank"
                        className="flex items-center px-3 py-2 bg-black text-black rounded-xl hover:scale-110 transition-transform">
                            <span className="text-yellow-200 text-2xl">Github</span>
                    </a>
                </div>
            </div>
        </main>
    )
}