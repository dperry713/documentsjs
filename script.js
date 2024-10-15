// Task 1: Create an array of product objects
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Function to display product information
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Task 3: Event listener to trigger display on page load
window.addEventListener('load', displayProducts);
