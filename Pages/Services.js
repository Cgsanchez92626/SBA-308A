import { buildCarousel } from './Carousel.js';
import { menuLinks } from "./Global.js";
// import axios from './axios';
// const axios = require('axios');

 async function buildServicesPage() {
  // console.log("Build Services page function called");
  const mainSEl = document.querySelector("main");
  //   mainSEl.innerHTML = ""; // Clear main content
  // Set the background color of mainEl using CSS custom property
  mainSEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--main-bg");

//   const zipCode = prompt("Please enter a zip code:");
    // Create zip code input field and button
    const zipContainer = document.createElement("div");
    zipContainer.classList.add("zip-container");
    zipContainer.style.display = "block";
    zipContainer.style.maxwidth = "400px";
    zipContainer.style.margin = "auto";
    zipContainer.style.marginTop = "60px";
    zipContainer.style.padding = "20px"; // Adjust padding top as needed

    // Create zip code input field
    const zipInput = document.createElement("input");
    zipInput.setAttribute("type", "text");
    zipInput.setAttribute("placeholder", "Enter zip code");
    zipInput.style.width = "25%";
    zipInput.style.padding = "10px";
    zipInput.style.marginBottom = "15px"; // Adjust margin as needed
    zipInput.style.boxSizing = "border-box";

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.style.cursor = "pointer"; // Set cursor style for button
    // submitButton.style.display = "block";
    submitButton.style.width = "25%";
    submitButton.style.padding = "10px";
    submitButton.style.backgroundColor = "#0e9aa7";
    submitButton.style.color = "white";
    submitButton.style.border = "none";

    // Event listener for submit button click
    submitButton.addEventListener("click", function () {
      const zipCode = zipInput.value.trim();
      console.log("In Services.js: Zip Code: ", zipCode);
      if (!zipCode) return;

      const url = `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${zipCode}&status_type=ForSale&home_type=Houses%2C%20Multi-family`;
      const options = {
          method: 'GET',
          headers: {
              'x-rapidapi-key': '70fd5d602bmshc18ab45d6a6dedcp199b7cjsn840825fcbc8b',
              'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
          }
      };

      fetch(url, options)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log(data); // log the data received

              const properties = data.properties;
              buildCarousel(mainSEl, properties); // pass properties to buildCarousel function
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              alert("Failed to fetch data from Zillow API.");
          });
  });


zipContainer.appendChild(zipInput);
zipContainer.appendChild(submitButton);
mainSEl.appendChild(zipContainer);
// console.log("Build Services page function Ended");
}
buildServicesPage();