const apiUrl = 'http://206.189.148.20:8080/api/get/646c73893fb55cd1788e541d';
const getID = document.querySelector('.submit-button');
const outputElement = document.querySelector('.output');
const appElement = document.querySelector('.app'); // Assuming `.app` is the container element for product cards

getID.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Make an asynchronous request to your server-side code
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the retrieved data
      console.log(data); // For example, log the retrieved data
      
      // Update the DOM with the retrieved data
      outputElement.innerHTML = `
        <div class="product-card">
        <div class="product-image">
            <img src="${data.image}">
        </div>
        <div class="product-name">
            <h3>  ${data.name} </h3>
        </div>
        <div class="product-description">
            ${data.description}
        </div>
        <div class="product-price">
             ${data.price}
        </div>
        <div class="add-to-card submit-button">Submit</div>
      </div>
       `; // Modify this based on your data structure

      // Iterate over the data array and create product cards dynamically
    //   data.forEach(product => {
    //     const productCard = document.createElement('div');
    //     productCard.className = 'product-card';

    //     // Create and append the necessary elements for each product card
    //     // Modify this code based on your desired structure

    //     appElement.appendChild(productCard);
    //   });

      
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.log('Error:', error);
    });
});
