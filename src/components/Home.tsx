import { useState } from "react";
import { Button } from "./ui/button";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
  cod: number | string;
  message: string;
  weather: {
    description: string;
    icon: string;
  }[];
}

const Home = () => {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<WeatherData | null>(null);
  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const res: WeatherData = await api.json();
    setData(res);
    console.log(res);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
      return;
    }
    fetchData();
    setCity("");
  };
  const cod = Number(data?.cod);
  const isCityError = cod === 404;

  return (
    <div className="min-h-svh text-white bg-black flex flex-col justify-center items-center">
      {isCityError ? (
        <>
          <h1 className="text-4xl text-red-500 mb-4">404 - City Not Found</h1>
        </>
      ) : data ? (
        <div>
          <h1 className="text-6xl Honk">
            {data.name} - {data.sys.country}
          </h1>
          <ul className="text-2xl">
            <li>
              Temperature:{" "}
              <em className="text-amber-400">{data.main.temp} °C</em>
            </li>
            <li>
              Speed: <em className="text-amber-400">{data.wind.speed}</em>
            </li>
            <li>
              Humidity: <em className="text-amber-400">{data.main.humidity}</em>
            </li>
            <li>
              Weather:{" "}
              <em className="text-amber-400">{data.weather[0].description}</em>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl md:text-6xl Honk font-bold text-center text-white mb-8">
            MyCityWeather 🌤️
          </h1>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="my-24 w-full flex justify-center items-center flex-col"
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="border text-white w-1/6 mb-4 rounded-sm pl-2"
          placeholder="Location name"
        />
        <Button className="text-center w-1/6" type="submit">
          Search Weather
        </Button>
      </form>

      <div className="text-center">
        <h2>
          Made by{" "}
          <a
            href="https://github.com/vijaynaidu16"
            target="_blank"
            className="underline"
          >
            Vijay
          </a>
          ❤️‍🔥
        </h2>
      </div>
    </div>
  );
};

export default Home;
