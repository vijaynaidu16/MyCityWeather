Great! Here's your finalized `README.md` file with your name included:

---

```markdown
# 🌦️ CityWeather – React + TypeScript Weather App

CityWeather is a simple weather app built with React, TypeScript, and Tailwind CSS. It fetches real-time weather data from the OpenWeatherMap API based on user input (city name).

---

## 📁 Project Structure

```

src/
├── App.tsx
├── main.tsx
├── components/
│   └── Home.tsx
├── App.css
├── index.css
└── env.d.ts

````

---

## ⚙️ Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/your-username/cityweather.git
cd cityweather
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the root directory:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

> Don’t forget to restart your dev server after adding the `.env` file.

### 4. Run the app

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🌐 API Used

* [OpenWeatherMap](https://openweathermap.org/api)

Sample API call:

```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

---

## 📌 Features

* Search weather by city
* Shows temperature, humidity, wind speed, and weather description
* Handles empty input and 404 city not found error
* Responsive design using Tailwind CSS

---

## 📝 License

MIT © Vijay Pardhu

```

---

Let me know if you want this formatted for GitHub Pages, Vercel deployment, or linked to your portfolio.
```
