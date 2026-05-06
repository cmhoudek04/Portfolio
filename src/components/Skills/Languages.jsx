import "../../App.css";
import { SiC, SiPython, SiJavascript, SiPhp, SiAssemblyscript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Csharp from "../../assets/Csharp.svg";


export default function Languages() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <SiPython className="text-black text-7xl pb-4"></SiPython>
                <p className="font-mono text-black text-4xl">Python</p>
            </div>
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <SiC className="text-black text-7xl pb-4"></SiC>
                <p className="font-mono text-black text-4xl">C</p>
            </div>
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <SiJavascript className="text-black text-7xl pb-4"></SiJavascript>
                <p className="font-mono text-black text-4xl">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <SiPhp className="text-black text-7xl pb-4"></SiPhp>
                <p className="font-mono text-black text-4xl">PHP</p>
            </div>   
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <SiAssemblyscript className="text-black text-7xl pb-4"></SiAssemblyscript>
                <p className="font-mono text-black text-4xl">ARM Assembly</p>
            </div>   
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <img src={Csharp} alt="C#" className="h-20 pb-2" />
                <p className="font-mono text-black text-4xl">C#</p>
            </div> 
            <div className="flex flex-col justify-center items-center px-6 py-3 bg-yellow-200 rounded-xl">
                <FaJava className="text-black text-7xl pb-4"></FaJava>
                <p className="font-mono text-black text-4xl">Java</p>
            </div>    
        </div>
    )
}