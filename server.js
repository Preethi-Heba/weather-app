const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const app = express();
app.use(cors());

const apiKey = process.env.WEATHER_API_KEY;
console.log("API KEY:", apiKey);

app.get("/weather", async (req, res) => {
    console.log("Weather route hit");
    const city = req.query.city;

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: "City not found" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
console.log(require("fs").existsSync("./.env"));
