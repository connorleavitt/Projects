// import "./style.css";
import { getWeather } from "./weather";

getWeather(
  37.7633,
  -122.4129,
  Intl.DateTimeFormat().resolvedOptions().timeZone
).then((data) => {
  console.log(data);
});
