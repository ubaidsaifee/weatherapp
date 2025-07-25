const URL = "https://api.weatherapi.com/v1/current.json?key=5df5cbf5bba446dfae9140405251107";

export const getWeather = async (city) => {
    const response = await fetch(`${URL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getCurrentLocationWeather = async (latitude, longitude) => {
    const response = await fetch(`${URL}&q=${latitude},${longitude}&aqi=yes`);
    return await response.json();
}
