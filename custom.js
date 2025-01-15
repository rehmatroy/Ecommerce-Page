// Product data structure
const product = {
    name: "Eco-Friendly Water Bottle",
    price: 24.99,
    inStock: 50,
    images: [
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1570533136641-c30f8d3acd97?auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?auto=format&fit=crop&w=687&q=80"
    ]
};

// Cart data structure
let cart = [];

// Function to change the main image
function changeImage(src) {
    document.getElementById('main-image').src = src;
}

// Function to add item to cart
function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (quantity > 0 && quantity <= product.inStock) {
        const item = {
            ...product,
            quantity: quantity
        };
        
        cart.push(item);
        updateCartMessage(`Added ${quantity} ${product.name}(s) to cart!`);
        updateStock(quantity);
    } else {
        updateCartMessage("Invalid quantity or out of stock!");
    }
}

// Function to update stock
function updateStock(quantity) {
    product.inStock -= quantity;
    if (product.inStock === 0) {
        document.getElementById('add-to-cart').disabled = true;
        updateCartMessage("Product is out of stock!");
    }
}

// Function to update cart message
function updateCartMessage(message) {
    document.getElementById('cart-message').textContent = message;
}

// Event listener for Add to Cart button
document.getElementById('add-to-cart').addEventListener('click', addToCart);

// Initialize cart message
updateCartMessage(`${product.inStock} items in stock`);

// Preload images
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Preload product images
preloadImages(product.images);

