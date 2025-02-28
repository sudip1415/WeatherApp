import axios from 'axios';
import React, { useState } from 'react';

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loader, setLoader] = useState(false);
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
    }


    return (
        <>


            <div className='h-[80vh] p-5 flex flex-col justify-center bg-linear-120 from-gray-500 to-gray-900 items-center border-2 border-gray-400 text-white'>
                <h2 className='p-3 m-2 font-bold text-5xl text-gray-300'>Weather</h2>
                <input className='px-3 py-3 w-full rounded-full text-white'
                    type="text"
                    placeholder='Enter city name'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className=' w-32 mt-5 px-3 py-2 bg-indigo-500 rounded-lg'
                    onClick={fetchWeather}
                >Search</button>
                {loader && <p>Loading..</p>}

                {weather && (
                    <div className="mt-5 p-3 border rounded">
                        <h2 className="text-xl">{weather.name}, {weather.sys.country}</h2>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Weather: {weather.weather[0].description}</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                    </div>
                )}

            </div>

        </>
    )
}

export default Weather;