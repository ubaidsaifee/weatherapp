import { useWeather } from "../context/Weather"

// Controlled Component
const Input = () => {

    const weather = useWeather();

    return (
        <input className="form-control"
        placeholder="Enter city" 
        type="text" 
        value={weather.searchCity} 
        onChange={(e) => weather.setSearchCity(e.target.value)} />
    )
}

export default Input