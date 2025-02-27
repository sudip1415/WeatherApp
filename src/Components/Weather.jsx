import React, { useState } from 'react'

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loader, setLoader] = useState(false);
    return (
        <>
            <div>Weather</div>
        </>
    )
}

export default Weather