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
        let button = document.createElement('button');
        let companyDetails = document.createElement('dialog');

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");

        portrait.setAttribute("src", company.picture);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("alt", `Logo image of ${company.name}`);
        portrait.setAttribute("width", "300");

        card.setAttribute("id", company.id);

        address.textContent = company.address;
        description.textContent = company.description;
        name.textContent = company.name;
        button.textContent = "Learn More"

        button.addEventListener('click', () =>{
            displayCompany(companyDetails, company);
        });


        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        card.appendChild(companyDetails);
        
        cards.appendChild(card);
    });
}

function displayCompany(companyDetails,company) {
  companyDetails.innerHTML = '';
  companyDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${company.name}</h2>
    <p><strong>Address</strong>: ${company.address}</p>
    <p><strong>Description</strong>: ${company.description}</p>
  `;
  companyDetails.showModal();
  
  const closeModalB = companyDetails.querySelector('#closeModal');

  closeModalB.addEventListener("click", () => {
    companyDetails.close();
  });
}

const messageEl = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    messageEl.textContent = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    messageEl.textContent = `You last visited ${daysDiff} day ago.`;
  } else {
    messageEl.textContent = `You last visited ${daysDiff} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
