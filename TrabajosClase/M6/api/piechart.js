const tiers = ["IRON", "BRONZE", "SILVER", "GOLD",'PLATINUM', 'DIAMOND', 'MASTER', 'GRANDMASTER', 'CHALLENGER'];
async function drawPieChart() {
    const queue = "RANKED_SOLO_5x5";

    const api_key = "RGAPI-7f81d05a-7177-4683-bfa3-162a29625bdb";
    const divisions = {
      IRON: ["I", "II", "III", "IV"],
      BRONZE: ["I", "II", "III", "IV"],
      SILVER: ["I", "II", "III", "IV"],
      GOLD: ["I", "II", "III", "IV"],
      PLATINUM: ['I', 'II', 'III', 'IV'],
      DIAMOND: ['I', 'II', 'III', 'IV'],
      MASTER: ['I'],
      GRANDMASTER: ['I'],
      CHALLENGER: ['I']
    };

  const data_table = new google.visualization.DataTable();
  data_table.addColumn("string", "Tier");
  data_table.addColumn("number", "Count");

  const tierCounts = {};

  //Hacer el fetch y un for para reccorer las divisiones de los tiers correspondientes
  for (const tier of tiers) {
    for (const division of divisions[tier]) {
      const data = await fetch(`https://euw1.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=1&api_key=${api_key}`);
      const json = await data.json();
      const count = json.length;
      
      // Agrupar las divisiones por tier en un solo valor
      if (tierCounts[tier]) {
        tierCounts[tier] += count;
      } else {
        tierCounts[tier] = count;
      }
    }
  }

  // Agregar cada tier con su cantidad al DataTable
  for (const tier in tierCounts) {
    data_table.addRow([tier, tierCounts[tier]]);
  }

  const options = {
    title: "League of Legends Ranks"
  };

  const chart = new google.visualization.PieChart(document.getElementById("chart"));
  chart.draw(data_table, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPieChart);

const leagueList = document.querySelector('.league-list');

// Recorrer la lista de tiers y crear un elemento <li> para cada uno
for (const tier of tiers) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');

  // Establecer el src y alt de la imagen en función del tier
  img.src = `https://opgg-static.akamaized.net/images/medals/${tier.toLowerCase()}_1.png`;
  img.alt = tier;

  // Establecer el texto del párrafo en función del tier
  p.textContent = tier;

  // Agregar la imagen y el párrafo al elemento <li>
  li.appendChild(img);
  li.appendChild(p);

  // Agregar el elemento <li> a la lista de ligas
  leagueList.appendChild(li);
}

