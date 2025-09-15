// ...existing code...

document.addEventListener('DOMContentLoaded', function() {

  // For zomato.html
  const logInPlace = document.getElementById('LogInPlace');
  if (logInPlace) {
    logInPlace.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
  const rightsection = document.getElementById('rightsection');
  if (rightsection) {
    rightsection.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // Show "Item added" message when Add to Cart button is clicked
  const addToCartButtons = document.querySelectorAll('.order-button');
  addToCartButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Create or select the message element
      let message = document.getElementById('cart-message');
      if (!message) {
        message = document.createElement('div');
        message.id = 'cart-message';
        message.textContent = 'Your item has been added!';
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.right = '20px';
        message.style.background = '#b710ffff';
        message.style.color = '#f9f3f3ff';
        message.style.padding = '12px 24px';
        message.style.borderRadius = '12px';
        message.style.fontWeight = 'bold';
        message.style.boxShadow = '2px 2px 8px rgba(0,0,0,0.5)';
        message.style.zIndex = '9999';
        message.style.fontSize = '1.1rem';
        document.body.appendChild(message);
      } else {
        message.textContent = ' Your item has not been added !';
        message.style.display = 'block';
      }
      // Hide the message after 1 second
      setTimeout(function() {
        message.style.display = 'none';
      }, 1000);
    });
  });

});

document.addEventListener('DOMContentLoaded', function() {
  // Cart side panel (only visible when cart button is clicked)
  let cartPanel = document.querySelector('.cart-side-panel');
  if (!cartPanel) {
    cartPanel = document.createElement('div');
    cartPanel.className = 'cart-side-panel';
    cartPanel.innerHTML = `
      <button class="close-cart-panel">&times;</button>
      <h2>Your Items:</h2>
      <div class="cart-items-list">

        <span class="Food-Name">Pizza</span>
        <span class="item-quantity">x1</span>
        <span class="item-price">₹13.99</span>
        
      <button class="panel-order-button">Order</button>
      <button class="item-cancel-button">Delete</button>
      </div> 

      <div class="cart-items-list">
      
        <span class="Food-Name">Thali</span>
        <span class="item-quantity">x2</span>
        <span class="item-price">₹12</span>
        
      <button class="panel-order-button">Order</button>
      <button class="item-cancel-button">Delete</button>
      </div>

      <div class="cart-items-list">
      
        <span class="Food-Name">Cake</span>
        <span class="item-quantity">x1</span>
        <span class="item-price">₹18.80</span>
  
      <button class="panel-order-button">Order</button>
      <button class="item-cancel-button">Delete</button>
      </div>

      <div class="cart-items-list">
      
        <span class="Food-Name">Mayo</span>
        <span class="item-quantity">x3</span>
        <span class="item-price">₹99.8</span>
  
      <button class="panel-order-button">Order</button>
      <button class="item-cancel-button">Delete</button>
      </div>
    `;
    document.body.appendChild(cartPanel);
  }

  // Hide cart panel by default
  cartPanel.classList.remove('open');

  // Show cart panel when cart button is clicked
  const cartBtn = document.querySelector('.cart-button');
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      cartPanel.classList.add('open');
    });
  }

  // Close cart panel when close button is clicked
  cartPanel.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-cart-panel')) {
      cartPanel.classList.remove('open');
    }
  });

});
// ...existing code...