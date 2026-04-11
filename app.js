const API_KEY = "541ba6bf529504b8b3ab9bfbf8c53337I";

async function loadMatches() {
  const today = new Date().toISOString().split("T")[0];
  const url = `https://v3.football.api-sports.io/fixtures?date=${today}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-apisports-key": API_KEY
    }
  });

  const data = await res.json();
  const matches = data.response;

  const container = document.getElementById("matches");
  container.innerHTML = "";

  matches.forEach(m => {
    const div = document.createElement("div");
    div.className = "match";

    div.innerHTML = `
      <strong>${m.teams.home.name}</strong> vs <strong>${m.teams.away.name}</strong><br>
      Score : ${m.goals.home} - ${m.goals.away}<br>
      Statut : ${m.fixture.status.long}
    `;

    container.appendChild(div);
  });
}

loadMatches();
