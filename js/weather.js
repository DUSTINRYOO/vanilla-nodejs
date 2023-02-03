const onGeoOk = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const data = await fetch("/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lat, lon }),
  }).then((response) => response.json());
  const cityname = document.querySelector("#weather span:first-child");
  const weather = document.querySelector("#weather span:last-child");
  cityname.innerText = `You are in ${data.name} now.`;
  weather.innerText = `Weather : ${data.weather[0].main}`;
};
function oneGeoError() {
  alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, oneGeoError);
