// REST Countries v3.1 has been retired (v5 needs an API key): when the API does not
// return a list, fall back to the bundled sample in sample-countries.js.
async function fetchCountries(url, keep) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (Array.isArray(data)) return data;
    } catch (error) {
        // network error or invalid JSON: use the offline sample below
    }
    document.getElementById("offline-badge").hidden = false;
    return SAMPLE_COUNTRIES.filter(keep || (() => true));
}

async function getCountry() {
    const res = await fetchCountries("https://restcountries.com/v3.1/all");

    var listCountry = document.getElementById("list-country");
    listCountry.innerHTML = "";

    res.forEach(element => {
        showCountry(element);
    });

    var elt = document.querySelector('select');
    elt.disabled = false;
}

async function getCountryByRegion(country) {
    const res = await fetchCountries("https://restcountries.com/v3.1/region/" + country,
        c => c.region.toLowerCase() === country.toLowerCase());

    var listCountry = document.getElementById("list-country");
    listCountry.innerHTML = "";

    res.forEach(element => {
        showCountry(element);
    });
}

async function searchCountry() {
    var search = document.getElementById("search").value;
    document.getElementById("search").value = "";

    console.log(search);
    const res = await fetchCountries("https://restcountries.com/v3.1/name/" + search,
        c => c.name.common.toLowerCase().includes(search.toLowerCase()));

    var listCountry = document.getElementById("list-country");
    listCountry.innerHTML = "";


    res.forEach(element => {
        showCountry(element);
    });
}

function showCountry(element) {
    var listCountry = document.getElementById("list-country");

    var country = document.createElement("div");
    country.setAttribute("class", "country");

    var countryName = document.createElement("h4");
    countryName.setAttribute("class", "country-title");
    countryName.innerHTML = element.name.common;

    var countryDiv = document.createElement("div");
    countryDiv.setAttribute("class", "country-flag");

    var countryFlag = document.createElement("img");
    countryFlag.setAttribute("src", element.flags.png);
    countryFlag.setAttribute("alt", element.name);

    countryDiv.appendChild(countryFlag);

    var countryPopulation = document.createElement("p");
    countryPopulation.setAttribute("class", "sub-title");
    countryPopulation.innerHTML = "Population: " + element.population;

    var countryRegion = document.createElement("p");
    countryRegion.setAttribute("class", "sub-title");
    countryRegion.innerHTML = "Region: " + element.region;

    var countryCapital = document.createElement("p");
    countryCapital.setAttribute("class", "sub-title");
    countryCapital.innerHTML = "Capital: " + element.capital;

    country.appendChild(countryName);
    country.appendChild(countryDiv);
    country.appendChild(countryPopulation);
    country.appendChild(countryRegion);
    country.appendChild(countryCapital);

    listCountry.appendChild(country);
}

async function toggleLightMode() {
    var body = document.querySelector('body');
    var lightModeBtn = document.querySelector('#light-mode-btn');
    var input = document.querySelector('input');
    var select = document.querySelector('#select');
    var selectOptions = document.querySelectorAll('#select option');
    var countries = document.querySelectorAll('.country');
    var h1 = document.querySelector('h1');

    if (lightModeBtn.innerHTML === 'Light Mode') {
        lightModeBtn.innerHTML = 'Dark Mode';
    } else {
        lightModeBtn.innerHTML = 'Light Mode';
    }

    body.classList.toggle('light-mode');
    lightModeBtn.classList.toggle('light-mode');
    input.classList.toggle('light-mode');
    select.classList.toggle('light-mode');
    h1.classList.toggle('light-mode');

    for (var i = 0; i < selectOptions.length; i++) {
        selectOptions[i].classList.toggle('light-mode');
    }

    for (var i = 0; i < countries.length; i++) {
        countries[i].classList.toggle('light-mode');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var elt = document.querySelector('select');
    elt.disabled = true;

    getCountry();

    var searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var countries = document.querySelectorAll('.country');

        for (var i = 0; i < countries.length; i++) {
            var title = countries[i].querySelector('.country-title').textContent.toLowerCase();
            var subTitle = countries[i].querySelector('.sub-title').textContent.toLowerCase();

            if (title.includes(searchQuery) || subTitle.includes(searchQuery)) {
                countries[i].style.display = "block";
            } else {
                countries[i].style.display = "none";
            }
        }
    });

    var select = document.querySelector('#select');
    select.addEventListener('change', function(event) {
        if (event.target.value === '') {
            getCountry();
        } else {
            getCountryByRegion(event.target.value);
        }
    });
});

var elt = document.querySelector('select');
elt.selectedIndex = 0;
elt.disabled = true;
getCountry("Americas");

elt.addEventListener('change', function () {
    if(this.value == 0) {
        getCountry();
    } else {
        getCountryByRegion(this.value);
    }
})
