import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { GoArrowLeft } from "react-icons/go";
import { TbRefresh } from "react-icons/tb";


function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loader, setLoader] = useState(false);
    const [isRotating, setIsRotating] = useState(false);
    const apiKey = "78c57806c7e609d9090fac0d4fbf59bb";

    const fetchWeather = async () => {
        if (!city) return;
        setLoader(true);

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeather(response.data);
        } catch (e) {
            alert("City not found");
        }
        setLoader(false);
    };
    const refreshWeather = () => {
        if (weather) {
            setIsRotating(true);
            fetchWeather();
        }
        setTimeout(() =>
            setIsRotating(false), 300);

    };

    const details = weather ? [
        { label: "Temperature", value: `${weather.main.temp}°C` },
        { label: "Weather", value: weather.weather[0].description },
        { label: "Humidity", value: `${weather.main.humidity}% ` },
        { label: "Wind Speed", value: `${weather.wind.speed}m/s ` },
    ] : [];

    return (
        <>
            <div className='min-h-[80vh] w-full max-w-sm mx-auto p-5 flex flex-col justify-center bg-[url("/src/assets/background_2.jpg")] bg-no-repeat bg-cover bg-center shadow-2xl shadow-zinc-950 items-center rounded-2xl text-white'>

                {/* <button className='p-3 rounded-full text-3xl bg-slate-900 '>
                    <Link to={"/"} className='decoration-0 no-underline hover:no-underline hover:text-inherit'>
                        <GoArrowLeft />
                    </Link>
                </button> */}

                <h2 className='p-3 m-2 font-bold text-5xl text-[#71b870]'>Weather</h2>
                <input className="px-4 py-3 w-full rounded-full shadow-2xl shadow-black text-white bg-gray-800 focus:bg-gray-900 focus:ring-2 focus:ring-teal-800 focus:outline-none transition-all duration-300 placeholder-gray-400 hover:ring-2 hover:ring-gray-500"
                    type="text"
                    placeholder='Enter city name'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className='w-32 sm:w-auto mt-5 px-3 py-2 cursor-pointer bg-cyan-600 rounded-lg'
                    onClick={fetchWeather}
                >Search</button>
                {loader && <p>Loading..</p>}

                {weather && (
                    <div className="w-[100%] mt-5 p-4 flex flex-col flex-wrap gap-1.5 shadow-2xl shadow-black rounded">
                        <h2 className="text-2xl text-cyan-400 text-center">{weather.name}, {weather.sys.country}</h2>
                        <div className='flex flex-col px-2 py-4 rounded-lg text-slate-200'>
                            {details.map((item, index) => (
                                <p key={index} className='flex gap-5 py-3 border-b-2 border-slate-500 justify-between text-sm sm:text-base'>
                                    <span className='font-semibold'>{item.label} : </span><span>{item.value}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                )}
                <button
                    className={`mt-3 px-3 py-2 cursor-pointer text-3xl text-white rounded-lg transition-transform ${isRotating ? "animate-spin" : ""}`}
                    onClick={refreshWeather}
                >
                    <TbRefresh />
                </button>
            </div>
        </>
    )
}

export default Weather;