// import { buildCarousel } from './Carousel.js';
import { buildCarousel, setupCarouselNavigation } from './Carousel.js';

const mainSEl = document.querySelector("main");
  //   mainSEl.innerHTML = ""; // Clear main content
  // Set the background color of mainEl using CSS custom property
  mainSEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--main-bg");

  document.addEventListener('DOMContentLoaded', function () {
    const zipInput = document.getElementById('zipInput');
    const submitButton = document.getElementById('submitButton');
    const carouselContainer = document.getElementById('carousel');

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
              const properties = data.props;
              const carousel = buildCarousel(carouselContainer, properties); // Pass properties to buildCarousel function
              setupCarouselNavigation(carousel); // Setup navigation buttons for the carousel
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              alert("Failed to fetch data from Zillow API.");
          });
      });
// console.log("Build Services page function Ended");
  });
