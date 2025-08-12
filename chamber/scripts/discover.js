const cards = document.querySelector('#cards');

const url = './data/items.json';

async function getCompanies() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayCompanies(data.items);
}

getCompanies();


function displayCompanies(companies) {
    companies.forEach(company => {
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let name = document.createElement('h2');

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");

        portrait.setAttribute("src", company.picture);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("alt", `Logo image of ${company.name}`);
        portrait.setAttribute("width", "300");
        portrait.setAttribute("height", "auto");

        card.setAttribute("id", company.id);

        address.textContent = company.address;
        description.textContent = company.description;
        name.textContent = company.name;

        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(description);
        
        cards.appendChild(card);
    });
}