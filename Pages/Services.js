import axios from 'axios';
import { buildCarousel } from './Carousel.js';

export async function buildServicesPage() {
  const mainEl = document.querySelector("main");
  mainEl.innerHTML = ""; // Clear main content

  const zipCode = prompt("Please enter a zip code:");
  if (!zipCode) return;

  try {
    const response = await axios.get('https://zillow-com1.p.rapidapi.com/mapBoundary', {
      params: { zip: zipCode },
      headers: {
        'x-rapidapi-key': '70fd5d602bmshc18ab45d6a6dedcp199b7cjsn840825fcbc8b',
        'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
      }
    });

    const properties = response.data.properties;
    buildCarousel(mainEl, properties);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch data from Zillow API.");
  }
}
