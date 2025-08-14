import { displayCities } from "./ibge-functions.mjs";
import { displayDialog } from "./ibge-functions.mjs";


const cards = document.querySelector('#cards');



// AREA TODOS SC!
// https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N6[N3[42]]

// POPULAÇÃO ESTIMADA TODOS SC
// https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2024/variaveis/9324?localidades=N6[N3[42]]

// add module .mjs, density, video (with api, asyn try, module), dialog form, form URLSearchparams, localStorage use, invest guide page, wayfinding

// cities.js: video (with api, asyn try, module)
// invest-guide: invest guide page, wayfinding, update heads, link to the video on footer

const areaUrl = 'https://servicodados.ibge.gov.br/api/v3/agregados/1301/periodos/2010/variaveis/615?localidades=N6[N3[42]]';

const populationUrl = 'https://servicodados.ibge.gov.br/api/v3/agregados/6579/periodos/2024/variaveis/9324?localidades=N6[N3[42]]';

const cardsButton = document.querySelector('#cardsButton');
const listButton = document.querySelector('#listButton');

cardsButton.addEventListener('click', () => {
    cards.setAttribute("class", "cards")
});

listButton.addEventListener('click', () => {
    cards.setAttribute("class", "list");
});






async function getCitiesData() {
    try {
        const [areaRes, popRes] = await Promise.all([
            fetch(areaUrl),
            fetch(populationUrl)
        ]);

        if (!areaRes.ok || !popRes.ok) throw new Error("Error on reaching data");

        const areaData = await areaRes.json();
        const popData = await popRes.json();

        const citiesArea = areaData[0].resultados[0].series;
        const citiesPop = popData[0].resultados[0].series;

        const merged = citiesArea.map(cityA => {
            const popMatch = citiesPop.find(cityP => cityP.localidade.id === cityA.localidade.id);
            return {
                id: cityA.localidade.id,
                nome: cityA.localidade.nome,
                area: cityA.serie["2010"],
                populacao: popMatch ? popMatch.serie["2024"] : null
            };
        });

        console.log(merged);
        displayCities(merged);
        const buttons = document.querySelectorAll('.invest');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                displayDialog(`${button.id}`);
            });  
        });
        document.getElementById("timestamp").value = new Date().toISOString();
        localStorage.setItem("lastVisitCitiesPage", new Date().toISOString());

    } catch (error) {
        console.error(error);
    }
}

getCitiesData();
