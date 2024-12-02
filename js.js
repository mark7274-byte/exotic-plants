document.addEventListener("DOMContentLoaded", function () {
    const sortSelect = document.getElementById('sort-options');
    const plantGallery = document.getElementById('plant-gallery');
    
    // Function to sort the plant cards
    function sortPlants() {
      const sortOption = sortSelect.value;
      const plantCards = Array.from(plantGallery.getElementsByClassName('plant-card'));
  
      plantCards.sort((a, b) => {
        const nameA = a.dataset.name.toLowerCase();
        const nameB = b.dataset.name.toLowerCase();
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
  
        switch (sortOption) {
          case 'name-asc':
            return nameA.localeCompare(nameB); // Sort by name (A-Z)
          case 'name-desc':
            return nameB.localeCompare(nameA); // Sort by name (Z-A)
          case 'price-asc':
            return priceA - priceB; // Sort by price (lowest to highest)
          case 'price-desc':
            return priceB - priceA; // Sort by price (highest to lowest)
          default:
            return 0;
        }
      });
  
      // Clear the gallery and append sorted cards
      plantGallery.innerHTML = '';
      plantCards.forEach(card => plantGallery.appendChild(card));
    }
  
    // Add event listener to trigger sorting
    sortSelect.addEventListener('change', sortPlants);
  
    // Initial sort on page load (if needed)
    sortPlants();
  });
  