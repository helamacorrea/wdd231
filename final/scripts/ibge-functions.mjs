export function displayCities(cities) {
    cards.innerHTML = "";
    cities.forEach(city => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let area = document.createElement('p');
        let pop = document.createElement('p');
        let density = document.createElement('p');
        let button = document.createElement('button');

        card.className = "card";
        name.className = "name";
        button.id = city.id;
        button.className = "invest";

        name.textContent = city.nome;
        area.innerHTML = `${city.area} km&sup2;`;
        pop.textContent = `${city.populacao} hab.`;
        density.innerHTML = `${(city.populacao/city.area).toFixed(2)} hab./km&sup2`;
        button.textContent = "Invest";

        card.appendChild(name);
        card.appendChild(area);
        card.appendChild(pop);
        card.appendChild(density);
        card.appendChild(button);

        cards.appendChild(card);
    });
}

export function displayDialog(idStr) {
  const learnMore = document.querySelector('#learn-more');
  const closeModal = document.querySelector('#closeModal');

  learnMore.showModal();

  closeModal.addEventListener("click", () => {
    learnMore.close();
  }, { once: true }); // garante que o listener só execute uma vez
}

