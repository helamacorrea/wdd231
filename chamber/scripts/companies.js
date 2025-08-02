const cards = document.querySelector('#cards');

const url = './data/members.json';



async function getCompanies() {
    const response = await fetch(url);
    const data = await response.json();

    const filteredCompanies = data.companies.filter((company => company.level >= 2));
    const randomCompanies = filteredCompanies.sort(() => Math.random() - 0.5).slice(0, 3);
    
    displayCompanies(randomCompanies);
}
// filter silver and gold, and sort 3 

getCompanies();


function displayCompanies(companies) {
    companies.forEach(company => {
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let link = document.createElement('a');
        let name = document.createElement('p');

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");

        portrait.setAttribute("src", company.logo);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("alt", `Logo image of ${company.name}`);
        portrait.setAttribute("width", "80");
        portrait.setAttribute("height", "auto");
        card.setAttribute("id", company.id);

        address.textContent = company.address;
        number.textContent = company.phone;
        link.textContent = company.url;
        
        link.setAttribute("href", company.url);

        name.textContent = company.name;

        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(link);
        
        cards.appendChild(card);
    });
}