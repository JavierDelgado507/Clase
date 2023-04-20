const apiKey = "RGAPI-7f81d05a-7177-4683-bfa3-162a29625bdb";
let page = 1;

function updateTable() {
  const queue = document.getElementById("queue").value;
  const tier = document.getElementById("tier").value;
  const division = document.getElementById("division").value;

  fetch(`https://euw1.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page}&api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("tableBody");
    var numberPage = document.getElementById("numberPage");
    numberPage.innerHTML = page;
    tableBody.innerHTML = "";
    data.forEach(entry => {
      const summonerName = entry.summonerName;
      const leaguePoints = entry.leaguePoints;
      const wins = entry.wins;
      const losses = entry.losses;
      const hotStreak = entry.hotStreak;
      const tier = entry.tier;
      const tierImage = `https://opgg-static.akamaized.net/images/medals/${tier.toLowerCase()}_1.png`;
      tableBody.innerHTML += `<tr><td>${summonerName}</td><td>${leaguePoints}</td><td>${wins}</td><td>${losses}</td><td>${hotStreak}</td><td><img src="${tierImage}" alt="${tier}" class="imgTier"></td></tr>`;
      numberPage.innerHTML = page;
    });
  });
}


// Cargar tabla automáticamente cada 5 segundos
setInterval(updateTable, 5000);

// Actualizar tabla al pulsar botón de actualizar
document.getElementById("update").addEventListener("click", function() {
  updateTable();
});

// Anterior y Siguiente Página
document.getElementById("previousPage").addEventListener("click", function() {
  if (page > 1) {
    page--;
    updateTable();
  }
});

document.getElementById("nextPage").addEventListener("click", function() {
  page++;
  updateTable();
});
