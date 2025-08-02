const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description-weather');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-29.215437267436663&lon=-51.33565803551146&units=metric&appid=0bb04e2160eca26323117dcc9aafbb30';

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();           
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
}
// Farroupilha Coordinates
const lat = -29.215437267436663;
const lon = -51.33565803551146;
const appid = '0bb04e2160eca26323117dcc9aafbb30';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`;

const nextDay1 = document.querySelector('#next-day1');
const nextDay2 = document.querySelector('#next-day2');
const nextDay3 = document.querySelector('#next-day3'); 

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();           
            console.log(data);
            displayForecast3(data.list)
            //displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast3(data) {
    const now = new Date()
    let nowTimestamp = now.getTime() / 1000;
    let plus1 = nowTimestamp + 86400;
    let plus2 = nowTimestamp + 86400 * 2;
    let plus3 = nowTimestamp + 86400 * 3;

    const result1 = data.find(obj => Math.abs(obj.dt - plus1) < 10800);
    const result2 = data.find(obj => Math.abs(obj.dt - plus2) < 10800);
    const result3 = data.find(obj => Math.abs(obj.dt - plus3) < 10800);

    console.log(result1.dt_txt);
    console.log(result1.main.temp);

    day1 = result1.dt_txt.split(" ")
    day2 = result2.dt_txt.split(" ")
    day3 = result3.dt_txt.split(" ")
    nextDay1.innerHTML = `${day1[0]}: ${result1.main.temp}&deg;C`;
    nextDay2.innerHTML = `${day2[0]}: ${result2.main.temp}&deg;C`;
    nextDay3.innerHTML = `${day3[0]}: ${result3.main.temp}&deg;C`;
    
}

forecastApiFetch();


