let tempControl = document.querySelector(".tempButtonContainer");
let celcius = document.querySelector(".celcius");
let fahrenheit = document.querySelector(".fahrenheit");

let searchButton = document.querySelector(".searchbar-button");
const userInput = document.querySelector(".searchbar-input");
const cityName = document.querySelector(".city-name");
const overall = document.querySelector(".overall-span");
const description = document.querySelector(".description-span");
const currentTemp = document.querySelector(".currentTemp-span");
const minTemp = document.querySelector(".minTemp-span");
const maxTemp = document.querySelector(".maxTemp-span");
const humidity = document.querySelector(".humidity-span");

searchButton.addEventListener("click", () => {
  searchCity(userInput.value);
});

let locationData;

async function searchCity(location) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5524410c97e472b7a12e68ce4f9c951b`
  );
  locationData = await response.json();
  //   console.log(locationData.main);
  updateCard(locationData);
}

tempControl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (e.target.classList.contains("celcius")) {
      e.target.classList.add("active");
      fahrenheit.classList.remove("active");
      currentTemp.innerHTML = `${convertTemp(locationData.main.temp)}°`;
      minTemp.innerHTML = `${convertTemp(locationData.main.temp_min)}°`;
      maxTemp.innerHTML = `${convertTemp(locationData.main.temp_max)}°`;
    } else if (e.target.classList.contains("fahrenheit")) {
      e.target.classList.add("active");
      celcius.classList.remove("active");
      currentTemp.innerHTML = `${convertTemp(locationData.main.temp)}°`;
      minTemp.innerHTML = `${convertTemp(locationData.main.temp_min)}°`;
      maxTemp.innerHTML = `${convertTemp(locationData.main.temp_max)}°`;
    }
  }
});

function convertTemp(number) {
  if (celcius.classList.contains("active")) {
    let newTemp = number - 273.15;
    return newTemp.toFixed(1);
  } else if (fahrenheit.classList.contains("active")) {
    let newTemp = 1.8 * (number - 273.15) + 32;
    return newTemp.toFixed(1);
  }
}

function updateCard(data) {
  cityName.innerHTML = data.name;
  const overallMsg = data.weather.map((element) => {
    return element.main;
  });
  overall.innerHTML = `"${overallMsg[0]}"`;

  const descriptionMsg = data.weather.map((element) => {
    return element.description;
  });
  description.innerHTML = `${descriptionMsg[0]}`;

  currentTemp.innerHTML = `${convertTemp(data.main.temp)}°`;
  minTemp.innerHTML = `${convertTemp(data.main.temp_min)}°`;
  maxTemp.innerHTML = `${convertTemp(data.main.temp_max)}°`;
  humidity.innerHTML = `${data.main.humidity}%`;
}

/*
http://api.openweathermap.org/data/2.5/weather?
    q=London,uk
    &
    APPID=5524410c97e472b7a12e68ce4f9c951b

*/
