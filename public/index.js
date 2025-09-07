  try {
    const response = await fetch("/api");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const sightings = await response.json();
    renderCards(sightings);
  } catch (err) {
    console.error("Failed to fetch sightings:", err);
    container.innerHTML = `<p class="error-message">Could not load sightings. The ghouls may have tampered with the network. Please try again later.</p>`;
  }

function renderCards(cardsData) {
  const container = document.querySelector(".cards-container")
  let cardsHTML = ""

  cardsData.forEach((card, i) => {
    cardsHTML += `
<article class="sighting-card" aria-labelledby="sighting-title-${i}">
  <p class="card-details">${card.timeStamp}, ${card.location}</p>
  <h3 id="sighting-title-${i}">${card.title}</h3>
  <div class="sighting-text-wrapper">
    <p class="sighting-text">${card.text}</p>
  </div>
  <button class="read-more-btn" aria-expanded="false">Read in full</button>
</article>
  `
  })

  container.innerHTML = cardsHTML
}

// handle card expand/collapse
document.querySelector(".cards-container").addEventListener("click", (e) => {
  if (!e.target.classList.contains("read-more-btn")) return

  const button = e.target
  const sightingCard = button.closest(".sighting-card")
  const isExpanded = sightingCard.classList.toggle("expanded")

  button.setAttribute("aria-expanded", isExpanded ? "true" : "false")
  button.textContent = isExpanded ? "Show less" : "Read in full"
})
