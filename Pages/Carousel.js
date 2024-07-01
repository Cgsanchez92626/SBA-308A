export function buildCarousel(container, properties) {
    if (!properties || properties.length === 0) {
      container.textContent = "No properties found.";
      return;
    }
  
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
  
    properties.forEach(property => {
      const item = document.createElement('div');
      item.classList.add('carousel-item');
      item.innerHTML = `
        <img src="${property.imageUrl}" alt="${property.address}" />
        <h3>${property.address}</h3>
        <p>${property.description}</p>
        <button class="favorite-btn">Favorite</button>
      `;
      
      const favoriteBtn = item.querySelector('.favorite-btn');
      favoriteBtn.addEventListener('click', function() {
        favoriteBtn.classList.toggle('favorited');
        // Implement logic to manage favorited items
      });
  
      carousel.appendChild(item);
    });
  
    container.appendChild(carousel);
  }  