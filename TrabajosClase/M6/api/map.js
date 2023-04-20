const apiKey = "RGAPI-7f81d05a-7177-4683-bfa3-162a29625bdb";
const summonerNames = [];
const myMap = L.map("myMap").setView([0, 0], 2);
i = 0;

L.tileLayer(`https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png`, {
  maxZoom: 18,
}).addTo(myMap);

fetch(
  `https://euw1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      summonerNames.push(data[i].summonerName);
    }
  })


fetch("https://pinballmap.com/api/v1/regions.json")
  .then((response) => response.json())
  .then((data) => {
    data.regions.forEach((region, index) => {
      const { lat, lon } = region;
      i++;
      L.marker([lat, lon])
        .addTo(myMap)
        .bindPopup(
          `<b>${summonerNames[i]}</b><br>Latitud: ${lat}, Longitud: ${lon}`
        );
    });
  })