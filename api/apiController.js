import * as dotenv from "dotenv";
dotenv.config();

const APIKEY = process.env.API_KEY;

const apiController = async (req, res) => {
  const {
    body: { lat, lon },
  } = req;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  const data = await fetch(url).then((response) => response.json());
  res.send(data);
};

export default apiController;
