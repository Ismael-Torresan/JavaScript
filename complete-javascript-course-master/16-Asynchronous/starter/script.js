'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data.population / 1000000).toFixed(1)}M
      </p>
      <p class="country__row">
        <span>🗣️</span>${Object.values(data.languages || {})[0]}
      </p>
      <p class="country__row">
        <span>💰</span>${Object.values(data.currencies || {})[0]?.name}
      </p>
    </div>
  </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)[0];
    console.log(data);

    renderCountry(data);

    const neighbour = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    for (let i = 0; i < neighbour.length; i++) {
      const request2 = new XMLHttpRequest();
      request2.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${neighbour[i]}`
      );
      request2.send();
      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText)[0];
        console.log({ data2 });

        renderCountry(data2);
        // const countryList = document.getElementById('countries')
        // countryList.innerHTML= html
      });
    }
  });
};

getCountryAndNeighbour('germany');
