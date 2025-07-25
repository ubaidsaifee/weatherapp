import { createContext, useContext, useState } from "react";
import { getWeather, getCurrentLocationWeather } from "../api";

const WeatherContext = createContext(null);

// Custom Hook
export const useWeather = () => {
    return useContext(WeatherContext);
}

// Context Provider
export const WeatherProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState();

    const fetchData = async () => {
        const response = await getWeather(searchCity);
        setData(response);
    }

    const fetchCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getCurrentLocationWeather(position.coords.latitude, position.coords.longitude)
                .then((data) => setData(data))
        })
        navigator.geolocation.getCurrentPosition((position) => {
            getCurrentLocationWeather(position.coords.latitude, position.coords.longitude)
                .then((city) => setSearchCity(city.location.name))
        })
    }

    return (
        <WeatherContext.Provider value={{ searchCity, setSearchCity, data, fetchData, fetchCurrentLocationData }}>
            {children}
        </WeatherContext.Provider>
    )
}