🌦 Weather App

A Flask-based Weather Application that displays real-time weather information for any city using a weather API.

🚀 Features

🌍 Search weather by city name

🌡 Displays temperature, humidity, and weather condition

🌤 Shows weather icons

⚡ Real-time API data fetching

🎨 Clean and responsive UI

🛠 Built With
. Python
. Flask
. OpenWeather API (or whichever API you used)
. HTML & CSS
. Requests Library

📂 Project Structure
weather_app/
│
├── app.py
├── templates/
│     ├── index.html
│
├── static/
│     ├── style.css
│
└── .env (API key stored securely)

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/weather-app.git
cd weather-app
2️⃣ Create virtual environment (optional)
python3 -m venv venv
source venv/bin/activate
3️⃣ Install dependencies
pip install flask requests python-dotenv
4️⃣ Add your API key
Create a .env file:
API_KEY=your_api_key_here
5️⃣ Run the application
python3 app.py
6️⃣ Open in browser
http://127.0.0.1:5000

🔄 How It Works
1. User enters a city name.
2. App sends request to Weather API.
3. API returns JSON weather data.
4. Flask renders data on the webpage.

🧠 Future Improvements

📅 5-day forecast

📍 Detect user location automatically

🌙 Dark mode toggle

📊 Weather charts

🌡 Unit conversion (°C / °F)
