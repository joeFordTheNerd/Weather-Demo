// more logcial weather codes for open-meteo API found at https://weather-sense.leftium.com/wmo-codes
export const weatherMap = {
    0: { description: "Clear", icon: "☀️" },
    1: { description: "Mostly Clear", icon: "🌤️" },
    2: { description: "Partly Cloudy", icon: "⛅" },
    3: { description: "Cloudy", icon: "☁️" },
    45: { description: "Foggy", icon: "🌫️" },
    48: { description: "Icy Fog", icon: "❄️🌫️" },
    51: { description: "Light Drizzle", icon: "🌧️" },
    53: { description: "Drizzle", icon: "🌧️" },
    55: { description: "Heavy Drizzle", icon: "🌧️" },
    61: { description: "Light Rain", icon: "🌦️" },
    63: { description: "Rain", icon: "🌧️" },
    65: { description: "Heavy Rain", icon: "🌧️" },
    71: { description: "Light Snow", icon: "❄️" },
    73: { description: "Moderate Snow", icon: "❄️" },
    75: { description: "Heavy Snow", icon: "❄️" },
    80: { description: "Light Showers", icon: "🌦️" },
    81: { description: "Moderate Showers", icon: "🌦️" },
    82: { description: "Heavy Showers", icon: "🌧️" },
    95: { description: "Thunderstorm", icon: "⛈️" },
    96: { description: "Thunderstorm with Hail", icon: "⛈️" },
    99: { description: "Severe Thunderstorm", icon: "⛈️" }
  };
  
  // Function to get weather details
  export const getWeatherDetails = (code) => {
    return weatherMap[code] || { description: "Unknown", icon: "❓" };
  };