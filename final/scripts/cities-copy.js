const cards = document.querySelector('#cards');

// AREA TODOS SC!
// https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N6[N3[42]]

// POPULAÇÃO ESTIMADA TODOS SC
// https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2024/variaveis/9324?localidades=N6[N3[42]]

const areaUrl = 'https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N6[N3[42]]';

const populationUrl = 'https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2024/variaveis/9324?localidades=N6[N3[42]]';

const cardsButton = document.querySelector('#cardsButton');
const listButton = document.querySelector('#listButton');

async function getCitiesArea() {
    try {
        const response = await fetch(areaUrl);
        if (response.ok) {
            const data = await response.json();           
            console.log(data[0].resultados[0].series);
            displayCities(data[0].resultados[0].series);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getCitiesPopulation() {
    try {
        const response = await fetch(populationUrl);
        if (response.ok) {
            const data = await response.json();           
            console.log(data[0].resultados[0].series);
            //displayCities(data[0].resultados[0].series);
            const json2 = data[0].resultados[0].series;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const json1 = [{ id: 1, name: "Alice" }];
const json2 = [{ id: 1, age: 25 }, { id: 2, name: "Bob" }];

const merged = [...json1];

json2.forEach(obj2 => {
  const index = merged.findIndex(o => o.id === obj2.id);
  if (index > -1) {
    merged[index] = { ...merged[index], ...obj2 };
  } else {
    merged.push(obj2);
  }
});

console.log(merged);


getCitiesArea();

cardsButton.addEventListener('click', () => {
    cards.setAttribute("class", "cards")
});

listButton.addEventListener('click', () => {
    cards.setAttribute("class", "list");
});


function displayCities(citiesArea) {
    citiesArea.forEach(cityA => {
        let card = document.createElement('section');
        //let portrait = document.createElement('img');
        let name = document.createElement('p');
        let area = document.createElement('p');
        // let population = document.createElement('a');
        // let density = document.createElement('p');

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");

        // portrait.setAttribute("src", company.logo);
        // portrait.setAttribute("loading", "lazy");
        // portrait.setAttribute("alt", `Logo image of ${company.name}`);
        // portrait.setAttribute("width", "80");
        // portrait.setAttribute("height", "auto");
        // card.setAttribute("id", company.id);

        name.textContent = cityA.localidade.nome;
        area.innerHTML = `${cityA.serie["2010"]}km&sup2;`;

        card.appendChild(name);
        //card.appendChild(portrait);
        card.appendChild(area);
        
        cards.appendChild(card);
    });
}