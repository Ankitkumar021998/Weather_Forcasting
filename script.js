const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const city = document.getElementById("climate").value;
  const result = document.getElementById("result");
  const api_key = "340677cb6d7066e64bdaa44b46a6f727";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  fetch(url)
    .then((x) => x.json())
    .then((data) => {
      console.log(data);
      if (data.cod === "404") {
        console.log("No city found");
        result.innerHTML = "❌ No city found";
      } else {
        result.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temp: ${data.main.temp} °C</p>
          <p>🌤️ Weather: ${data.weather[0].description}</p>
          <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
      }
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      result.innerHTML = "⚠️ Something went wrong. Try again.";
    });
});
