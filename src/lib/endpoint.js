export default async function getWeatherData() {
    //https://api.open-meteo.com/v1/forecast?latitude=-5&longitude=120&hourly=temperature_2m
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-5&longitude=120&hourly=temperature_2m')

    if (!response.ok) {
        throw new Error('failed get weather');
    }

    return await response.json()
}