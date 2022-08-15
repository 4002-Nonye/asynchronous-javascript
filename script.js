"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const searchInp = document.querySelector(".search_input");
const form = document.querySelector(".form");

///////////////////////////////////////
const getCountry = function (data, className = "") {
  const html = `<article class="country ${className} ">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span> ${(
        data.population / 1000000
      ).toFixed(1)} People</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
   </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function (e,country) {
// 	e.preventDefault()
//   //AJAX CALL COUNTRY 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${searchInp.value}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     //RENDER COUNTRY 1
//     getCountry(data);

//     //GET NEIGHBOUR COUNTRY 2
//     const [neighbour] = data.borders;
// console.log(neighbour)
//     if(!neighbour) return;
//     //AJAX CALL COUNTRY 2
//     const request2 = new XMLHttpRequest();
//   request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//   request2.send();
//   request2.addEventListener("load", function () {
//     const data2= JSON.parse(request2.responseText);
//     console.log(data2);
//     //RENDER COUNTRY 1
//     getCountry(data2,'neighbour');

//     console.log(data.borders);})

//   })};
// form.addEventListener("submit", getCountryAndNeighbour);

// const getCountryData = function () {
//   fetch(`https://restcountries.com/v2/name/mali`)
//     .then((response) => response.json())
//     .then((data) => {
//       getCountry(data[0]);
//       const neighbour = data[0].borders[0];
//     // console.log(neighbour);
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       getCountry(data ,'neighbour');
//       console.log(data);
//     });
// };
// getCountryData();
function getAdvice() {
  const advice = new XMLHttpRequest();
  advice.open("GET", "https://api.adviceslip.com/advice");
  advice.send();
  advice.addEventListener("load", function () {
    const ad = advice.responseText;
    console.log(ad);
  });
}

getAdvice();

//USING FETCH METHOD

const fetchAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((advicee) => {
    const {id,advice}=advicee.slip
      console.log(advice,id);
    }).catch((err)=>{console.error(err)});

};
fetchAdvice()
