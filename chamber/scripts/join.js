document.getElementById("timestamp").value = new Date().toISOString();

let membershipTiers = {
  "np": {
    name: "Non Profit Membership",
    cost: 0,
    benefits: [
      "Access to community events",
      "Basic newsletter updates",
    ]
  },
  "bronze": {
    name: "Bronze Membership",
    cost: 100,
    benefits: [
      "All non-profit benefits",
      "Small event discounts",
      "Listed in member directory"
    ]
  },
  "silver": {
    name: "Silver Membership",
    cost: 250,
    benefits: [
      "All bronze benefits",
      "Free training sessions",
      "Spotlight position on homepage"
    ]
  },
  "gold": {
    name: "Gold Membership",
    cost: 500,
    benefits: [
      "All silver benefits",
      "Premium advertising placement",
      "Exclusive networking events"
    ]
  }
};


const npButton = document.querySelector('#np');
const bronzeButton = document.querySelector('#bronze');
const silverButton = document.querySelector('#silver');
const goldButton = document.querySelector('#gold');

const learnMore = document.querySelector('#learn-more');

npButton.addEventListener('click', () => {
    displayTierDetails("np");
});

bronzeButton.addEventListener('click', () => {
    displayTierDetails("bronze");
});

silverButton.addEventListener('click', () => {
    displayTierDetails("silver");
});

goldButton.addEventListener('click', () => {
    displayTierDetails("gold");
});


function displayTierDetails(idStr) {
  learnMore.innerHTML = '';
  learnMore.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membershipTiers[idStr].name}</h2>
    <p><strong>Cost</strong>: $${membershipTiers[idStr].cost}</p>
    <p>${membershipTiers[idStr].benefits.map(b => `<li>${b}</li>`).join('')}</p>
  `;
  learnMore.showModal();
  
  closeModal.addEventListener("click", () => {
    learnMore.close();
  });
}




