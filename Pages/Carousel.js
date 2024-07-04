// Carousel.js
let propertyIndex = 0;

export function buildCarousel(container, properties) {
  container.innerHTML = ''; // Clear existing content

  if (properties.length === 0) {
      container.textContent = 'No properties found.';
      return;
  }

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  properties.forEach(property => {
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('property-card');

      // Create image element
      const image = document.createElement('img');
      image.src = property.imgSrc;
      image.alt = property.address;
      propertyCard.appendChild(image);

      // Create details section
      const details = document.createElement('div');
      details.classList.add('details');

      // Create heading for address
      const addressHeading = document.createElement('h3');
      addressHeading.textContent = property.address;
      details.appendChild(addressHeading);

      // Create paragraph for listing status
      const listingStatusPara = document.createElement('p');
      listingStatusPara.textContent = `Status: ${property.listingStatus}`;
      details.appendChild(listingStatusPara);

      // Create paragraph for price
      const pricePara = document.createElement('p');
      pricePara.textContent = `Price: $${property.price.toLocaleString()}`;
      details.appendChild(pricePara);

      // Create paragraph for property type
      const propertyTypePara = document.createElement('p');
      propertyTypePara.textContent = `Type: ${property.propertyType}`;
      details.appendChild(propertyTypePara);

      // Create link for detail URL
      const detailLink = document.createElement('a');
        detailLink.href = `https://www.zillow.com${property.detailUrl}`;
        detailLink.textContent = 'View Full Details';
        detailLink.target = '_blank'; // Open link in a new tab
        details.appendChild(detailLink);

      // Append details section to property card
      propertyCard.appendChild(details);

      // Append property card to carousel
      carousel.appendChild(propertyCard);
  });

  container.appendChild(carousel);
 //  Return carousel element to allow further interaction (if needed)
 return carousel;
}

// Function to scroll the Carousel
export function setupCarouselNavigation(carouselElement) {
  // const carouselEl = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  // Define the Event Listeners for the carousel  navigation
  prevBtn.addEventListener('click', function () {
      navigateCarousel(carouselElement, -1);
  });

  nextBtn.addEventListener('click', function () {
      navigateCarousel(carouselElement, 1);
  });
}

export function navigateCarousel(carouselElement, direction) {
  const propertyCards = carouselElement.querySelectorAll('.property-card');
  const cardWidth = propertyCards[0].offsetWidth;
  // console.log("cardWidth: ", cardWidth);

  // Calculate the new property index 
  propertyIndex = (propertyIndex + direction + propertyCards.length) % propertyCards.length;
  // console.log("propertyIndex: ", propertyIndex);

  // Calculate translateX based on propertyIndex
  const translateX = -propertyIndex * cardWidth;
  // console.log("translateX: ", translateX);

  // Adjust translateX for wrapping at the end
  if (propertyIndex < 0) {
    propertyIndex = propertyCards.length - 1; // Wrap to the last property-card
    translateX = -propertyIndex * cardWidth;
  }
  // Apply the transform style to carouselElement
  carouselElement.style.transform = `translateX(${translateX}px)`;
}
