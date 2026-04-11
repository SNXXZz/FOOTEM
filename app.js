async function loadMatches() {
  const container = document.getElementById("matches");

  // Pour l'instant : FAUX MATCHS (on mettra une vraie API après)
  const fakeMatches = [
    { home: "Real Madrid", away: "Barça", score: "2 - 1", status: "Terminé" },
    { home: "PSG", away: "OM", score: "1 - 0", status: "En direct" },
    { home: "Chelsea", away: "Arsenal", score: "0 - 0", status: "20:45" }
  ];

  container.innerHTML = "";

  fakeMatches.forEach(match => {
    const div = document.createElement("div");
    div.className = "match";
    div.innerHTML = `
      <strong>${match.home}</strong> vs <strong>${match.away}</strong><br>
      Score : ${match.score}<br>
      Statut : ${match.status}
    `;
    container.appendChild(div);
  });
}

loadMatches();
