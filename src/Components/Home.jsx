import React from 'react';
import { Link } from 'react-router';

function Home() {
    return (
        <>
            <div className="h-[80vh] flex flex-col items-center justify-center gap-5 p-5 border-2 border-gray-400 bg-linear-120 from-gray-500  to-gray-900  text-white">
                {/* Logo */}
                <img className="w-32" src="/src/assets/logo.jpg" alt="Weather Logo" />

                {/* Title */}
                <h1 className="text-6xl font-bold text-slate-300">Weather</h1>
                <h2 className="text-5xl font-bold text-amber-300">Forecast</h2>

                {/* Button */}
                <Link to={"Weather.jsx"}>
                    <button className="px-5 py-2 text-xl font-semibold bg-amber-500 rounded-md hover:bg-amber-600 transition">
                        Get Started
                    </button>
                </Link>
            </div>

        </>
    )
}

export default Home;