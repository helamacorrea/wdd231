const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

const today = new Date();

year.innerHTML = today.getFullYear();

lastModified.innerHTML = `Last Modified: ${document.lastModified}`;