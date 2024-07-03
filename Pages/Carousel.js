// Carousel.js
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
        detailLink.textContent = 'View Details';
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
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('prev-btn');
  prevBtn.textContent = '< Previous';
  carouselElement.parentNode.insertBefore(prevBtn, carouselElement);

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('next-btn');
  nextBtn.textContent = 'Next >';
  carouselElement.parentNode.insertBefore(nextBtn, carouselElement.nextSibling);

  let propertyIndex = 0;

  prevBtn.addEventListener('click', function () {
      navigateCarousel(carouselElement, -1, propertyIndex);
  });

  nextBtn.addEventListener('click', function () {
      navigateCarousel(carouselElement, 1, propertyIndex);
  });
}

function navigateCarousel(carouselElement, direction, currentIndex) {
  const propertyCards = carouselElement.querySelectorAll('.property-card');
  const cardWidth = propertyCards[0].offsetWidth;
  const numCards = propertyCards.length;
  const maxIndex = numCards - 1;

  propertyIndex = (currentIndex + direction + numCards) % numCards;
  const translateX = -propertyIndex * cardWidth;

  carouselElement.style.transform = `translateX(${translateX}px)`;
}
