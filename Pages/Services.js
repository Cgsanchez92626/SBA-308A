import { buildCarousel } from '/Pages/Carousel.js';
// import axios from 'axios';

export async function buildServicesPage() {
  console.log("Build Services page function called");
  const mainEl = document.querySelector("main");
  mainEl.innerHTML = ""; // Clear main content

//   const zipCode = prompt("Please enter a zip code:");
    // Create zip code input field and button
    const zipContainer = document.createElement("div");
    zipContainer.classList.add("zip-container");
    zipContainer.style.paddingTop = "50px"; // Adjust padding top as needed

    // Create zip code input field
    const zipInput = document.createElement("input");
    zipInput.setAttribute("type", "text");
    zipInput.setAttribute("placeholder", "Enter zip code");
    zipInput.style.marginRight = "10px"; // Adjust margin as needed

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.style.cursor = "pointer"; // Set cursor style for button

    // Event listener for submit button click
    submitButton.addEventListener("click", async function () {
        const zipCode = zipInput.value.trim();
        console.log("In Services.js: Zip Code: ", zipCode);
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
});

zipContainer.appendChild(zipInput);
zipContainer.appendChild(submitButton);
mainEl.appendChild(zipContainer);
console.log("Build Services page function Ended");
}
